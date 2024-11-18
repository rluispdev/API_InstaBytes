import express from "express"
//Testar o servidor
const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
    
});

//Criar uma rota
app.get("/api", (req, res) => {
    //Resposta
    res.status(200).send("Welcome to Imersion!");
});


