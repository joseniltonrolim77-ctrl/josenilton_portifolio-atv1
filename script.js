let projetos = [
    {
        nomeprojeto : "Web",
        imgProjeto : "https://agenciacolors.digital/wp-content/uploads/2023/05/dicas-e-praticas-recomendadas-criacao-de-site-profissional.png"
    },
    {   
        nomeprojeto : "APK",
        imgProjeto : "https://studiovisual.com.br/wp-content/uploads/2024/09/Como-criar-um-Site-Profissional-Passo-a-Passo-1-1.jpg.webp"
    },
    {
        nomeprojeto : "Jogos Oline",
        imgProjeto : "https://blog.goweb.pt/wp-content/uploads/2021/10/requisitos-tecnicos-website-profissional-700x467.jpg"
    }
]

let idProjetos = document.getElementById("Projetos");

projetos.map((e)=>{
    // Aqui criamos o card de cada projeto
    let cardProjeto = document.createElement("div");
    cardProjeto.style.display = "flex";
    cardProjeto.style.flexDirection = "column";
    cardProjeto.style.justifyContent = "center";
    cardProjeto.style.alignItems = "center";
    cardProjeto.style.paddingBottom = "10px"

    // Aqui criamos o nome de cada projeto
    let nomeprojeto = document.createElement("h3");
    nomeprojeto.textContent = e.nomeprojeto;

    // Aqui criamos a imagem de cada projeto
    let imgProjeto = document.createElement("img");
    imgProjeto.src = e.imgProjeto;
    imgProjeto.style.width = "80px";

    cardProjeto.appendChild(nomeprojeto);
    cardProjeto.appendChild(imgProjeto);
    idProjetos.appendChild(cardProjeto);

})
