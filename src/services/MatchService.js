import apiClient from "./index.js";

export default {
  getMatchTypes() {
    return apiClient.get("/match-types");
  },
  getMatches(mathch_type_id) {
    return apiClient.get("/matches?match_type_id=" + mathch_type_id);
  },
  getLeagueTables() {
    return apiClient.get("/league-table");
  },
};
