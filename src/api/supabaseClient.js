import axios from "axios";

const API_URL = "https://qasktymynoyiqdftcewk.supabase.co/rest/v1";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhc2t0eW15bm95aXFkZnRjZXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMDQyNDQsImV4cCI6MjA2NDg4MDI0NH0.AVoaNh6ILF-hG3kk251fxHN_0y-dgR-k9PaRkmbniiA"; // jangan bocorkan publicly

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const supabaseClient = axios.create({
  baseURL: API_URL,
  headers,
});
