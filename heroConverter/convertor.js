document.getElementById("convert-button").addEventListener("click", function(){
    let input = document.getElementById("num-value").value;
    let conv = document.getElementById("select-mass-type").value;
    if(conv == "lb-to-kg"){
        document.getElementById("result").textContent = String(input*0.45359);
    }
    else{
        document.getElementById("result").textContent = String(input*2.20462);
    }
})