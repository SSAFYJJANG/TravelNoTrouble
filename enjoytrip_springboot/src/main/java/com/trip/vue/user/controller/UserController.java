package com.trip.vue.user.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.vue.board.model.service.BoardService;
import com.trip.vue.hotplace.model.service.HotplaceService;
import com.trip.vue.map.model.service.MapService;
import com.trip.vue.plan.model.service.PlanDetailService;
import com.trip.vue.plan.model.service.PlanService;
import com.trip.vue.user.model.UserDto;
import com.trip.vue.user.model.service.UserService;
import com.trip.vue.util.JWTUtil;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/user")
@Slf4j
@CrossOrigin(origins="http://localhost:8080/trip")
public class UserController {
	@Autowired
	private UserService service;
	@Autowired
	private PlanService planService;
	@Autowired
	private PlanDetailService planDetailService;
	@Autowired
	private BoardService boardService;
	@Autowired
	private HotplaceService hotplaceService;
	@Autowired
	private MapService mapService;
	@Autowired
	private JWTUtil jwtUtil;
	
	//post 로그인 "/login"
	@Operation(summary = "로그인", description = "아이디와 비밀번호를 이용하여 로그인 처리.")
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(
			@RequestBody @Parameter(description = "로그인 시 필요한 회원정보(아이디, 비밀번호).", required = true) UserDto userDto) {
		log.trace("login user : {}", userDto);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		HttpStatus status = HttpStatus.ACCEPTED;
		try {
			UserDto loginUser = service.login(userDto);
			if(loginUser != null) {
				String accessToken = jwtUtil.createAccessToken(loginUser.getUserId());
				String refreshToken = jwtUtil.createRefreshToken(loginUser.getUserId());
				log.debug("access token : {}", accessToken);
				log.debug("refresh token : {}", refreshToken);
				
//					발급받은 refresh token 을 DB에 저장.
				service.saveRefreshToken(loginUser.getUserId(), refreshToken);
				
//					JSON 으로 token 전달.
				resultMap.put("access-token", accessToken);
				resultMap.put("refresh-token", refreshToken);
				
				status = HttpStatus.CREATED;
			} else {
				resultMap.put("message", "아이디 또는 패스워드를 확인해 주세요.");
				status = HttpStatus.UNAUTHORIZED;
			} 
			
		} catch (Exception e) {
			log.debug("로그인 에러 발생 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	//get 로그아웃 "/logout/{userId}"
	@Operation(summary = "로그아웃", description = "회원 정보를 담은 Token 을 제거한다.")
	@GetMapping("/logout/{userId}")
	@Hidden
	public ResponseEntity<?> removeToken(@PathVariable ("userId") @Parameter(description = "로그아웃 할 회원의 아이디.", required = true) String userId) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		try {
			service.deleteRefreshToken(userId);
			status = HttpStatus.OK;
		} catch (Exception e) {
			log.error("로그아웃 실패 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	// refresh token 재발급
	@Operation(summary = "Access Token 재발급", description = "만료된 access token 을 재발급 받는다.")
	@PostMapping("/refresh")
	public ResponseEntity<?> refreshToken(@RequestBody UserDto memberDto, HttpServletRequest request)
			throws Exception {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		String token = request.getHeader("refreshToken");
		log.debug("token : {}, memberDto : {}", token, memberDto);
		if (jwtUtil.checkToken(token)) {
			if (token.equals(service.getRefreshToken(memberDto.getUserId()))) {
				String accessToken = jwtUtil.createAccessToken(memberDto.getUserId());
				log.debug("token : {}", accessToken);
				log.debug("정상적으로 access token 재발급!!!");
				resultMap.put("access-token", accessToken);
				status = HttpStatus.CREATED;
			}
		} else {
			log.debug("refresh token 도 사용 불가!!!!!!!");
			status = HttpStatus.UNAUTHORIZED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	//post 회원가입 "/"
	@PostMapping("")
	public ResponseEntity<?> registUser(@RequestBody UserDto userinfo) throws Exception{
		log.info("TEST RegistUser\n" + userinfo);
		try {
			int result = service.registUser(userinfo);
			if(result < 1) throw new Exception();
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//put 수정 "/{userId}" --
	@Operation(summary = "회원인증", description = "회원 정보를 담은 Token 을 반환한다.")
	@PutMapping("/{userId}")
	public ResponseEntity<?> updateUserInfo(
			@RequestBody @Parameter(description = "인증할 회원의 아이디.", required = true) UserDto userinfo,
			HttpServletRequest request) 
					throws Exception{
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		if (jwtUtil.checkToken(request.getHeader("Authorization"))) {
			log.info("사용 가능한 토큰!!!");
			try {
//				로그인 사용자 정보.
				if(service.updateUserInfo(userinfo) < 1) throw new Exception();
				resultMap.put("userInfo", userinfo);
//				resultMap.put("userInfo", service.getUserInfoById(userinfo.getUserId()));
				status = HttpStatus.OK;
			} catch (Exception e) {
				log.error("정보수정 실패 : {}", e);
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
		} else {
			log.error("사용 불가능 토큰!!!");
			status = HttpStatus.UNAUTHORIZED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	
	
	//delete 탈퇴 "" --
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUserInfo(
			@PathVariable ("userId") @Parameter(description = "탈퇴할 회원의 아이디.", required = true) String userId) throws Exception{
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		log.info("deleteUserInfo access", userId);
		try {
			// refresh token
			service.deleteRefreshToken(userId);
			// plan_detail
			planDetailService.deleteAllPlanDetail(userId);
			// plan_days
			planService.deleteAllPlanDays(userId);
			// plan
			planService.deleteAllPlan(userId);
			// board
			boardService.deleteAllBoard(userId);
			// hotplace
			hotplaceService.deleteAllHotplace(userId);
			// attaction_card
			mapService.deleteAllAttraction(userId);
			int result = service.deleteUserInfo(userId);
			if(result < 1) throw new Exception();
			status = HttpStatus.OK;
		} catch (Exception e) {
			log.error("탈퇴 실패 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	//get 세부정보 가져오기 - "/{userid}"
	@Operation(summary = "회원인증", description = "회원 정보를 담은 Token 을 반환한다.")
	@GetMapping("/{userId}")
	public ResponseEntity<Map<String, Object>> getUserInfoById(
			@PathVariable("userId") @Parameter(description = "인증할 회원의 아이디.", required = true) String userId,
			HttpServletRequest request) {
//			logger.debug("userId : {} ", userId);
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		System.out.println("HEADER:" + request.getHeader("Authorization")); //
		if (jwtUtil.checkToken(request.getHeader("Authorization"))) {
			log.info("사용 가능한 토큰!!!");
			try {
//					로그인 사용자 정보.
				UserDto userDto = service.getUserInfoById(userId);
				resultMap.put("userInfo", userDto);
				status = HttpStatus.OK;
			} catch (Exception e) {
				log.error("정보조회 실패 : {}", e);
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
		} else {
			log.error("사용 불가능 토큰!!!");
			status = HttpStatus.UNAUTHORIZED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	//get 유저 수 가져오기 - 메인화면 "/cnt"
	@GetMapping("/cnt")
	public ResponseEntity<?> getTotalUserCount() throws Exception{
		try {
			return new ResponseEntity<Integer>(service.getTotalUserCount(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/pwd/{id}")
	public ResponseEntity<?> findUserPassword(@PathVariable("id") String userId) throws Exception{
		try {
			return new ResponseEntity<Integer>(service.findUserPassword(userId), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("서버 오류", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
