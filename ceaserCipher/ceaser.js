//array of all characters to work with when encrypting or decrypting

let x = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l',
            'm','n','o','p','q','r','s','t','u','v','w','x','y','z'
]





// Grabbing all the elements from the HTML form needed
document.getElementById("myButton").addEventListener("click", function(){
let letter = document.getElementById("inputString").value
let shift = document.getElementById("rightOrLeft").value
let shiftNum = parseInt(document.getElementById("shifts").value)
let encryption = document.getElementById("encOrDec").value
let output = document.getElementById("output")

console.log(encryption)


// Making it so the encryption and decryption actually do different things
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


// This for loop encrypts or decrypts depending on direction, 
// it has an if statement so that if the shift is right and it passes the
// z letter (the laast letter) the index wont go out of range
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

/*Outputting the new cipered string into a paragraph tag in HTML 
using the tag ID*/
output.textContent = newString



})
