import apiClient from "./index.js";

export default {
  getCategories() {
    return apiClient.get("/categories");
  },
  getNews(category_id) {
    return apiClient.get("/news?category_id=" + category_id);
  },
  getNewsDetail(id) {
    return apiClient.get("/news-detail?id=" + id);
  },
  getLatestShow() {
    return apiClient.get("/latest-show");
  },
};
