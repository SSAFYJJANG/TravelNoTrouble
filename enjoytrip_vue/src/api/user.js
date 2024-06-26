import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function getUserCount(success, fail) {
  await local.get(`/user/cnt`).then(success).catch(fail);
}

async function signup(param, success, fail) {
  await local.post(`/user`, param).then(success).catch(fail);
}

async function userConfirm(param, success, fail) {
  await local.post(`/user/login`, param).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  local.defaults.headers["Authorization"] = sessionStorage.getItem("accessToken");
  await local.get(`/user/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers["refreshToken"] = sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
  await local.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await local.get(`/user/logout/${userid}`).then(success).catch(fail);
}

async function update(userInfo, success, fail) {
  console.log("update", userInfo);
  await local
    .put(`/user/${userInfo.userId}`, userInfo, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(success)
    .catch(fail);
}

async function leave(userId, success, fail) {
  await local.delete(`/user/${userId}`).then(success).catch(fail);
}

async function findPwd(userId, success, fail) {
  await local.get(`/user/pwd/${userId}`).then(success).catch(fail);
}

async function duplicate(userId, success, fail) {
  await local.get(`/user/id/${userId}`).then(success).catch(fail);
}

export {
  getUserCount,
  signup,
  userConfirm,
  findById,
  tokenRegeneration,
  logout,
  update,
  leave,
  findPwd,
  duplicate,
};
