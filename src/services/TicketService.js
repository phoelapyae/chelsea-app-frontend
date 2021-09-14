import apiClient from "./index.js";

export default {
  getTicketTypes() {
    return apiClient.get("/ticket-types");
  },
  getTickets() {
    return apiClient.get("/get-tickets");
  },
  buyTickets() {
    return apiClient.get("/buy-tickets");
  },
  getTicketInfos(id) {
    return apiClient.get("/ticket-infos?ticket_type_id=" + id);
  },
  getClubCategories() {
    return apiClient.get("/club-categories");
  },
  getBenefits() {
    return apiClient.get("/benefits");
  },
  getPackages() {
    return apiClient.get("/buy-packages");
  },
};
