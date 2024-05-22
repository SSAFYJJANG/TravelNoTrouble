import { localAxios } from "@/util/http-commons";
const local = localAxios();

async function list(userId, success, fail) {
    console.log("plan userid", userId);
    await local.get(`/plan`, { params: {userId}}).then(success).catch(fail);
}

export {
    list
};
