var content = document.getElementById('content');
var input = document.getElementById('input');
var btn = document.getElementById('addItem');

var modeChange = false;


var todos;
function Lstage(){
  todos =  content.innerHTML;
  localStorage.setItem('todos', todos);
}


content.addEventListener('click', function (evenet) {
  if(evenet.target.className === "list__text") {
    evenet.target.classList.toggle('checked');
    Lstage();
  } 
  else if(evenet.target.className === "list__text checked") {
    evenet.target.classList.remove('checked');
    Lstage();
  } 
  else if(evenet.target.tagName === "BUTTON") {
    var div = evenet.target.parentNode;
    div.remove();
    Lstage();
  } 
  else if(evenet.target.tagName === "SPAN") {
    input.focus();

    var elem = evenet.target.parentNode;
    elem = elem.querySelector('.list__text');
    console.log(elem);
    input.value = elem.innerText;

    btn.id = 'BtnChange';
    input.id = "inputChange";

    modeChange = true;

    var btnChange = document.getElementById('BtnChange');

    btnChange.addEventListener('click', () => {
      if(input.value) {
        elem.innerText = input.value;
        console.log(elem);
        Lstage();
        modeChange = false;
        location.reload();
      } 
    })

}
});
 
input.addEventListener("keyup", function(event) {
  if(!modeChange){
    if (event.key === 'Enter') {
      if(input.value) {
        newElement(input.value);
      }
    }
  }
});

function myEvent() {
  if(input.value) {
    newElement(input.value);
  }
}
 


function newElement(inputValue) {
    var div = document.createElement('div');
    div.className = 'list__item';

    var text = document.createElement('div');
    text.textContent = inputValue;
    text.className = 'list__text';

    div.appendChild(text);

    document.getElementById('content').appendChild(div);
    document.getElementById('input').value = "";

    var changeInput = document.createElement('SPAN');
    var txtChangeInput = document.createTextNode('CH');
    changeInput.className = 'list__change-input';
    changeInput.appendChild(txtChangeInput);

    div.appendChild(changeInput);

    var btnDelete = document.createElement('BUTTON');
    var txt = document.createTextNode("X");
    btnDelete.className = 'list__btn-delete';
    btnDelete.appendChild(txt);

    div.appendChild(btnDelete);
    
    Lstage();
}

if(localStorage.getItem('todos')) {
   content.innerHTML = localStorage.getItem('todos');
}
