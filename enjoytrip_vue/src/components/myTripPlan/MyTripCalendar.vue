<script setup>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MyTripViewModal from "./MyTripViewModal.vue";

// 여행계획 plans로 받아오기
const plans = [
  {
    "id": "common001",
    "title": "event1",
    "start": "2024-05-02",
    "end":"2024-05-05",
    "allDay": true,
    "backgroundColor":"#61a1ff",
    "borderColor":"#61a1ff",
    "textColor":"white",
    "extendedProps": {
      "comment": "명절"
    }
  },
  {
    "id": "common002",
    "title": "event2",
    "start": "2024-05-06",
    "allDay": true,
    "backgroundColor":"#ffc107",
    "borderColor":"#ffc107",
    "textColor":"white",
    "extendedProps": {
      "comment": "징검다리"
    }
  },
  {
    "id": "common003",
    "title": "event3",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },  {
    "id": "common004",
    "title": "event4",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common005",
    "title": "event5",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common006",
    "title": "event6",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common007",
    "title": "event7",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common008",
    "title": "event8",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common009",
    "title": "event9",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common010",
    "title": "event10",
    "start": "2024-05-23",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  },
  {
    "id": "common011",
    "title": "event11",
    "start": "2024-04-14",
    "allDay": true,
    "backgroundColor": "#ffb1bf",
    "borderColor": "#ffb1bf",
    "textColor":"white",
    "extendedProps": {
      "comment": "국가휴일"
    }
  }
];

const handleDateSelect = (selectInfo) => {
  // let title = prompt('Please enter a new title for your event')
  // let calendarApi = selectInfo.view.calendar

  // calendarApi.unselect() // clear date selection

  // if (title) {
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   })
  // }
};

const viewPlanModal = ref(false);
const togglePlanModal = () => { 
  viewPlanModal.value = !viewPlanModal.value;
};

const handleEventClick = (clickInfo) => {
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
        dayMaxEventRows: 30
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
    // eventsSet: handleEvents,
    events: plans,
    eventColor: '#49a078'
    /* you can update a remote database when these fire:
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