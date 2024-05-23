import { ref } from "vue";
import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";
import { httpStatusCode } from "@/util/http-status";
import { savePlan } from "@/api/plan";
export const usePlanStore = defineStore("planStore", () => {
  const title = ref("나의 여행 계획");
  const startDate = ref(new Date());
  const endDate = ref(new Date());
  const overview = ref("");
  const days = ref({});
  const diffDate = ref(0);
  const isSelectAttraction = ref(null);

  const setSelectedAttraction = (newAttration) => {
    isSelectAttraction.value = newAttration;
  };

  const getDateDiff = (d1, d2) => {
    const diffTime = new Date(d1).getTime() - new Date(d2).getTime();
    diffDate.value = Math.abs(diffTime / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  };

  const setTitle = (newTitle) => {
    title.value = newTitle;
  };

  const setStartDate = (newStartDate) => {
    startDate.value = newStartDate;
    getDateDiff(
      endDate.value.toISOString().split("T")[0],
      startDate.value.toISOString().split("T")[0]
    );
  };

  const setEndDate = (newEndDate) => {
    endDate.value = newEndDate;
    getDateDiff(
      endDate.value.toISOString().split("T")[0],
      startDate.value.toISOString().split("T")[0]
    );
  };

  const setOverview = (newOverview) => {
    overview.value = newOverview;
  };

  const setDays = (newDays) => {
    days.value = newDays;
  };

  const addDay = () => {
    const newDayKey = `day${Object.keys(days.value).length + 1}`;
    days.value[newDayKey] = [];
  };

  const addDetailToDay = (dayKey, detail) => {
    if (!days.value[dayKey]) {
      days.value[dayKey] = [];
    }
    days.value[dayKey].push(detail);
  };

  const insertPlan = async (token) => {
    let decodeToken = jwtDecode(token);
    const planData = {
      title: title.value,
      start_date: startDate.value.toISOString(),
      end_date: endDate.value.toISOString(),
      userId: decodeToken.userId,
      overview: overview.value,
      day: days.value,
    };
    console.log("저장 버튼 누름 " + JSON.stringify(planData, null, 2));
    // await savePlan(
    //   planData,
    //   (response) => {
    //     if (response.status === httpStatusCode.OK) {
    //       console.log("저장 성공!!!");
    //       resetPlan();
    //     }
    //   },
    //   async (error) => {
    //     console.log("계획 저장 실패 " + error);
    //   }
    // );

    const resetPlan = () => {
      title.value = "나의 여행 계획";
      startDate.value = new Date();
      endDate.value = new Date();
      overview.value = "";
      days.value = {};
    };
  };

  return {
    title,
    startDate,
    endDate,
    overview,
    days,
    isSelectAttraction,
    diffDate,
    setTitle,
    setStartDate,
    setEndDate,
    setOverview,
    setDays,
    addDay,
    addDetailToDay,
    insertPlan,
    getDateDiff,
    setSelectedAttraction,
  };
});
