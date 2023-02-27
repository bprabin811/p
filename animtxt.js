const spans = document.querySelectorAll('.head h3 span');

let index = 0;

function changeActiveSpan() {
  spans[index].classList.remove('active');
  index = (index + 1) % spans.length;
  spans[index].classList.add('active');
}

setInterval(changeActiveSpan, 2000);
