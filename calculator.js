
var keys = document.querySelector('#keys');

var calcLine = '';

var buttons = document.createElement('ul');

var buttonsSymbols = ['9','8','7','/','6','5','4','x','3','2','1','-','=','0','.','+'];

for (var i=0; i<buttonsSymbols.length; i++) {
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.textContent = buttonsSymbols[i];
    button.name = buttonsSymbols[i];
    button.value = buttonsSymbols[i];
    button.addEventListener('click', function() {
        calcLine += button.value;
    });
    li.appendChild(button);
    buttons.appendChild(li);
}

keys.appendChild(buttons);


document.body.addEventListener('click', function() {
    console.log(calcLine);
});