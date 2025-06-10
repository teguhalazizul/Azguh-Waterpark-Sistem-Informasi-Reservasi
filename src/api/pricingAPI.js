import { supabaseClient } from "./supabaseClient";

export const pricingAPI = {
  fetchAll() {
    return supabaseClient.get("/pricing").then(res => res.data);
  },
  create(data) {
    return supabaseClient.post("/pricing", data).then(res => res.data);
  },
};
