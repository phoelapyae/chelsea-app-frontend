import Vue from "vue";
import VueRouter from "vue-router";

// Component import
import News from "../components/News.vue";
import FixtureResult from "../components/FixtureResult.vue";
import TeamCard from "../components/TeamCard.vue";
import BuyTicket from "../components/BuyTicket.vue";
import MatchdayTicket from "../components/MatchdayTicket.vue";
import MatchdayPackage from "../components/MatchdayPackage.vue";

// Page import 
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import NewsDetail from "../views/NewsDetail.vue";
import Match from "../views/Match.vue";
import LeagueTable from "../views/LeagueTable.vue";
import DownloadableFixture from "../views/DownloadableFixture.vue";
import TeamDetail from "../views/TeamDetail.vue";
import Club from "../views/Club.vue";
import TicketInfo from "../views/TicketInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/categories/news",
    name: "categories",
    component: Category,
    children: [
      { path: ":id", name: "news", component: News, props: true },
      { path: "news-detail/:id", name: "news-detail", component: NewsDetail, props: true }
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
    path: "/teams",
    component: TeamCard,
    props: true,
    children: [
      { path: "team_type_id/:team_type_id/work_type_id/:work_type_id", name: "teams", component: TeamCard, props: true },
    ]
  },
  {
    path: "/teams/detail/:id",
    name: "team-detail",
    component: TeamDetail,
    props: true
  },
  {
    path: "/buy-tickets",
    name: "tickets",
    component: BuyTicket
  },
  {
    path: '/ticket-infos/:id',
    name: "ticket-infos",
    component: TicketInfo,
    props: true
  },
  {
    path: "/clubs",
    name: "clubs",
    component: Club,
    children: [
      { path: "matchday-tickets", name: "matchday-tickets", component: MatchdayTicket },
      { path: "matchday-packages", name: "matchday-packages", component: MatchdayPackage }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
