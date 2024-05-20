import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function signup(param, success, fail) {
  await local.post(`/user`, param).then(success).catch(fail);
}

async function userConfirm(param, success, fail) {
  await local.post(`/user/login`, param).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  local.defaults.headers["Authorization"] =
    sessionStorage.getItem("accessToken");
  await local.get(`/user/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers["refreshToken"] =
    sessionStorage.getItem("refreshToken"); //axios header에 refresh-token 셋팅
  await local.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await local.get(`/user/logout/${userid}`).then(success).catch(fail);
}

async function update(param, success, fail) {
  console.log("update param", param.userId);
  await local.put(`/user/${param.userId}`, param).then(success).catch(fail);
}

async function leave(userId, success, fail) {
  await local.delete(`/user/${userId}`).then(success).catch(fail);
}

async function findPwd(userId, success, fail) {
  await local.get(`/user/pwd/${userId}`).then(success).catch(fail);
}

export { signup, userConfirm, findById, tokenRegeneration, logout, update, leave, findPwd };
