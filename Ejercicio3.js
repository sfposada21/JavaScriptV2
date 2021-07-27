// for 

let butonFor = document.getElementById("bFor");

const emergente = () => {
    for (let i = 0; i < 3; i++) 
    {
        alert("Esto es Spam");
        window.open("https://www.coursera.org/account/accomplishments/verify/6NLL2YM7WB79");
    }
};


// evento
butonFor.onclick = function (){
emergente();
}