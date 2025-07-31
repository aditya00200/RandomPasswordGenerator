let alphabets="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers="0123456789";
let specials="@#$%^&*";
let func_rand=(arr)=>{
    let rand_idx=Math.floor(Math.random()*arr.length);
    return rand_idx;
}
let generate_button=document.getElementById("generate_button");
generate_button.addEventListener("click",()=>{
    let ipt=document.getElementById("input");
    let dv=document.getElementById("show_password");
    let n=ipt.value;
    let word="";
    if(n>=4 && n<=16){
    while(word.length<=n){
        word+=alphabets[func_rand(alphabets)];
        word+=numbers[func_rand(numbers)];
        word+=alphabets[func_rand(alphabets)];
        word+=specials[func_rand(specials)];
    }
    new_word=word.slice(0,n);
    dv.innerText=`${new_word}`;}
    else{
        alert("Password length limit is from 4-16 letters.");
    }
})

let copy_icon=document.getElementById("copy_icon");
copy_icon.addEventListener("click",()=>{
    let dv=document.getElementById("show_password");
    let password=dv.innerText;
    navigator.clipboard.writeText(password);
    alert("Password copied");
})