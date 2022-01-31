import Vue from "vue";
import VueRouter from "vue-router";

//components
import CreateEmployee from "../components/CreateEmployee";
import ViewEmployees from "../components/ViewEmployees";
import EditEmployees from "../components/EditEmployees";

// Loading the router
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CreateEmployee,
    },
    {
      path: "/view",
      component: ViewEmployees,
    },
    {
      name: "edit",
      path: "/edit/:id",
      component: EditEmployees,
    },
  ],
});
