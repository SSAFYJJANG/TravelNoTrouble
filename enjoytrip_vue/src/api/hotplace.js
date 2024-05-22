import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function TotalHotplaceCnt(success, fail) {
  await local.get(`/hotplace/cnt`).then(success).catch(fail);
}

async function bestFeed(success, fail) {
  await local.get(`/hotplace/best`).then(success).catch(fail);
}

async function upload(data, success, fail) {
  await local
    .post(`/hotplace`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(success)
    .catch(fail);
}

async function listFeed(param, success, fail) {
  await local.get(`/hotplace`).then(success).catch(fail);
}

async function modify(data, success, fail) {
  await local
    .put(`/hotplace/${data.feedId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(success)
    .catch(fail);
}

async function deleteHotplaceFeed(feedId, success, fail) {
  await local.delete(`hotplace/${feedId}`).then(success).catch(fail);
}

async function viewDetail(feedId, success, fail) {
  await local.get(`hotplace/${feedId}`).then(success).catch(fail);
}

async function likeFeed(feedId, success, fail) {
  await local.put(`hotplace/like/${feedId}`).then(success).catch(fail);
}

export {
  TotalHotplaceCnt,
  bestFeed,
  upload,
  listFeed,
  modify,
  deleteHotplaceFeed,
  viewDetail,
  likeFeed,
};
