const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://sffgsxolaysbndqjybjy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZmdzeG9sYXlzYm5kcWp5Ymp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjU0NDksImV4cCI6MjAyMzg0MTQ0OX0.-FSnsjtwTOBfl6B56ch5Q-ZFmsdTOFuRfnpggojqL3s';
const supabase = createClient(supabaseUrl, supabaseKey);

const getDataFromSupabase = async () => {
  const { data, error } = await supabase
    .from('members')
    .select('*');

  if (error) {
    console.error('Error fetching data from Supabase', error);
    return;
  }

  console.log('Data from Supabase:', data);
};

getDataFromSupabase();
