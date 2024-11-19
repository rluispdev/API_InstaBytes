import express from "express"

//Criar uma Base de dados

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Paisagem deslumbrante",
      imagem: "https://picsum.photos/300/150?random=1",
      localizacao: "Alpes Suíços"
    },
    {
      id: 3,
      descricao: "Comida deliciosa!",
      imagem: "https://picsum.photos/300/150?random=2",
      tags: ["comida", "italiana", "massa"]
    },
    {
      id: 4,
      descricao: "Meu gato fofo",
      imagem: "https://placekitten.com/300/150",
      curtidas: 150
    },
    { 
      id: 5,
      descricao: "Por do sol incrível!",
      imagem: "https://picsum.photos/300/150?random=3",
      data: "2023-10-27",
      localizacao: "Praia de Ipanema"
    }
  ];

//Testar o servidor
const app = express();
//Transformar em JSON
app.use(express.json())


app.listen(3000, () => {
    console.log("Servidor escutando...");
    
});

 //Criar uma rota
app.get("/posts", (req, res) => {
    //Resposta
    res.status(200).json(posts);
});

function getPostByID(id){
return posts.findIndex((post) => {
    return post.id === Number (id)
})
}

//Criar uma rota de busca por id
app.get("/posts/:id", (req, res) => {
 
    //Chamar a func getPostByID
const index = getPostByID(req.params.id)
    //Resposta
    res.status(200).json(posts[index]);
});


