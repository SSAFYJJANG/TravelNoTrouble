<script setup>
import { ref, onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import MyTripViewModal from "./MyTripViewModal.vue";
import { useUserStore } from "@/stores/user";
import { list, listDetail } from "@/api/plan";
import { httpStatusCode } from "@/util/http-status";

const userStore = useUserStore();
const { userInfo } = userStore;

const selectedDay = ref(1);
const clickDay = (day) => {
  selectedDay.value = day;
};
const isModifyMode = ref(false);
const modifyDetailId = ref(null);
const goModifyMode = (modifyId, onOff) => {
  isModifyMode.value = onOff ? true : false;
  modifyDetailId.value = modifyId;
};

const details = ref(null);
const planInfo = ref({
  plan_id: null,
  title: null,
  start_date: null,
  end_date: null,
});

const viewPlanModal = ref(false);
const togglePlanModal = () => {
  viewPlanModal.value = !viewPlanModal.value;
  selectedDay.value = 1;
  isModifyMode.value = false;
};

const handleEventClick = (clickInfo) => {
  const start_day = new Date(clickInfo.event.startStr).getTime();
  const end_day = new Date(clickInfo.event.endStr).getTime();
  const diff = Math.abs((start_day - end_day) / (1000 * 60 * 60 * 24));

  planInfo.value = {
    plan_id: clickInfo.event.id,
    title: clickInfo.event.title,
    start_date: clickInfo.event.startStr,
    end_date: clickInfo.event.endStr,
    days: isNaN(diff) ? 1 : diff + 1,
    first_day: null,
  };

  listDetail(
    planInfo.value.plan_id,
    (response) => {
      if (response.status === httpStatusCode.OK) {
        details.value = response.data;
        planInfo.value.first_day = details.value.reduce((prev, value) => {
          return prev.plan_days_id <= value.plan_days_id ? prev : value;
        });
        planInfo.value.first_day = planInfo.value.first_day.plan_days_id;
      }
    },
    async (error) => {
      console.log(error);
    }
  );
  togglePlanModal();
};

const planList = ref(null);
onMounted(async () => {
  const plans = ref(null);
  list(
    userInfo.userId,
    (response) => {
      if (response.status === httpStatusCode.OK) {
        planList.value = response.data;
        const calendarEl = document.querySelector("#calendar");
        plans.value = planList.value.map(function (plan) {
          return {
            id: plan.plan_id,
            title: plan.title,
            start: plan.start_date,
            end: plan.end_date,
            allDay: true,
            backgroundColor: "#46bb85",
            borderColor: "#46bb85",
            textColor: "white",
          };
        });
        var calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          initialView: "dayGridMonth",
          headerToolbar: {
            left: "prev,next",
            center: "title",
            right: "",
          },
          views: {
            timeGrid: {
              dayMaxEventRows: 5,
              dayMaxEvents: 10,
            },
          },
          dayMaxEventRows: true,
          dayMaxEvents: true,
          eventClick: handleEventClick,
          events: plans.value,
        });
        calendar.render();
      }
    },
    async (error) => {
      console.log(error);
    }
  );
});
</script>

<template>
  <div class="demo-app w-100">
    <div class="demo-app-main w-100">
      <div id="calendar"></div>
    </div>
  </div>

  <div class="modal-wrap z-3" v-show="viewPlanModal">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button @click="togglePlanModal" class="display-4">✖</button>
      </div>
      <MyTripViewModal
        :plan="planInfo"
        :details="details"
        :selectedDay="selectedDay"
        :isModifyMode="isModifyMode"
        :modifyDetailId="modifyDetailId"
        @clickDay="clickDay"
        @goModifyMode="goModifyMode"
      />
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  margin: 1.5em 0;
  padding: 0;
}
b {
  /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc {
  /* the calendar root */
  /* max-width: 1100px; */
  margin: 0 auto;
}
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
