function quoteBoxInit() {
	const quotes = ["Be on the alert to recognize your prime at whatever time of your life it may occur.", 
							"The early bird gets the worm, but the second mouse gets the cheese.",
							"Your road to glory will be rocky, but fulfilling.",
							"Don’t worry about money. The best things in life are free."];
	const x = Math.floor(Math.random()*10)%4;
    document.getElementById("quote").innerHTML = quotes[x];
    changeColor(x);
    console.log(x);
}

function changeColor(n){
	
	let color = ["#f75a21", "#5ad634", "#4bc1f0", "#f0f029"];
    let borderColor = ["#d45222", "#4eb82e", "#3e9cc2", "#dfdf27"];
    let fontColor = ["#4bc1f0", "#f0f029", "#f75a21", "#5ad634"];
	let font = ["Arial", "Impact", "Times New Roman", "Segoe Script"];
	let size = ["14px", "12px", "18px", "16px"];
	
	document.querySelector(".quote-display").style.backgroundColor = color[n];
	document.querySelector(".quote-display").style.borderColor = borderColor[n];
	document.querySelector("#quote").style.color = fontColor[n];
	document.querySelector("#quote").style.fontFamily = font[n];
    document.querySelector("#quote").style.fontSize = size[n];
	
}

document.querySelector(".quote-box").addEventListener('load', quoteBoxInit());

document.querySelector("#style0").addEventListener('click', function(event){
    changeColor(event.target.innerText);
});
document.querySelector("#style1").addEventListener('click', function(event){
    changeColor(event.target.innerText);
});
document.querySelector("#style2").addEventListener('click', function(event){
    changeColor(event.target.innerText);
});
document.querySelector("#style3").addEventListener('click', function(event){
    changeColor(event.target.innerText);
});
