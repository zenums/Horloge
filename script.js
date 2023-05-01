const heureActuelle = document.querySelector(".heure");
const fuseauHoraireSelectionné = document.getElementById("fuseau-horaire");
const dateActuelle = document.querySelector(".date");

function afficheHeure() {
    const date = new Date();
    const fuseauHoraire = parseInt(fuseauHoraireSelectionné.value);
    const heure = date.getUTCHours();
    const heureLocale = (heure + fuseauHoraire + 24) % 24;
    const minute = date.getMinutes();
    const seconde = date.getSeconds();

    const jour = new Date(date.getTime() + fuseauHoraire * 60 * 60 * 1000).getUTCDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    heureActuelle.innerHTML = `<p> &nbsp ${heureLocale} heure </p> <p> &nbsp ${minute} minute</p> <p>  &nbsp ${seconde} seconde</p>`;
    
    dateActuelle.innerHTML = `<p> &nbsp ${jour} &nbsp </p> <p> &nbsp ${mois} &nbsp </p> <p>  &nbsp ${annee} &nbsp</p>`;
}

fuseauHoraireSelectionné.addEventListener('change', afficheHeure);

setInterval(afficheHeure, 1000);
