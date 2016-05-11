var h1 = document.createElement('h1');
h1.innerHTML = "Simão";
document.body.appendChild(h1);



function addTitles(){
    for(var level=2; level<7; level++){
        var text = 'Title Level ' + level;
        var title = createTitle(level, text);
        document.body.appendChild(title);
    }
}

function createTitle(level, text){
    var title = document.createElement('h'+level);
    title.innerHTML = text;
    return title;
}

//init
addTitles();