import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://fdgadmimpszwrbnkwlbu.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZ2FkbWltcHN6d3Jibmt3bGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMTQyNDIsImV4cCI6MjA5NTY5MDI0Mn0.x5xmp4Im_RgN4-6YMJEvVm-76Uztr774MfpOTqSVzTs";

if (import.meta.env.DEV) {
  console.log("SUPABASE URL:", supabaseUrl);
  console.log("SUPABASE KEY EXISTS:", Boolean(supabaseAnonKey));
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
