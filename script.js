const text = [
"Beginner Software Developer",
"Java Developer",
"React.js Learner",
"Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1000);
}
else{
setTimeout(type, 80);
}

})();

function openPopup(src){

document.getElementById("popup").style.display="flex";
document.getElementById("popup-img").src=src;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}