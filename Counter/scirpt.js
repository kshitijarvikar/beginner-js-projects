var count = 0;

function changecount(number){
    count += number;
    document.getElementById("count").innerHTML = count;
}

function change(number){
    count = 0;
    document.getElementById("count").innerHTML = count;
}

