let sendformulaire1 = document.getElementById('sdformulaire');
sendformulaire1.addEventListener('click', sendformulaire);

function sendformulaire() {
    let lastname1 = document.getElementById('name').value;
    let firstname1 = document.getElementById('firstname').value;
    let city1 = document.getElementById('city').value;
    
    alert(`Nom : ${lastname1}\nPrénom : ${firstname1}\nVille : ${city1}`);
}