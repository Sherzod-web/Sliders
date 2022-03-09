// Инициализируем Swiper
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		/*
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/
		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/
		// Прогрессбар
		type: 'progressbar'
	},
	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},

	// Включение \ отключение
	// Перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа / перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true
	},

	// Управление клавиатурой
	keyboard: {
		// Включить \ выключить
		enabled: true,
		// Включить \ выключить
		// только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		// Включить \ выключить
		// управление клавишами pageUp \ pageDown
		pageUpDown: true
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мышью
		// eventsTarget: '.image-slider'
	},

	// Автовысота
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала, если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: false,

	// Стартовый слайд
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	// loopedSlides: 3,

	// Свободный режим
	freeMode: true,

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость переключения
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',

	// Эффекты переключения слайдов
	// Листание
	effect: 'slide',

	/*
	// Эффекты переключения слайдов
	// Смена прозрачности
	effect: 'fade',
	// Дополнение к fade
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Переворот
	effect: 'flip',
	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Куб
	effect: 'cube',
	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	*/

	/*
	// Эффекты переключения слайдов
	// Эффект потока
	effect: 'coverflow',
	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true
	},
	*/

	/*
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		480: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		}
	},
	*/

	/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1
		},
		'@1.00': {
			slidesPerView: 2
		},
		'@1.50': {
			slidesPerView: 3
		}
	},
	*/

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy loading (подгрузка картинок)
	lazy: {
		// Подгружать на старте переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую и следующую картинки
		loadPrevNext: false
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Максимальное увеличение
		maxRatio: 3,
		// Минимальное увеличение
		minRatio: 1
	},

	/*
	// Миниатюры (превью)
	thumbs: {
		// Свайпер с миниатюрами, и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5
		}
	}
	*/

	// Обновить свайпер при изменении элементов слайдера
	observer: true,
	// Обновить свайпер при изменении родительских элементов слайдера
	observeParents: true,
	// Обновить свайпер при изменении дочерних элементов слайдера
	observeSlideChildren: true,
});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// Пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true
	},
	// Корректная работа перетаскивания свайпа для дочернего слайдера
	nested: true,
	// Эффекты переключения слайдов
	// Куб
	effect: 'cube',
	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	}
});
*/

// Ещё один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

/*
// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// Скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
*/

/*
// Запуск автопрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  -  это переменная которой присвоен слайдер

sliderBlock.addEventListener('mouseenter', function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener('mouseleave', function (e) {
	myImageSlider.autoplay.stop();
});
*/

// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});