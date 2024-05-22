<script setup>
import { ref, onMounted, computed } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MyTripViewModal from "./MyTripViewModal.vue";
import { useUserStore } from "@/stores/user";
import { usePlanStore } from "@/stores/plan";
import axios from "axios";

const userStore = useUserStore();
const planStore = usePlanStore();
const { userInfo } = userStore;
const { getPlanList, planList } = planStore;

const plans = ref(null);

onMounted(async () => {
  await axios.get(`/plan`, { params: { userInfo } })
    .then((res) => res.json())
    .then((data) => console.log(data));
  // await getPlanList(userInfo.userId);
  // plans.value = planList;
  // console.log("Plans.value", plans.value); 
});

const isLoading = computed(() => {
  return planList == null ? true : false;
});

// userid 로 -> get(`/plan`) 여행계획 planList로 받아오기
// const plans = [
//   {
//     "id": "common001",
//     "title": "event1",
//     "start": "2024-05-02",
//     "end":"2024-05-05",
//     "allDay": true,
//     "backgroundColor":"#ffb1bf",
//     "borderColor":"#ffb1bf",
//     "textColor":"white",
//     "extendedProps": {
//       "comment": "명절"
//     }
//   }
  // , {
  //   "id": variable.plan_id,
  //   "title": variable.title,
  //   "start": variable.start_date,
  //   "end": variable.end_date,
  //   "allDay": true,
  //   "backgroundColor": "#ffb1fb",
  //   "borderColor": "#ffb1bf",
  //   "textColor": "white",
  //   "extendedProps": {
  //     "comment": "여행"
  //   }
  // }
// ];

const handleDateSelect = (selectInfo) => {
};

const viewPlanModal = ref(false);
const togglePlanModal = () => { 
  viewPlanModal.value = !viewPlanModal.value;
};

const plan_id = ref(null);

const handleEventClick = (clickInfo) => {
  console.log("id", clickInfo.event.id); // plan.plan_id
  plan_id = clickInfo.event.id;
  console.log("title", clickInfo.event.title); // plan.title
  console.log("start date", clickInfo.event.startStr); // plan.start_date
  console.log("end date", clickInfo.event.endStr); // plan.end_date
  // get - plan_days 테이블에서 plan_id가 plan_id.value인 튜플들 들고 오기
  // get - 들고온 plan_days_id로 plan_detail 테이블에서 튜플들 들고 오기
  togglePlanModal();
};

const calendarOptions = {
    plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
    ],
    headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: ''
    },
    views: {
      timeGrid: {
        dayMaxEventRows: 5,
        dayMaxEventRows: 10
      }
    },
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: handleDateSelect,
    eventClick: handleEventClick,
  // events: plans,
    events: plans,
    eventColor: '#ffb1bf'
    /* 
    eventAdd:
    eventChange:
    eventRemove:
    */
};
</script>

<template>
  <div class='demo-app w-100'>
    <div class='demo-app-main w-100'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
      </FullCalendar>
    </div>
  </div>

  <div class="modal-wrap z-3" v-show="viewPlanModal">
    <div class="modal-container">
      <div class="modal-btn d-flex justify-content-end">
        <button @click="togglePlanModal" class="display-4">✖</button>
      </div>
      <MyTripViewModal />
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
b { /* used for event dates/times */
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
.fc { /* the calendar root */
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