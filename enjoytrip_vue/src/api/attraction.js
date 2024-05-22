import { localAxios } from "@/util/http-commons";
const local = localAxios();

async function sido(success, fail) {
  await local.get(`/attraction/sido`).then(success).catch(fail);
}
async function gugun(success, fail) {
  await local.get(`/attraction/gugun`).then(success).catch(fail);
}
async function attractionResult(params, success, fail) {
  await local.get(`/attraction`, { params }).then(success).catch(fail);
}
async function totalAttractionCnt(success, fail) {
  await local.get(`/attraction/cnt`).then(success).catch(fail);
}
async function recommendedAttraction(success, fail) {
  await local.get(`/attraction/recommend`).then(success).catch(fail);
}
async function userLikeAttraction(userId, success, fail) {
  await local.get(`/attraction/cart/${userId}`).then(success).catch(fail);
}
async function addLikeAttraction(params, success, fail) {
  await local.post(`/attraction/cart`, { params }).then(success).catch(fail);
}
async function deleteLikeAttraction(params, success, fail) {
  await local.delete(`/attraction/cart`, { params }).then(success).catch(fail);
}

export {
  sido,
  gugun,
  attractionResult,
  totalAttractionCnt,
  recommendedAttraction,
  userLikeAttraction,
  addLikeAttraction,
  deleteLikeAttraction,
};
