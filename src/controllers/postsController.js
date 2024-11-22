import {getAllPosts, createPost} from "../models/postsModels.js";
import fs from "fs";

export async function listPosts (req, res){
    //Resposta
    const posts = await getAllPosts()
    res.status(200).json(posts);
}

export async function sendNewPost(req, res){
const newPost = req.body;
try {
    const createdPost = await createPost(newPost)
    res.status(200).json(createdPost);
}catch(error){
    console.error(error.message);
    res.status(500).json({"Erro": "Falha na requisição"})
}
}
 

export async function uploadImage(req, res){
    const newPost = {
        description: " ",
        imgUrl: req.file.originalname,
        alt: " "
    }
    try {
        const createdPost = await createPost(newPost)
        const updateImage = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, updateImage)
    
        res.status(200).json(createdPost);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"})
    }
    }
     