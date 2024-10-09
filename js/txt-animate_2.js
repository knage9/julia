const texts = [
    "Часть 3",
    "Ты знаешь, что я часто действую по принципу «Похуй»",
    "Долгое время я не задумывался, что даже в дружбе есть возможность понравится друг другу",
    "Как говорил какой-то умный человек, настоящие отношения начинаются из дружбы",
    "Юля, я долго думал об этом и решил, что стоит попробовать...",
    "Я чувствую, что у нас может получится что-то большее",
    "И не хочу терять эту возможность",
    "Поэтому я приглашаю тебя на свидание",
    "Всё остальное я возьму на себя — тебе нужно только дать ответ",
    "Если ты хочешь подумать или ты пока не готова просто закрой следующую страницу и вернись к ней через время",
    "Я правда очень ценю тебя"
];

let currentTextIndex = 0; // Индекс текущего текста
const textOutput = document.getElementById('textOutput'); // Получаем элемент для вывода текста
const txtContainer = document.querySelector('.txt-container'); // Получаем контейнер для текста

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
            setTimeout(hideElements, 2000); // Задержка перед переходом на новую страницу
        }
    });
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
            window.location.href = "page_6.html"; // Переход на новую страницу
        }
    }, interval);
}
