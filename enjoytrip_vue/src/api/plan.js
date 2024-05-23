import { localAxios } from "@/util/http-commons";
const local = localAxios();

async function list(userId, success, fail) {
  await local.get(`/plan`, { params: { userId } }).then(success).catch(fail);
}

async function listDetail(plan_id, success, fail) {
  await local.get(`/plan/${plan_id}`).then(success).catch(fail);
}

async function modifyDetail(param, success, fail) {
  console.log("param", param);
  await local.put(`/plan/detail`, param).then(success).catch(fail);
}

async function savePlan(plan, success, fail) {
  await local.post(`/plan`, plan).then(success).catch(fail);
}

export { list, listDetail, modifyDetail, savePlan };
