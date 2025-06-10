import { supabaseClient } from "./supabaseClient";

export const mediaAPI = {
  fetchAll() {
    return supabaseClient.get("/media").then(res => res.data);
  },
  create(data) {
    return supabaseClient.post("/media", data).then(res => res.data);
  },
};
