import getAllPosts from "../models/postsModels.js";

getAllPosts
export async function listPosts (req, res){
    //Resposta
    const posts = await getAllPosts()
    res.status(200).json(posts);
}