import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fmfscrdxzouvutuczgae.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZnNjcmR4em91dnV0dWN6Z2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2MDk5MzksImV4cCI6MjAzOTE4NTkzOX0.bANRAUzze4V_7iZ2Zmf62hNpQ-AbOyghJ_eQ-0ZEhLU"
const supabase = createClient(supabaseUrl, supabaseKey);
