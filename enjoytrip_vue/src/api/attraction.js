import { localAxios } from "@/util/http-commons";
const local = localAxios();

async function getAttractionCnt(success, fail) {
    await local.get(`/best`).then(success).catch(fail);
}


  