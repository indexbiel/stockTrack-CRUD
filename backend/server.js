import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#Biel2410",
  database: "stocktrack"
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(500).send("Erro ao buscar users");
    } else {
      res.json(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
