import Vue from "vue";
import VueRouter from "vue-router";

// Component import
import News from "../components/News.vue";
import FixtureResult from "../components/FixtureResult.vue";

// Page import 
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Match from "../views/Match.vue";
import LeagueTable from "../views/LeagueTable.vue";
import DownloadableFixture from "../views/DownloadableFixture.vue";
import Team from "../views/Team.vue";
import Ticket from "../views/Ticket.vue";
import Club from "../views/Club.vue";

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
      { path: ":id/news", name: "news", component: News, props: true }
    ]
  },
  {
    path: "/matches",
    name: "matches",
    component: Match,
    children: [
      { path: ":id/fixtures", name: "fixtures", component: FixtureResult, props: true },
      { path: "league-table", name: "league-table", component: LeagueTable },
      { path: "downloadable-fixture", name: "downloadable-fixture", component: DownloadableFixture }
    ]
  },
  {
    path: "/teams?team_type_id=:team_type_id&work_type_id=:work_type_id",
    name: "teams",
    component: Team,
    props: true
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
