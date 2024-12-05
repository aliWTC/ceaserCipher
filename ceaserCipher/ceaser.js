let x = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l',
            'm','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

/*
document.addEventListener('encOrDec').addEventListener('click', function(){
    let encryption = document.getElementById("encOrDec").value
    if (encryption === 'Encrypt'){

    }
})
*/

document.getElementById("myButton").addEventListener("click", function(){
let letter = document.getElementById("inputString").value
let shift = document.getElementById("rightOrLeft").value
let shiftNum = parseInt(document.getElementById("shifts").value)
let encryption = document.getElementById("encOrDec").value
let output = document.getElementById("output")

console.log(encryption)
if (shift === 'left'){
    shiftNum *= -1

    if (encryption === 'Decrypt'){
        shiftNum *= -1
    }
}

else {
    if (encryption === 'Decrypt'){
        shiftNum *= -1
    }
}







let newString = ''

for (i = 0; i<letter.length; i++){

    console.log(x.indexOf(letter[i])+shiftNum)

    if ((x.indexOf(letter[i])+shiftNum) > 25){
        newString += (x[((x.indexOf(letter[i])+shiftNum)%26)])
    }



    else{
        
        newString += (x[x.indexOf(letter[i])+shiftNum])

    }


    
    


}
console.log(newString)
output.textContent = newString



})