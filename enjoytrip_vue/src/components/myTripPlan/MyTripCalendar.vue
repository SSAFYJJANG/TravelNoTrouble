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

const handleDateSelect = (selectInfo) => {};

const viewPlanModal = ref(false);
const togglePlanModal = () => {
  viewPlanModal.value = !viewPlanModal.value;
};

const planDetailList = ref(null);
const planInfo = ref({
  plan_id: null,
  title: null,
  start_date: null,
  end_date: null,
});

const handleEventClick = (clickInfo) => {
  planInfo.value = {
    plan_id: clickInfo.event.id,
    title: clickInfo.event.title,
    start_date: clickInfo.event.startStr,
    end_date: clickInfo.event.endStr,
  };

  listDetail(
    planInfo.value.plan_id,
    (response) => {
      if (response.status === httpStatusCode.OK) {
        console.log("DETAIL", response.data);
        planDetailList.value = response.data;
      }
    },
    async (error) => {
      console.log(error);
    }
  );
  togglePlanModal();
};

onMounted(async () => {
  const plans = ref(null);
  list(
    userInfo.userId,
    (response) => {
      if (response.status === httpStatusCode.OK) {
        // console.log("planList", response.data); // planList
        const list = response.data;
        const calendarEl = document.querySelector("#calendar");
        plans.value = list.map(function (plan) {
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
        // console.log("CAL", plans.value);
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
          select: handleDateSelect,
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
      <!-- <FullCalendar class="demo-app-calendar" :options="calendarOptions">
      </FullCalendar> -->
    </div>
  </div>

  <div class="modal-wrap z-3" v-show="viewPlanModal">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button @click="togglePlanModal" class="display-4">✖</button>
      </div>
      <MyTripViewModal :plan="planInfo" :details="planDetailList" />
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
