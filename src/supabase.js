import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hyxjrwcnavfiqbzfchdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eGpyd2NuYXZmaXFiemZjaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjczMzEsImV4cCI6MjAzMzg0MzMzMX0.2rS0BC6SuLqqASYHe_LZk26H63AL736rxUOzhBvRl4k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
