const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];


const item = document.getElementsByClassName('item');
//console.log(item);
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let contatore = 0;
// console.log(item[contatore]);

prev.addEventListener('click', function(){
  item[contatore].classList.remove('active');
  contatore--;
  if (contatore < 0) {
    contatore = item.length-1;
  }
  item[contatore].classList.add('active');

});

next.addEventListener('click', function(){
  item[contatore].classList.remove('active');
  contatore++;
  if (contatore > item.length - 1) {
    contatore = 0;
  }
  item[contatore].classList.add('active');
});