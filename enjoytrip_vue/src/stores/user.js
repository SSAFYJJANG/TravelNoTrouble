import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

import {
  signup,
  userConfirm,
  findById,
  tokenRegeneration,
  logout,
  update,
  leave,
  findPwd,
  duplicate
} from "@/api/user";
import { httpStatusCode } from "@/util/http-status";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();

  const isLogin = ref(false);
  const isLoginError = ref(false);
  const userInfo = ref(null);
  const isValidToken = ref(false);
  const userPwd = ref(null);
  const isDuplicate = ref(false);
  const isExist = ref(false);

  const userSignup = async (signupUser) => {
    await signup(signupUser,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("회원가입 성공!!!");
          console.log("res", response);
        }
       },
      (error) => { 
        console.log(error);
      });
  };

  const userLogin = async (loginUser) => {
    await userConfirm(
      loginUser,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("로그인 성공!!!!");
          let { data } = response;
          let accessToken = data["access-token"];
          let refreshToken = data["refresh-token"];
          isLogin.value = true;
          isLoginError.value = false;
          isValidToken.value = true;
          sessionStorage.setItem("accessToken", accessToken);
          sessionStorage.setItem("refreshToken", refreshToken);
        }
      },
      (error) => {
        console.log("로그인 실패!!!!");
        isLogin.value = false;
        isLoginError.value = true;
        isValidToken.value = false;
        console.error(error);
      }
    );
  };

  const getUserInfo = async (token) => {
    let decodeToken = jwtDecode(token);
    await findById(
      decodeToken.userId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          userInfo.value = response.data.userInfo;
          console.log("유저 정보", userInfo.value);
        } else {
          console.log("유저 정보 없음!!!!");
        }
      },
      async (error) => {
        console.error(
          "g[토큰 만료되어 사용 불가능.] : ",
          error.response.status,
          error.response.statusText
        );
        isValidToken.value = false;
        await tokenRegenerate();
      }
    );
  };

  const tokenRegenerate = async () => {
    await tokenRegeneration(
      JSON.stringify(userInfo.value),
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          let accessToken = response.data["access-token"];
          sessionStorage.setItem("accessToken", accessToken);
          isValidToken.value = true;
        }
      },
      async (error) => {
        // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
        if (error.response.status === httpStatusCode.UNAUTHORIZED) {
          // 다시 로그인 전 DB에 저장된 RefreshToken 제거.
          await logout(
            userInfo.value.userId,
            (response) => {
              if (response.status === httpStatusCode.OK) {
                console.log("리프레시 토큰 제거 성공");
              } else {
                console.log("리프레시 토큰 제거 실패");
              }
              alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
              isLogin.value = false;
              userInfo.value = null;
              isValidToken.value = false;
              router.push({ name: "auth-login" });
            },
            (error) => {
              console.error(error);
              isLogin.value = false;
              userInfo.value = null;
            }
          );
        }
      }
    );
  };

  const userLogout = async () => {
    await logout(
      userInfo.value.userId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          isLogin.value = false;
          userInfo.value = null;
          isValidToken.value = false;

          sessionStorage.removeItem("accessToken");
          sessionStorage.removeItem("refreshToken");
        } else {
          console.error("유저 정보 없음!!!!");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateUserInfo = async (userInfo) => {
    await update(
      userInfo,
      (response) => {
        if (response.status === httpStatusCode.CREATE) {
          console.log("업데이트 성공");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const deleteUserInfo = async (userInfo) => {
    await leave(
      userInfo.userId,
      (response) => {
        if (response.status === httpStatusCode.OK) {
          console.log("탈퇴 성공");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const findUserPassword = async (userId) => {
    userPwd.value = null;
    await findPwd(
      userId,
      (response) => { 
        if (response.status === httpStatusCode.OK) {
          userPwd.value = response.data;
          isExist.value = true;
        } else {
          isExist.value = false;
        }
      },
      async (error) => {
        isExist.value = false;
        console.log(error);
      }
    )
  };

  const checkIdDuplicate = async (userId) => {
    await duplicate(
      userId,
      (response) => { 
        if (response.status === httpStatusCode.OK) {
          if (response.data > 0) {
            isDuplicate.value = true;
          } else {
            isDuplicate.value = false;
          }
        }
      },
      async (error) => {
        console.log(error);
      }
    );
  };

  return {
    isLogin,
    isLoginError,
    userInfo,
    isValidToken,
    isDuplicate,
    userPwd,
    isExist,
    userSignup,
    userLogin,
    getUserInfo,
    tokenRegenerate,
    userLogout,
    updateUserInfo,
    deleteUserInfo,
    findUserPassword,
    checkIdDuplicate
  };
},
{
  persist: true
});
