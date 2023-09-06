import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobsDetails from "../views/jobs/JobsDetails.vue";
import Todo from "../views/Todo.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/all jobs",
    redirect: "/jobs",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
