const calculate=document.querySelector('.calculate');
const resetBtn=document.querySelector('.reset');

// ecoute de l'événement derriere le bouton calculate
calculate.addEventListener('click', (e)=>{
    e.preventDefault(); //empêche la soumission du formulaire 

    // zone de saisie du montant
    let billAmt=document.getElementById('amount').value;
    //on récupère la valeur du pourcentage
    let percentage=document.getElementById('discount-percentage').value;

    let discountAmt=document.getElementById('discount-amount');
    let FinalPay=document.getElementById('pay');

    discountAmt.value = billAmt * percentage / 100;
    FinalPay.value = billAmt - discountAmt.value;
});

// effacement des zones de saisie
resetBtn.addEventListener('click', ()=>{
    window.location.reload();
});