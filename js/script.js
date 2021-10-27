const images = [
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

const sliderLeft = document.querySelector('.container .slider .slider-left');
// console.log(slider);
const sliderList = document.querySelector('.container .slider .slider-list');
const leftItem = document.getElementsByClassName('item');
//console.log(item);
const listItem = document.getElementsByClassName('list-item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let contatore = 0;
// console.log(item[contatore]);

for (let i = 0; i < images.length; i++) {
  
  //creo div con img
  const item = document.createElement('div');
  item.className += 'item';
  item.innerHTML = `<img src="${images[i]}" alt="" />`;

  if (i === contatore) {
    item.classList.add('active');
  }


  //creo div con testi
  const itemInfo = document.createElement('div');
  const itemTitle = document.createElement('div');
  const itemText = document.createElement('div');

  itemInfo.className += 'item-info';
  itemTitle.className += 'item-title';
  itemText.className += 'item-text';

  itemText.innerHTML = text[i];
  itemTitle.innerHTML = title[i];

  itemInfo.append(itemTitle, itemText);
  sliderLeft.append(item);
  item.append(itemInfo);

}


//cambiamento immagine al click 
prev.addEventListener('click', function(){
  leftItem[contatore].classList.remove('active');
  listItem[contatore].classList.remove('selected');
  contatore--;
  if (contatore < 0) {
    contatore = leftItem.length-1;
  }
  leftItem[contatore].classList.add('active');
  listItem[contatore].classList.add('selected');
});

next.addEventListener('click', function(){
  leftItem[contatore].classList.remove('active');
  listItem[contatore].classList.remove('selected');
  contatore++;
  if (contatore > leftItem.length - 1) {
    contatore = 0;
  }
  leftItem[contatore].classList.add('active');
  listItem[contatore].classList.add('selected');
});