var mainUl = document.getElementById('mainList');
var texts = ['Ed', 'Edd', 'Eddy' ];

for(var i=0; i<texts.length; i++){
  var nodoLi = document.createElement('li');
  nodoLi.className = 'list-group-item';
  nodoLi.innerHTML = texts[i];
  mainUl.appendChild(nodoLi);
}
