import express from "express"
import routes from "./src/routes/postRoutes.js";

//Testar o servidor
const app = express();
routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


