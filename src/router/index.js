import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../components/News.vue";
import MatchFixture from "../components/MatchFixture.vue";
import Category from "../views/Category.vue";
import Match from "../views/Match.vue";
import Team from "../views/Team.vue";
import Ticket from "../views/Ticket.vue";
import Club from "../views/Club.vue";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/categories",
    name: "categories",
    component: Category,
    children: [
      {
        path: ":id/news",
        name: "news",
        component: News,
        props: true
      }
    ]
  },
  {
    path: "/matches",
    name: "matches",
    component: Match,
    children: [
      {
        path: ":id/fixtures",
        name: "fixtures",
        component: MatchFixture,
        props: true
      }
    ]
  },
  {
    path: "/teams",
    name: "teams",
    component: Team,
  },
  {
    path: "/tickets",
    name: "tickets",
    component: Ticket,
  },
  {
    path: "/clubs",
    name: "clubs",
    component: Club,
  },
  {
    path: "/shops",
    name: "shops",
    component: Shop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
