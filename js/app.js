var h1 = document.createElement('h1');
h1.innerHTML = "Simão";
document.body.appendChild(h1);

for(var i=2; i<7; i++){
    console.log("Count: "+i);
    var h = document.createElement('h'+i);
    h.innerHTML = "Simão";
    document.body.appendChild(h);
}