
var keys = document.querySelector('#keys');

var calcLine = '';

var buttons = document.createElement('ul');

var buttonsSymbols = ['9','8','7','/','6','5','4','x','3','2','1','-','=','0','.','+'];

for (var i=0; i<buttonsSymbols.length; i++) {
    var li = document.createElement('li');
    var button = document.createElement('input');
    button.setAttribute("type", "button");
    button.setAttribute("value", buttonsSymbols[i]);
    button.setAttribute("onclick", "appendVal()");
    li.appendChild(button);
    buttons.appendChild(li);
}

function appendVal() {
    calcLine += button.value;
}


keys.appendChild(buttons);

