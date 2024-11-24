import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"

const conextion = await conectarAoBanco(process.env.STRING_CONEXTION);

//Puxar todos os posts
export async function getAllPosts(){
    //Colocar o nome do banco que criamos
  const db = conextion.db("imersao-instabytes");
  const myCollection = db.collection("posts");
  return myCollection.find().toArray();
  }
  

export async function createPost(newPost) {

  const db = conextion.db("imersao-instabytes");
  const myCollection = db.collection("posts");
  return myCollection.insertOne(newPost)

}

export async function uptadePost(id, newPost) {

  const db = conextion.db("imersao-instabytes");
  const myCollection = db.collection("posts");
  const objID = ObjectId.createFromHexString(id)
  return myCollection.updateOne({_id: new ObjectId(objID)}, {$set: newPost})

}