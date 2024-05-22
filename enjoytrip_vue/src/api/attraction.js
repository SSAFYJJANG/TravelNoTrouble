import { localAxios } from "@/util/http-commons";
const local = localAxios();

async function sido() {
  await local.get(`/attraction/sido`).then(success).catch(fail);
}
async function gugun() {
  await local.get(`/attraction/gugn`).then(success).catch(fail);
}
async function attractionResult(params) {
  await local.get(`/attraction`, { params }).then(success).catch(fail);
}
async function totalAttractionCnt() {
  await local.get(`/attraction/cnt`).then(success).catch(fail);
}
async function recommendedAttraction() {
  await local.get(`/attraction/recommend`).then(success).catch(fail);
}
async function userLikeAttraction(userId) {
  await local.get(`/attraction/cart/${userId}`).then(success).catch(fail);
}
async function addLikeAttraction(params) {
  await local.post(`/attraction/cart`, { params }).then(success).catch(fail);
}
async function deleteLikeAttraction(params) {
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
