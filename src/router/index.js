import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RobotVideo from "../views/RobotVideo.view.vue";
import AllRobots from "../views/AllRobots.view.vue";
import RobotDetailsPage from "../views/RobotDetails.view.vue";
import NewsDetails from "../views/NewsDetails.view.vue";
import AllNewsView from "../views/News.view.vue";
import ContactUsView from "../views/ContactUS.view.vue";
import LoginPage from "../views/login.view.vue";
import RegisterPage from "../views/register.view.vue";

const routes = [
  {
    path: "/robot/details/:id",
    name: "RobotDetails",
    component: RobotDetailsPage,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/robots/:id",
    name: "RobotVideo",
    component: RobotVideo,
  },
  {
    path: "/robots",
    name: "AllRobots",
    component: AllRobots,
  },
  {
    path: "/news",
    name: "AllNewsView",
    component: AllNewsView,
  },
  {
    path: "/news/:id",
    name: "NewsDetailsView",
    component: NewsDetails,
  },
  {
    path: "/contact",
    name: "ContactUsView",
    component: ContactUsView,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
