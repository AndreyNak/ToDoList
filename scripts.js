var content = document.getElementById('content');
var input = document.getElementById('input');
var btn = document.getElementById('addItem');
var todos;

function LStage(){
  todos =  content.innerHTML;
  localStorage.setItem('todos', todos);
}

content.addEventListener('click', function (evenet) {
    if(evenet.target.tagName === "BUTTON") {
       var div = evenet.target.parentNode;
       div.remove();
       LStage()
    }
}, false);

btn.addEventListener('click', (event) => {
   if(!input.value) {
     return;
   }
   newElement(input.value);
 })
 

function newElement(inputValue) {
    var div = document.createElement('div');
    div.className = 'list__item';
    var text = document.createElement('div');
    text.textContent = inputValue;
    text.className = 'list__text';
    div.appendChild(text);
    document.getElementById('content').appendChild(div);
    document.getElementById('input').value = "";
    var btnDelete = document.createElement('BUTTON');
    var txt = document.createTextNode("X");
    btnDelete.className = 'list__btn-delete';
    btnDelete.appendChild(txt);
    div.appendChild(btnDelete);
    LStage()
    div.addEventListener('dblclick', function() {
      text.style.background = "#c7baba";
      text.style.textDecoration = "line-through";
      div.style.opacity = 0.5;
      toLStageLocal();
      
    })
}

if(localStorage.getItem('todos')) {
   content.innerHTML = localStorage.getItem('todos');
}
