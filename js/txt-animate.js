const texts = [
    "Часть 1",
    "Иногда важные решения приходят неожиданно",
    "Пару дней назад я задумался о том, как мне приятно проводить время с тобой",
    "За полгода общения ты стала для меня по-настоящему значимым человеком",
    "Я делился с тобой всем, что имеет значение в моей жизни",
    "Я так легко смог тебе довериться — это много значит для меня",
    "Я написал всё это, чтобы ты знала, как ценю нашу дружбу",
    "И если хочешь что-то сделать — делай",
    "Именно поэтому я создал этот сайт за пару дней, вдохновлённый этим",
    "Мне показалось, что это мило)))",
    "Часть 2"
];

let currentTextIndex = 0; // Индекс текущего текста
const textOutput = document.getElementById('textOutput'); // Получаем элемент для вывода текста
const timerDisplay = document.getElementById('timer'); // Получаем элемент таймера

document.getElementById('playButton').addEventListener('click', function() {
    timerDisplay.style.display = 'block'; // Показываем таймер
    let countdown = 5; // Начальное значение таймера
    const countdownInterval = setInterval(() => {
        countdown--;
        timerDisplay.textContent = countdown; // Обновляем таймер

        if (countdown <= 0) {
            clearInterval(countdownInterval); // Останавливаем таймер
            timerDisplay.style.display = 'none'; // Скрываем таймер
            startSlideshow(); // Запускаем слайд-шоу
        }
    }, 1000); // Обновляем каждую секунду

    var music = document.getElementById('backgroundMusic');
    music.volume = 0.1; // Устанавливаем уровень громкости (от 0.0 до 1.0)
    music.currentTime = 0; // Устанавливаем таймкод, с которого начнётся песня (30 секунд)

    // Воспроизводим музыку и обрабатываем возможные ошибки
    music.play().catch(function(error) {
        console.error('Ошибка воспроизведения:', error);
    });

    // Скрываем кнопку и показываем контейнер с текстом
    this.style.display = 'none'; // Скрываем кнопку
    document.querySelector('.txt-container').style.display = 'block'; // Показываем контейнер с текстом
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
            hideElements(); // Скрываем элементы и переходим на новую страницу
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
            
            // Задержка перед переходом на новую страницу
            setTimeout(() => {
                window.location.href = "page_3.html"; // Переход на новую страницу
            }, 2000); // Задержка в 1 секунду
        }
    }, interval);
}
