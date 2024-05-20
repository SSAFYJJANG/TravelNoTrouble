import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function upload(param, success, fail) {
  console.log("HOTPL INFO", param);
  await local.post(`/hotplace`, param).then(success).catch(fail);
}

async function listFeed(param, success, fail) {
  await local.get(`/hotplace`).then(success).catch(fail);
}

export { upload, listFeed };
