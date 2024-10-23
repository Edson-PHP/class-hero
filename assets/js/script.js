const btn = document.querySelector(".action");
let nameHero;

btn.addEventListener("click", () => {
    let xp = document.querySelector(".xp");
    let heroXp = Math.floor(Math.random() * 10000); 
    let result = document.querySelector(".result");

    xp.style.width = `${heroXp / 100}%`; 

    if (heroXp < 1000) {
        xp.style.backgroundColor = "red";
    } else if (heroXp < 2000) {
        xp.style.backgroundColor = "yellow";
    } else {
        xp.style.backgroundColor = "chartreuse";
    }

    let categoria;

    if (heroXp < 1000) {
        categoria = "Ferro";
    } else if (heroXp >= 1000 && heroXp <= 2000) {
        categoria = "Bronze";
    } else if (heroXp >= 2001 && heroXp <= 5000) {
        categoria = "Prata";
    } else if (heroXp >= 5001 && heroXp <= 7000) {
        categoria = "Ouro";
    } else if (heroXp >= 7001 && heroXp <= 8000) {
        categoria = "Platina";
    } else if (heroXp >= 8001 && heroXp <= 9000) {
        categoria = "Ascendente";
    } else if (heroXp >= 9001 && heroXp <= 9899) {
        categoria = "Imortal";
    } else if (heroXp >= 9900 && heroXp <= 10000) {
        alert("Parabéns!!! Você atingiu o nível XP Máximo! 💪")
    } else {
        categoria = "Radiante";
    }

    result.innerHTML = `O Herói de nome: ${nameHero} está no nível de: ${categoria}`;
});

document.querySelector(".nameHero").addEventListener("click", ()=>{

    nameHero = document.querySelector("#heroName").value.toUpperCase();

    if(nameHero !="" && nameHero != null && nameHero != undefined){
        document.querySelector(".start").style.display="none";
        document.querySelector(".container").style.display="flex";
    }else{
        alert("Digite novamente...");
    }
    
});
