
import express from "express"
import multer from "multer";
import { listPosts, sendNewPost, uploadImage, updateNewPost } from "../controllers/postsController.js";
listPosts

//Inicializar o multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    //Transformar em JSON
app.use(express.json());
 //Criar uma rota
 app.get("/posts", listPosts);
 app.post("/posts", sendNewPost);
 app.post("/upload", upload.single("image"), uploadImage)

 app.put("/upload/:id", updateNewPost)
}

export default routes;
