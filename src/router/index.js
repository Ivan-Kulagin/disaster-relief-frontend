import Vue from "vue";
import VueRouter from "vue-router";
import GeoPage from "@/views/GeoPage.vue";
import OTPPhone from "@/views/OTPPhone.vue";
import OTPCode from "@/views/OTPCode.vue";
import VolunteerAuth from "@/views/VolunteerAuth.vue";
import MainPage from "@/views/MainPage.vue";
import ReportPage from "@/views/ReportPage.vue";
import ReportConfirm from "@/views/ReportConfirm.vue";
import Notifications from "@/views/Notifications.vue";
import MapPage from "@/views/MapPage.vue";
import NotificationRead from "@/views/NotificationRead.vue";
import Instructions from "@/views/Instructions.vue";
import InstructionRead from "@/views/InstructionRead.vue";
import PanelReport from "@/views/PanelReport.vue";
import PanelTable from "@/views/PanelTable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "geo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GeoPage,
  },
  {
    path: "/phone",
    name: "phone",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OTPPhone,
  },
  {
    path: "/code",
    name: "otp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OTPCode,
  },
  {
    path: "/volunteer",
    name: "volunteer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VolunteerAuth,
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainPage,
  },
  {
    path: "/report",
    name: "report",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ReportPage,
  },
  {
    path: "/report/confirm",
    name: "report-confirm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ReportConfirm,
    props: true,
  },
  {
    path: "/panel/table",
    name: "panel-table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PanelTable,
  },
  {
    path: "/panel/report",
    name: "panel-report",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PanelReport,
  },
  {
    path: "/notifications",
    name: "notifications",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Notifications,
  },
  {
    path: "/notification/read",
    name: "notification",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotificationRead,
  },
  {
    path: "/instructions",
    name: "instructions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Instructions,
  },
  {
    path: "/instruction/:id",
    name: "instruction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: InstructionRead,
    props: true,
  },
  {
    path: "/map",
    name: "map",
    component: MapPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
