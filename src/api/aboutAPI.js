import { supabaseClient } from "./supabaseClient";

export const aboutAPI = {
  fetchSingle() {
    return supabaseClient.get("/about?limit=1").then(res => res.data[0]);
  },
  create(data) {
    return supabaseClient.post("/about", data).then(res => res.data);
  },
};
