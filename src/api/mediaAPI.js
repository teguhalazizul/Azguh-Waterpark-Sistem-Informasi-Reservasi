import { supabaseClient } from "./supabaseClient";

export const mediaAPI = {
  fetchAll() {
    return supabaseClient.get("/ManajemenGaleriMedia").then(res => res.data);
  },
  create(data) {
    return supabaseClient.post("/ManajemenGaleriMedia", data).then(res => res.data);
  },
};
