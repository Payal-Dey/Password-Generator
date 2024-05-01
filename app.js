const input = document.querySelector(".pass");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy-btn");

function generatePassword(){
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#_$!&*~';
    for(let i=0; i<10; i++){
        let n = Math.floor(Math.random()*str.length);
        pass += str.charAt(n);
    }
    input.value = pass;
}

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    generatePassword();
});

function copyPassword(){
    navigator.clipboard.writeText(input.value);
}


copy.addEventListener("click", (evt)=>{
    evt.preventDefault();
    copyPassword();
});