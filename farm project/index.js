var water = document.getElementById("water");
var fertilizer = document.getElementById("fertilizer");
var collect = document.getElementById("collect");
var seed = document.getElementById("seed");
var points = 0;
water.addEventListener("click", function(){
    seed.style.backgroundImage= "url('second-seed.png')";
});
fertilizer.addEventListener("click", function(){
    seed.style.backgroundImage= "url('third-seed.png')";
});
collect.addEventListener("click", function(){
    seed.style.backgroundImage= "url('first-seed.png')";
    
    points=points+1;
    
    document.getElementById("points").innerText = points;

});

var a;
function show(){
    if(a==0)
    {
        document.getElementById("seed-action").style.visibility="visible";
        return a=1;
    }
    else{
        document.getElementById("seed-action").style.visibility="hidden";
        return a=0;
    }
}

var text = document.getElementById("insert");
var submit = document.getElementById("submit");
var fname = document.getElementById("farm-name");

function insert(){
    fname.innerHTML = text.value;
}
submit.addEventListener("click",insert);