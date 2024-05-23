package com.trip.vue.user.model.service;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.TrueFileFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.trip.vue.user.model.UserDto;
import com.trip.vue.user.model.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public UserDto login(UserDto userDto) {
		return userDao.login(userDto);
	}
	
	@Override
	public void saveRefreshToken(String userId, String refreshToken) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("token", refreshToken);
		
		userDao.saveRefreshToken(map);
	}
	
	@Override
	public void deleteRefreshToken(String userId) throws Exception {
		Map<String, String> map = new HashMap<String, String>();
		map.put("userId", userId);
		map.put("token", null);
		userDao.deleteRefreshToken(map);
	}
	
	@Override
	public Object getRefreshToken(String userId) throws Exception {
		return userDao.getRefreshToken(userId);
	}

	@Transactional
	@Override
	public int registUser(UserDto userinfo) {
		return userDao.registUser(userinfo);
	}

	@Transactional
	@Override
	public int updateUserInfo(UserDto ob, MultipartFile file) throws Exception {		
		if (file != null) {
			final String extension = file.getContentType().split("/")[1];
			
			String dir_path = "/profile";
			int count = 0;
			File dir = new File(dir_path);
			File[] list = dir.listFiles();
			for (File info : FileUtils.listFiles(dir, TrueFileFilter.INSTANCE, TrueFileFilter.INSTANCE)) {
				count++;
			}

//			final String fileName = UUID.randomUUID() + "." + extension;
			final String fileName = "profile" + count + "." + extension;
			
			Path uploadPath = Paths.get("/profile/");
			if (!Files.exists(uploadPath)) {
				Files.createDirectories(uploadPath);
				System.out.println("make dir : " + uploadPath.toString());
			}
			
			try (InputStream inputStream = file.getInputStream()) {
				Path filePath = uploadPath.resolve(fileName);
				Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
				ob.setImage(fileName);
			} catch (Exception e) {
				throw new Exception("Could not save image file: " + fileName, e);
			}
		}
		return userDao.updateUserInfo(ob);
	}

	@Transactional
	@Override
	public int deleteUserInfo(String userId) {
		return userDao.deleteUserInfo(userId);
	}

	@Override
	public UserDto getUserInfoById(String id) {
		return userDao.getUserInfoById(id);
	}

	@Override
	public int getTotalUserCount() throws Exception {
		return userDao.getTotalUserCount();
	}

	@Override
	public int findUserPassword(String userId) {
		return userDao.findUserPassword(userId);
	}

	@Override
	public int checkIdDuplicate(String userId) {
		return userDao.checkIdDuplicate(userId);
	}

}
