const texts = [
    "На самом деле, я был уверен, что ты выберешь именно этот вариант.",
    "Создавая этот сайт, я думал, что это будет просто классная идея, которая останется в памяти надолго",
    "Я всегда прямолинеен, и для меня важно делиться своими ощущениями в тот момент, когда они появляются",
    "Спасибо за честность",
    "Это никак не меняет моего отношения к тебе, и для меня важно, чтобы мы оба чувствовали себя комфортно",
    "Ты меня вдохновила, спасибо за это",
    "Я получил огромное удовольствие, работая над этим сайтом",
    "До встречи😋"
];

let currentTextIndex = 0; // Индекс текущего текста
const textOutput = document.getElementById('textOutput'); // Получаем элемент для вывода текста
const txtContainer = document.querySelector('.txt-container'); // Получаем контейнер для текста
const slider = document.getElementById('slider'); // Получаем контейнер для слайдера
const slideImage = document.getElementById('slideImage'); // Получаем элемент изображения в слайдере

// Массив с изображениями для слайдера
const images = [
    'vibe/1.jpg',
    'vibe/2.jpg',
    'vibe/3.jpg',
    'vibe/4.jpg',
    'vibe/5.jpg',
    'vibe/6.jpg',
    'vibe/7.jpg',
    'vibe/8.jpg',
    'vibe/9.jpg',
    'vibe/10.jpg',
    'vibe/11.jpg',
    'vibe/12.jpg',
    'vibe/13.jpg',
    'vibe/14.jpg',
    'vibe/15.jpg',
    'vibe/16.jpg',
    'vibe/17.jpg',
    'vibe/18.jpg',
    'vibe/19.jpg',
    'vibe/20.jpg',
    'vibe/21.jpg',
    'vibe/22.jpg',
    'vibe/23.jpg',
    'vibe/24.jpg',
    'vibe/25.jpg',
    'vibe/26.jpg',
    'vibe/27.jpg',
    'vibe/28.jpg',
    'vibe/29.jpg',
    'vibe/30.jpg',
    'vibe/31.jpg',
    // Добавьте больше изображений по мере необходимости
];

document.getElementById('playButton').addEventListener('click', function() {
    var music = document.getElementById('backgroundMusic');
    music.volume = 0.1; // Устанавливаем уровень громкости (от 0.0 до 1.0)
    music.currentTime = 35; // Устанавливаем таймкод, с которого начнётся песня (30 секунд)
    music.play().catch(function(error) {
        console.error('Ошибка воспроизведения:', error);
    });

    // Скрываем кнопку и показываем контейнер с текстом
    this.style.display = 'none';
    txtContainer.style.display = 'block';

    // Запускаем анимацию текста с задержкой в 2 секунды
    setTimeout(startSlideshow, 2000);
});

function typeText(text, callback) {
    textOutput.textContent = ''; // Очищаем текстовое поле
    let i = 0; // Индекс текущего символа

    const typingInterval = setInterval(() => {
        if (i < text.length) {
            textOutput.textContent += text.charAt(i); // Добавляем символ к тексту
            i++;
        } else {
            clearInterval(typingInterval); // Останавливаем интервал
            callback(); // Вызываем колбек после завершения печати
        }
    }, 50); // Задержка между символами в миллисекундах
}

function startSlideshow() {
    typeText(texts[currentTextIndex], function() {
        currentTextIndex++;
        if (currentTextIndex < texts.length) {
            setTimeout(startSlideshow, 2000); // Задержка перед следующим текстом
        } else {
            setTimeout(startImageSlider, 2000); // Задержка перед началом слайдера
        }
    });
}

function startImageSlider() {
    txtContainer.style.display = 'none'; // Скрываем текстовый контейнер
    slider.style.display = 'flex'; // Показываем слайдер
    let currentImageIndex = 0; // Индекс текущего изображения

    function showNextImage() {
        slideImage.src = images[currentImageIndex]; // Устанавливаем источник изображения
        currentImageIndex++;
        if (currentImageIndex < images.length) {
            setTimeout(showNextImage, 200); // Задержка между изображениями
        } else {
            setTimeout(hideElements, 2000); // Задержка перед переходом на новую страницу
        }
    }

    showNextImage(); // Запускаем показ изображений
}

function hideElements() {
    const music = document.getElementById('backgroundMusic');
    const fadeOutDuration = 2000; // Продолжительность уменьшения громкости в миллисекундах
    const interval = 50; // Интервал уменьшения громкости в миллисекундах
    const step = (music.volume / (fadeOutDuration / interval)); // Шаг уменьшения громкости

    const fadeOutInterval = setInterval(() => {
        if (music.volume > step) {
            music.volume -= step; // Уменьшаем громкость
        } else {
            music.volume = 0; // Устанавливаем громкость на 0
            clearInterval(fadeOutInterval); // Очищаем интервал
            music.pause(); // Останавливаем музыку
            window.location.href = "index.html"; // Переход на новую страницу
        }
    }, interval);
}
