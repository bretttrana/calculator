var keys = document.querySelector('#keys');

var calcLine = '';
var first;
var oper;
var second;

var screen = document.createElement('ul');
var screenLi = document.createElement('li');
screenLi.setAttribute("id", "textScreen");
screen.appendChild(screenLi);
var clearLi = document.createElement('input');
clearLi.setAttribute("type", "button");
clearLi.setAttribute("id", "clear");
clearLi.setAttribute("value", "C")
clearLi.setAttribute("onclick", "clearCalcLine()");
screen.appendChild(clearLi);

var buttons = document.createElement('ul');

var buttonsSymbols = ['9','8','7','/','6','5','4','x','3','2','1','-','=','0','.','+'];

for (var i=0; i<buttonsSymbols.length; i++) {
    var li = document.createElement('li');
    var button = document.createElement('input');
    button.setAttribute("type", "button");
    button.setAttribute("value", buttonsSymbols[i]);
    button.setAttribute("onclick", "appendVal(this.id)");
    button.setAttribute('id', i);
    li.appendChild(button);
    buttons.appendChild(li);
}

function appendVal(clicked_id) {
    if (buttonsSymbols[clicked_id] == '+' || buttonsSymbols[clicked_id] == '-' || 
        buttonsSymbols[clicked_id] == 'x' || buttonsSymbols[clicked_id] == '/') {
            first = calcLine;
            oper = buttonsSymbols[clicked_id];
            calcLine = "";
    }
    else {
        calcLine += buttonsSymbols[clicked_id];
        document.getElementById('textScreen').textContent = calcLine;
    }
    if (buttonsSymbols[clicked_id] == '=') {
        second = calcLine;
        if (oper == '+') {
            calcLine = parseFloat(first) + parseFloat(second);
        }
        if (oper == '-') {
            calcLine = parseFloat(first) - parseFloat(second);
        }
        if (oper == 'x') {
            calcLine = parseFloat(first) * parseFloat(second);
        }
        if (oper == '/') {
            calcLine = parseFloat(first) / parseFloat(second);
        }
        calcLine = +calcLine.toFixed(6);
        first = calcLine;
        oper = "";
        document.getElementById('textScreen').textContent = calcLine;
    }
}
function clearCalcLine() {
    calcLine = "";
    first = 0;
    oper = "";
    second = 0;
    document.getElementById('textScreen').textContent = calcLine;
}

function newEntry() {
    calcLine = "";
    document.getElementById('textScreen').textContent = calcLine;
}

keys.appendChild(screen);
keys.appendChild(buttons);
