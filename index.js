const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&","_","-","+",".","?",
"/"];

let campo1 = document.getElementById("campo1")
let campo2 = document.getElementById("campo2")


function caracteresRandom() {
    let numeros = Math.floor(Math.random() * characters.length)
    return characters [numeros]

}


function contraseñaAleatoria() {
    let contraseña1 = ""
    let contraseña2 = ""
    for (let i = 0; i<15; i++){
        contraseña1 += caracteresRandom()
    }
    campo1.textContent = contraseña1
    for (let i = 0; i<15; i++){
        contraseña2 += caracteresRandom()
    }
    campo2.textContent = contraseña2
    
}


