/*function countwords(){
    var words = document.getElementById("text").value;

    var num = 0;

    for(var i=0; i<words.length; i++){
        var current = words[i];

        if(current == ' '){
            num += 1;
        }
    }
    num += 1;

    document.getElementById("show").innerHTML = num;
}*/

function countwords(){
    var word = document.getElementById("text").value;
    var count = 0;
    var split = word.split(' ');

    for(var i=0; i<split.length; i++){
        if(split[i] != ' '){
            count += 1;
        }
    }
    document.getElementById("show").innerHTML = count;
}

function reset(){
    
    document.getElementById("text").value = '';  
    document.getElementById("show").innerHTML = 0;  
}