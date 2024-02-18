const express = require("express");
const cors = require("cors");
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 8080;

app.use(cors());

const supabaseUrl = 'https://sffgsxolaysbndqjybjy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZmdzeG9sYXlzYm5kcWp5Ymp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjU0NDksImV4cCI6MjAyMzg0MTQ0OX0.-FSnsjtwTOBfl6B56ch5Q-ZFmsdTOFuRfnpggojqL3s';
const supabase = createClient(supabaseUrl, supabaseKey);


app.get("/api/names", async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('members')
            .select('*');

        if (error) {
            console.error('Error fetching data from Supabase', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(data);
    } catch (error) {
        console.error('Unexpected error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

process.on('SIGINT', () => {
    process.exit();
});
