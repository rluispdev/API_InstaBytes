
import conectarAoBanco from "../config/dbConfig.js"

const conextion = await conectarAoBanco(process.env.STRING_CONEXTION)

//Puxar todos os posts
export default async function getAllPosts(){
    //Colocar o nome do banco que criamos
  const db = conextion.db("imersao-instabytes")
  const myCollection = db.collection("posts")
  return myCollection.find().toArray()
  }
  