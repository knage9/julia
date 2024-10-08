document.addEventListener('DOMContentLoaded', function () {
    const chatBody = document.getElementById('chat-body');
    const dialogItems = document.querySelectorAll('.dialog-item');

    const dialogs = {
        dialog1: [
            { sender: 'sent', text: 'Привет. У нас есть чат кд. Просто общаемся в нем на любые темы. https://t.me/+vpbrUKCa7yxkNWRi' },
            { sender: 'received', text: '+' },
        ],
        dialog2: [
            { sender: 'sent', text: 'Привет, мы где и во сколько встречаемся?'},
            {sender: 'sent', text: 'От какой станции вы поедете ? Нижегородская?'},
            { sender: 'received', text: 'привет, мы поедем примерно в 20:40 на вднх' },
            { sender: 'sent', text: 'Тогда там в 21?' },
            { sender: 'received', text: 'да' },
            { sender: 'received', text: 'артём, мы не успеем к 21)) к 21:15 скорее' },
            { sender: 'received', text: 'а мы в магазине были' },
            { sender: 'sent', text: 'Что купили' },
            { sender: 'received', text: 'жижу' },
            { sender: 'received', text: 'аххахпха' },
            { sender: 'sent', text: 'Ахахкх' },
            { sender: 'image', text: 'img/2.jpg' }
        ],
        dialog3: [
            { sender: 'image', text: 'img/3.jpg' },
            { sender: 'image', text: 'img/4.jpg' },
            { sender: 'sent', text: 'Блин Юль, мне так приятно было пообщаться. Ты кайфовая)' },
            { sender: 'received', text: 'оой, спасибо, я рада, мне тоже приятно))' },
            { sender: 'sent', text: 'Пожалуйста)' },
            { sender: 'received', text: 'я тебе кстати ещё не показала что я там для отчета делаю😋😋' },
            { sender: 'sent', text: 'Ооо давай' },
            { sender: 'video', text: 'img/5.mp4' },
        ],
        dialog4:[
            { sender: 'image', text: 'img/6.jpg' },
            { sender: 'sent', text: 'ахахахахах' },
            { sender: 'sent', text: 'как там итальянский?' },
            { sender: 'received', text: 'со скрипом ахвха' },
            { sender: 'video', text: 'img/7.mp4' },
            { sender: 'video', text: 'img/8.mp4' },
            { sender: 'received', text: 'аххахахахахахаахахахп' },
            { sender: 'received', text: 'хаххахахвхв' },
            { sender: 'received', text: 'что у вас происходит))' },
            { 
                sender: 'sent', 
                text: `Давно забыл как быть счастливым…\nВедь мой эпитет это ты!\nКак жить я буду без любви\nМоя любовь прости…\n\nИ скажешь ты люби\nЛюби, меня, люби\nА я люблю поэтому слова я эти говорю!\n\nНе изменник, не убийцы,\nНе вор, не кровопийца\nВ бедах России виноват лишь только я\nЗовешь меня ты не системный либерал\n\nСменяются эпохи, времена,\nОдно лишь неизменно век за веком:\nТвой выбор:\nЖизнь или оставаться человеком\n\nСколь угодно твердите зря:\n"Не делай то, не делай это…"\nМоя любовь навеки…\nЭто и боль, и трепет!\n\nМораль сей притчи, в общем, тривиальна,\nЛюбой устанет, и я устал\nУстал смотреть на эти лица\nЯ сделал все…\n\nМожет быть найду я место в этом мире,\nГде уже не будет пустоты...\nГде смогу позабыть печали я,\nСтен, удушливой, тесноты.` 
            },
            { sender: 'received', text: 'мне нравятся мысли' },
            { sender: 'sent', text: 'Но стих хуйня без рифмы ахахпхпх я знаю' },
            { sender: 'received', text: 'аххахахахаахах' },
            { sender: 'received', text: 'я могу свой показать наверное....' },
            { sender: 'received', text: 'страшно ахаххаха' },
            { 
                sender: 'received', 
                text: `Там кажется,\nчто я ограждена\nот пустых слов,\nчто брошены на произвол\nи донеслись до слуха\nлюбимого\nтак искренне и нежно\nогромного размера\nвнутреннего человека.\nТам кажется,\nчто я не слышу пререканий\nи громких звуков,\nкоторые так глушат,\nчто хочется сбежать,\nкричать, закрыться,\nбить.\nТам кажется, что нет\nтех сложных, необъятных,\nневозможных\nмечт.\n\nМы просто быстро,\nмедленно касаемся\nсвоих же уголков,\nкогда мы вместе,\nмы не видим остриё,\nнам невдомёк.\nКогда мы врозь,\nто чувства меньше ощутимы,\nмы сознаем\nвсю боль,\nв итоге понимая,\nчто всё же\nнеделимы.\n\nИ пробуждаясь, понять,\nчто это сон,\nв страхе раскрывая очи:\n«Это так сложно,\nочень-очень», -\nсказал бы он\nтогда-то ночью.`
            },
            { sender: 'sent', text: 'Но стих ахуенный' },
            { sender: 'sent', text: 'Мне очень нравится' },
            { sender: 'sent', text: 'Умничка' },
            { sender: 'received', text: 'я думала никому не покажу, пока не созрею, но раз все не так плохо' },
        ],
        dialog5: [
            { sender: 'image', text: 'img/9.jpg' },
            { sender: 'sent', text: 'Ахахахахахахахахвх сука' },
            { sender: 'sent', text: 'Это в директорской стоит' },
            { sender: 'received', text: 'ХАХАХАХАХ' },
            { sender: 'sent', text: 'Голодный😭' },
            { sender: 'received', text: 'тарелка стоит аххахахахахахха' },
            { sender: 'received', text: 'они может хотят дарить любовь но некому((' },
            { sender: 'sent', text: 'Ахпхпхпхпхпх' },
        ],
        dialog6: [
            { sender: 'image', text: 'img/10.jpg' },
            { sender: 'image', text: 'img/11.jpg' },
            { sender: 'sent', text: 'Ты тоже скинь что снимала' },
            { sender: 'received', text: 'класс я со свечкой...' },
            { sender: 'received', text: 'природу то?' },
            { sender: 'sent', text: 'Вайбовые фотографии)' },
            { sender: 'image', text: 'img/12.jpg' },
            { sender: 'image', text: 'img/13.jpg' },
            { sender: 'image', text: 'img/14.jpg' },
        ],
        dialog7: [
            { sender: 'sent', text: 'Я кстати твой плейлист слушал' },
            { sender: 'received', text: 'какой' },
            { sender: 'sent', text: 'Который ты мне скидывала' },
            { sender: 'received', text: 'нифига себе' },
            { sender: 'received', text: 'и как' },
            { sender: 'sent', text: 'Кааайф' },
            { sender: 'received', text: 'какие песни тебя удивили давай так' },
            { sender: 'sent', text: 'Ахахпхпхпх' },
            { sender: 'sent', text: 'Меня удивило много исполнителей которых я не знаю' },
            { sender: 'sent', text: 'Мне понравился плейлист' },
            { sender: 'received', text: 'удивил честно' },
            { sender: 'received', text: 'аххахахах' },
            { sender: 'video', text: 'img/15.mp4' },
        ],
        dialog8: [
            { sender: 'sent', text: 'Я чуть раньше приехал' },
            { sender: 'image', text: 'img/15.jpg' },
            { sender: 'image', text: 'img/16.jpg' },
            { sender: 'image', text: 'img/17.jpg' },
            { sender: 'sent', text: 'Бля как-то даже скучно' },
            { sender: 'sent', text: 'Что я не пьяный вообще' },
            { sender: 'sent', text: 'Ахахпхпхпх' },
            { sender: 'received', text: 'ахахаххахахахахаххахахаха' },
            { sender: 'received', text: 'это проблемы людей которые не пьянеют' },
            { sender: 'sent', text: 'Короче хочу ещё ахпххпхпх' },
            { sender: 'received', text: 'пора водку бахать' },
            { sender: 'sent', text: 'Соджу' },
            { sender: 'received', text: 'это да' },
            { sender: 'video', text: 'img/18.mp4' },
        ],
    };

    let currentDialog = 'dialog1';
    let messageIndex = 0;

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('telegram-message', sender);
    
        if (sender === 'image') {
            const img = document.createElement('img');
            img.src = text; // путь к изображению
            img.classList.add('responsive-image'); // Добавляем класс для стилизации
            messageDiv.appendChild(img);
        } else if (sender === 'video') {
            const video = document.createElement('video');
            video.src = text; // путь к видео
            video.autoplay = true; // видео начинается автоматически
            video.classList.add('responsive-video'); // Добавляем класс для стилизации
            video.muted = false; // отключаем мутинг
            video.volume = 0.5; // ставим максимальную громкость
    
            messageDiv.appendChild(video);
    
            video.play().catch(error => {
                console.warn('Браузер заблокировал воспроизведение со звуком:', error);
                video.muted = true; // если не получилось, включаем без звука
                video.play(); // продолжаем воспроизведение без звука
            });
    
            // Создаем кнопку "Пропустить"
            const skipButton = document.createElement('button');
            skipButton.textContent = 'Пропустить';
            skipButton.classList.add('skip-button'); // Добавляем класс для стилизации
    
            // Обработка нажатия на кнопку "Пропустить"
            skipButton.addEventListener('click', () => {
                video.pause(); // Останавливаем видео
                showNextMessage(); // Переходим к следующему сообщению
            });
    
            messageDiv.appendChild(skipButton);
    
            // Обрабатываем событие завершения видео
            video.addEventListener('ended', () => {
                if (messageIndex < dialogs[currentDialog].length - 1) {
                    setTimeout(showNextMessage, 1000); // Переход к следующему сообщению
                } else {
                    setTimeout(switchDialog, 2000); // Переключение на следующий диалог
                }
            });
        } else {
            messageDiv.textContent = text;
        }
    
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Автопрокрутка вниз
    
        // Если это не видео, следующее сообщение отправляем через 1 секунду
        if (sender !== 'video') {
            if (messageIndex < dialogs[currentDialog].length - 1) {
                setTimeout(showNextMessage, 1000); // Задержка перед показом следующего сообщения
            } else {
                setTimeout(switchDialog, 2000); // Переключение на следующий диалог
            }
        }
    }
    
    
    
    
    
    
    function showNextMessage() {
        if (messageIndex < dialogs[currentDialog].length) {
            const { sender, text } = dialogs[currentDialog][messageIndex];
            addMessage(sender, text);
            messageIndex++;
        } else {
            switchDialog(); // Если закончилась переписка, переключаем на следующий диалог
        }
    }

    function switchDialog() {
        const currentIndex = Array.from(dialogItems).findIndex(item => item.dataset.dialog === currentDialog);
        const nextIndex = (currentIndex + 1) % dialogItems.length; // Переключаемся на следующий диалог

        // Удаляем класс 'item_1' у текущего элемента
        dialogItems[currentIndex].classList.remove('item_1');

        currentDialog = dialogItems[nextIndex].dataset.dialog;
        messageIndex = 0; // Сбрасываем индекс сообщений
        chatBody.innerHTML = ''; // Очищаем чат

        // Проверяем, если мы дошли до конца диалогов
        if (nextIndex === 0) {
            // Если все диалоги были просмотрены, переходим на другую страницу
            setTimeout(() => {
                window.location.href = 'page_5.html'; // Переход на другую страницу
            }, 1000); // Задержка перед переходом на другую страницу
        } else {
            showNextMessage(); // Показываем первое сообщение нового диалога
        }

        // Добавляем класс 'item_1' к новому элементу
        dialogItems[nextIndex].classList.add('item_1');
    }

    dialogItems.forEach(item => {
        item.addEventListener('click', () => {
            // Удаляем класс 'item_1' у всех элементов
            dialogItems.forEach(dialogItem => dialogItem.classList.remove('item_1'));

            currentDialog = item.dataset.dialog;
            messageIndex = 0;
            chatBody.innerHTML = ''; // Очищаем чат
            showNextMessage(); // Показать первое сообщение нового диалога

            // Добавляем класс 'item_1' к текущему элементу
            item.classList.add('item_1');
        });
    });

    // Начинаем с первого диалога
    dialogItems[0].classList.add('item_1'); // Добавляем класс 'item_1' к первому элементу
    showNextMessage(); // Показываем первое сообщение
});
