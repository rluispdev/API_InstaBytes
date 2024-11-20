
import express from "express"
import { listPosts } from "../controllers/postsController.js";
listPosts

const routes =(app) => {

    //Transformar em JSON
app.use(express.json())

 //Criar uma rota
 app.get("/posts", listPosts );

}


export default routes;
