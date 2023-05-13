import express from 'express';
import path from 'path';
const app = express();
const PORT : string|number = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use("*",(req, res) =>{
    res.sendFile("/index.html");
});

app.listen(PORT,() => console.log(`Hosting http://localhost:${PORT}`));