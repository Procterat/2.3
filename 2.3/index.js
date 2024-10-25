'use strict';

let quote = document.getElementById('quote');
let image = document.getElementById("image");


let beginning = [
    'Кто не съел пельмени, ',
    "Кто ошибся, ",
    "Когда меня рожали, ",
    "Иногда, жизнь - это жизнь, "
];

let ending = [
    "тот очень пожалеет...",
    "тот пусть не боится",
    "в лесах волки гуляли",
    "а ты в ней - иногда"
];

let images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
]

function generateQuote() {
    let randomBeginnig = getRandomElement(beginning);
    let randomEnding = getRandomElement(ending);
    let randomQuote = randomBeginnig + randomEnding;
    let randomImg = getRandomElement(images);

    hide();

    console.log(randomQuote);

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    // Скрывает текущие цитату и изображение
    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
        // Показывает следующие цитату и изображение с задержкой в пол секунды, чтобы успел сработать transition
        setTimeout(show, 500);
    }

// Показывает новые цитату и изображение 
    function show() {
        // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе - стандартные стили
        if (randomQuote.length <= 48) {
            quote.style.fontSize = '42px';
            quote.style.justifyContent = 'center';
        } else {
            quote.style.fontSize = '';
            quote.style.justifyContent = '';
        }

        image.src = 'Заготовка проекта/images/' + randomImg;
        quote.textContent = randomQuote;

        image.classList.add('show');
        quote.classList.add('show');
    }
}
