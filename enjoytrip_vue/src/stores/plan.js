import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

import { list } from "@/api/plan";
import { httpStatusCode } from "@/util/http-status";

export const usePlanStore = defineStore("planStore", () => {
  const planList = ref(null);
    
    const getPlanList = async (userId) => {
    await list(
        userId,
        (response) => {
            if (response.status === httpStatusCode.OK) {
                console.log("계획 리스트 가져옴", response.data);
                planList.value = response.data;
            }
        },
        async (error) => {
            console.log(error);
        }
    )
  };

  return {
    planList,
    getPlanList
  };
});
