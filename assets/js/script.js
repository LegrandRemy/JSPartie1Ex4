// Déclaration de la variable qui stock le bouton
let sendformulaire1 = document.getElementById('sdformulaire');

// 1ere facon d'appeler la fonction (fonction nominative)
sendformulaire1.addEventListener('click', sendformulaire);

function sendformulaire() {
    let lastname1 = document.getElementById('name').value;
    let firstname1 = document.getElementById('firstname').value;
    let city1 = document.getElementById('city').value;
    
    alert(`Nom : ${lastname1}\nPrénom : ${firstname1}\nVille : ${city1}`);
}

// ou 2ème facon d'appeler la fonction (fonction anonyme)

// sendformulaire1.addEventListener('click', function() {
//     let lastname1 = document.getElementById('name').value;
//     let firstname1 = document.getElementById('firstname').value;
//     let city1 = document.getElementById('city').value;
    
//     alert(`Nom : ${lastname1}\nPrénom : ${firstname1}\nVille : ${city1}`);
// });