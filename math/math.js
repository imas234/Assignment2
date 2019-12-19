let textBox = document.getElementById("math-input-numbers");

textBox.addEventListener("input", function(){
    let input = textBox.value;
    input = input.split(",");    
    if(input[input.length - 1] == ""){
        input.pop();
    }
    console.log(input);
    max(input);
    min(input);
    average(input, sum(input));
    reverse(input);
});

function max(a){
    let max = Number(a[0]);
    for(let i = 1; i < a.length; i++){
        if(Number(a[i]) > max){
            max = Number(a[i]);
        }
    }
    document.getElementById("max").textContent = max;
}

function min(a){
    let min = Number(a[0]);
    for(let i = 1; i < a.length; i++){
        if(Number(a[i]) < min){
            min = Number(a[i]);
        }
    }
    document.getElementById("min").textContent = min;
}

function sum(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += Number(a[i]);
    }
    document.getElementById("sum").textContent = sum;
    return sum;
}

function average(a, sum){
    let average = sum/a.length;
    document.getElementById("avg").textContent = average;
}

function reverse(a){
    a = a.reverse();
    let reverse = "";
    for(let i = 0; i < a.length; i++){
        reverse += a[i];
        if(i != a.length-1) reverse += ",";        
    }
    document.getElementById("reverse").textContent = reverse;
}