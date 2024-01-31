import pageOne from '/public/card.png'
import pageThree from '/public/card2.png'
import pageTwo from '/public/card3.png'
export const dataFilms = [
	{
		id: 1,
		rating: 8.5,
		title: 'Синий жук',
		titleEng: 'Blue Juk',
		imgFilm: pageOne,
		country: 'США',
		genre: 'фантастика, боевик',
		year: '2023',
		premiere: '01.01.2023',
		quality: 'HD',
		audioLanguage: 'Русский',
		description:
			'Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.',
		ageRestriction: 16,
	},
	{
		id: 2,
		rating: 7.8,
		title: 'Салют',
		titleEng: 'Salut',
		imgFilm: pageTwo,
		country: 'Россия',
		genre: 'фэнтези, приключения',
		year: '2022',
		premiere: '15.02.2022',
		quality: '4K',
		audioLanguage: 'Английский,Русский',
		description:
			'Космическая станция «Салют-7», находящаяся на орбите в беспилотном режиме, неожиданно перестаёт отвечать на сигналы центра управления полётами.',
		ageRestriction: 18,
	},
	{
		id: 3,
		rating: 9.2,
		title: 'Несчастье',
		titleEng: 'Сurse ',
		imgFilm: pageThree,
		country: 'США',
		genre: 'драма, романтика',
		year: '2024',
		premiere: '10.03.2024',
		quality: 'Full HD',
		audioLanguage: 'Испанский',
		description:
			'Эбби — загадочная и недоступная первокурсница, желающая сбежать от своего прошлого. Трэвис — бунтарь и чемпион подпольных боёв, который не верит в любовь.',
		ageRestriction: 12,
	},
]
