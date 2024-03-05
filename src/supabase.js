import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cnxweqltstdlskuwvniv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHdlcWx0c3RkbHNrdXd2bml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDg5OTgsImV4cCI6MjAyMDU4NDk5OH0.aDvzf3nAwgtDWel99avohZhT1n9hhOD05jmAr0wUB08";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
