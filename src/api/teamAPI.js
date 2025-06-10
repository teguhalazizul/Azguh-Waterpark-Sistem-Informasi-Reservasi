import { supabaseClient } from "./supabaseClient";

export const teamAPI = {
  fetchAll() {
    return supabaseClient.get("/team").then(res => res.data);
  },
  create(data) {
    return supabaseClient.post("/team", data).then(res => res.data);
  },
};
