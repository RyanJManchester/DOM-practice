const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey im red!";
main.appendChild(p);
const Haa3 = document.createElement('h3');
Haa3.style.color = 'blue';
Haa3.textContent = 'Im a blue H3!';
main.appendChild(Haa3);
const content = document.createElement('div');
content.style.backgroundColor = 'pink';
content.style.border = "solid black";
main.appendChild(content);
let h1 = document.createElement('h1');
h1.textContent = "Im in a div";
let p2 = document.createElement('p');
p2.textContent = "ME TOO!";
content.appendChild(h1);
content.appendChild(p2);

function alertFunction() {
    alert('Yay! you did it!');
}
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
let blu = 'white';
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    e.target.style.background = blu;
}
);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
}
)