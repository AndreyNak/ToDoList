const input = document.getElementById('input');
const btn = document.getElementById('addItem');
const content = document.getElementById('content');



btn.addEventListener('click', (event) => {
  if(!input.value) {
    return;
  }
  createElement(input.value);
  input.value = "";
})


const createElement = (value) => {
    console.log(value);
    const div = document.createElement('div');
    div.className = 'list__item';

    const text = document.createElement('div');
    text.textContent = value;
    text.className = 'list__text';

    const btnDelete = document.createElement('button');
    btnDelete.className = 'list__btn-delete';
    btnDelete.textContent = 'X';

    div.appendChild(text);
    div.appendChild(btnDelete);

    div.addEventListener('dblclick', function() {
      text.style.background = "#c7baba";
      text.style.textDecoration = "line-through";
      div.style.opacity = 0.5;
    })
    btnDelete.addEventListener('click', (event) => {
      content.removeChild(div);
    })

    content.appendChild(div);
    
}
