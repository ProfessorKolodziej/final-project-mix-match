// Add your scripts here
// function filterObjects(c) {
// var x, i;
// x = document.getElementsByClassName
// }
// eslint-disable-next-line no-unused-vars
// const shadow = document.getElementById('myImage');
// eslint-disable-next-line no-unused-vars
function changeImage(inputvalue) {
  switch (inputvalue) {
    default:
    case 1:
      document.getElementById('myImage').style.setProperty('-webkit-filter', 'drop-shadow(5px 5px 5px red)');
      break;
    case 2:
      document.getElementById('myImage').style.setProperty('-webkit-filter', 'drop-shadow(5px 5px 5px blue)');
      break;
    case 3:
      document.getElementById('myImage').style.setProperty('-webkit-filter', 'drop-shadow(5px 5px 5px green)');
      break;
    case 4:
      document.getElementById('myImage').style.setProperty('-webkit-filter', 'drop-shadow(5px 5px 5px orange)');
      break;
    case 5:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/54/e3/p/o0856047015033601245.png?caw=800';
      break;
    case 6:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/69/f1/p/o0856047015033601243.png?caw=800';
      break;
    case 7:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/f7/3b/p/o0856047015033601241.png?caw=800';
      break;
    case 8:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/d6/bb/p/o0856047015033601240.png?caw=800';
      break;
    case 9:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/19/9a/p/o0856047015033601239.png?caw=800';
      break;
    case 10:
      document.getElementById('mycolor').src = 'https://stat.ameba.jp/user_images/20211119/04/halfkneazle/da/c7/p/o0856047015033601238.png?caw=800';
      break;
    case 11:
      document.getElementById('myfruit').src = 'https://stat.ameba.jp/user_images/20211119/08/halfkneazle/1e/bd/p/o0340034815033649711.png?caw=800';
      break;
    case 12:
      document.getElementById('myfruit').src = 'https://stat.ameba.jp/user_images/20211119/08/halfkneazle/b9/d0/p/o0340034815033649713.png?caw=800';
      break;
    case 13:
      document.getElementById('myfruit').src = 'https://stat.ameba.jp/user_images/20211119/08/halfkneazle/a0/d0/p/o0340034815033649715.png?caw=800';
      break;
    case 14:
      document.getElementById('myfruit').src = 'https://stat.ameba.jp/user_images/20211119/08/halfkneazle/0c/f7/p/o0340034815033649721.png?caw=800';
      break;
    case 15:
      document.getElementById('myfruit').src = 'https://stat.ameba.jp/user_images/20211119/09/halfkneazle/3c/f3/p/o0340034815033673147.png?caw=800';
      break;
  }
}
// eslint-disable-next-line no-unused-vars
document.addEventListener('DOMContentLoaded', (event) => {
// const rbs = document.querySelectorAll('input')
  const questions = document.querySelector('.questions');
  const newRbs = document.querySelectorAll('.r');

  newRbs[0].addEventListener('click', () => {
    questions.style.transform = 'translateX(0px)';
    newRbs[0].classList.add('active');
    newRbs[1].classList.remove('active');
    newRbs[2].classList.remove('active');
  });

  newRbs[1].addEventListener('click', () => {
    questions.style.transform = 'translateX(-200px)';
    newRbs[1].classList.add('active');
    newRbs[0].classList.remove('active');
    newRbs[2].classList.remove('active');
  });

  newRbs[2].addEventListener('click', () => {
    questions.style.transform = 'translateX(-400px)';
    newRbs[2].classList.add('active');
    newRbs[0].classList.remove('active');
    newRbs[1].classList.remove('active');
  });
});
