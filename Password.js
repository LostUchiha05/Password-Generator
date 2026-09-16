const charArray = [
    // Lowercase (a-z)
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    
    // Uppercase (A-Z)
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    
    // Numbers (0-9)
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    
    // Special Characters
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', 
    '=', '[', ']', '{', '}', ';', '\'', ':', '"', ',', '.', '/', '<', 
    '>', '?', '\\', '|', '`', '~'
  ];


let pass1 = document.getElementById("Password-1")
let pass2 = document.getElementById("Password-2")
let Password1 = "";
let Password2 = "";


pass1.addEventListener("click",function(){
    let TextToCopy = pass1.innerText;

    navigator.clipboard.writeText(TextToCopy)
        .catch(err=>{
            console.error("Failed to copy text: ".err)
        });
});

pass2.addEventListener("click",function(){
    let TextToCopy = pass2.innerText;

    navigator.clipboard.writeText(TextToCopy)
        .catch(err=>{
            console.error("Failed to copy text: ".err)
        });
});


function pass1Gen(){
    let Password1 = "";
    for(let i = 0 ;i<9;i++){
        let random = Math.floor(Math.random()* charArray.length)
        Password1 += charArray[random]
    }
    console.log(Password1)

    pass1.textContent = Password1
   
}

function pass2Gen(){
    let Password2 = "";
    for(let i = 0 ;i<9;i++){
        let random = Math.floor(Math.random()* charArray.length)
        Password2 += charArray[random]
    }
    console.log(Password2)

    pass2.textContent = Password2
   
}

function Password(){
    pass2Gen()
    pass1Gen()
}