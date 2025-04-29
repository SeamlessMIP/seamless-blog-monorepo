
import { createClient } from '@supabase/supabase-js';

// Supabase client initialization
const supabaseUrl = 'https://egcxdjwblnylkrttfcjq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY3hkandibG55bGtydHRmY2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODY1NTIsImV4cCI6MjA1NzM2MjU1Mn0.XM-M-iVwxz8kAUBVUhN-ghqRmGAi0MPXuVTOlAeWm6s';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
