let phrases = [
  { text: 'наведи порядок и протри пыль в аппаратных', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'иди загони у входа в театр пару билетов на премьеру', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'помоги коллеге подготовиться к спектаклю', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'скажи начальнику, что он хороший руководитель и много работает', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'наведи порядок в технической документации', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'наведи мосты с коллегами, узнай последние театральные сплетни и расскажи их мне', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'изучи реп план на ближайше пол года', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'послушай и нормализуй треки к спектаклям', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'иди попей чай с салатиком и не мешай мне работать!', image: 'https://i.pinimg.com/originals/de/a9/57/dea95753a4c2746c14a77eba902d451e.gif' },
  { text: 'пересчитай рации и внеси инфу в таблицу', image: 'https://bumper-stickers.ru/7459-thickbox_default/racija-policeyskogo.jpg' },
  { text: 'посчитай батарейки, занеси инфу в журнал на диске', image: 'https://clipart-best.com/img/battery/battery-clip-art-57.png' },
  { text: 'наведи порядок в проводах на кабельном стелаже в 244', image: 'https://phonoteka.org/uploads/posts/2021-06/1623135217_9-phonoteka_org-p-kolyuchaya-provoloka-tekstura-krasivo-12.png' },
  { text: 'проверь все паспорта спектаклей на соответствие', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'разбери рабочую почту', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) 
  {advice.style.fontSize = '33px'; } 
  else {advice.style.fontSize = '42px';}
});
  //for (let i = 0; i <= 2; i = i + 1)
  {smoothly(phrase, 'textContent', phrases[i].text)
  smoothly(image, 'src', phrases[i].image)}
