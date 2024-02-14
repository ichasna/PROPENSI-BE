const express = require("express");
const app = express()
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/api/int/home", (req, res) => {
    res.json({ message: "Internal ERP", members: ["Abby", "Ernest", "Engki", "Icha", "Awe"] })
})

app.get("/api/ext/home", (req, res) => {
    res.json({ message: "Company Website", members: ["Abby", "Ernest", "Engki", "Icha", "Awe"] })
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// comment