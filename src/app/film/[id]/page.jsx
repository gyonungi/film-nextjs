'use client'
import CardSeason from '@/app/components/card/CardSeason'
import CardSimilar from '@/app/components/card/CardSimilar'
import Image from 'next/image'

import { dataFilms } from '@/app/assets/data'
import { useParams } from 'next/navigation'
import styles from './page.module.scss'
const categories = [1, 2, 3]

const FilmId = () => {
	const params = useParams()

	const film = dataFilms.find(f => f.id === parseInt(params.id))
	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<div className={styles.heda}>
					<h1 className={styles.heda__title}>Уэндсей</h1>
					<div className={styles.film__heda}>
						<p className={styles.film__header__raiting}>{film.rating}</p>
						<p className={styles.film__header__text}>{film.year}-</p>
						<p className={styles.film__header__text}>1 сезон</p>
						<p className={styles.film__header__text}>{film.country}</p>
						<p className={styles.film__header__text}>{film.genre}</p>
						<p className={styles.film__header__text}>{film.ageRestriction}+</p>
					</div>
					<div>
						<p className={styles.header__text}>{film.description}</p>
					</div>
					<div className={styles.Btn}>
						<button className={styles.Btn__watch}>Смотреть</button>
						<button className={styles.Btn__about}> Трейлер</button>
						<button className={styles.Btn__icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
							>
								<path
									d='M23.9999 2.66666H7.99992C6.52925 2.66666 5.33325 3.86266 5.33325 5.33332V29.3333L15.9999 23.2373L26.6666 29.3333V5.33332C26.6666 3.86266 25.4706 2.66666 23.9999 2.66666ZM23.9999 24.7373L15.9999 20.1667L7.99992 24.7373V5.33332H23.9999V24.7373Z'
									fill='white'
								/>
							</svg>
						</button>
						<button className={styles.Btn__icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
							>
								<path
									d='M15.9999 6.12668C14.5471 4.79082 12.6455 4.04941 10.6719 4.04935C9.62728 4.05043 8.59319 4.25809 7.62914 4.66037C6.66509 5.06265 5.79011 5.65161 5.05456 6.39335C1.91723 9.54401 1.91856 14.472 5.05723 17.6093L14.8332 27.3853C15.0599 27.784 15.4972 28.0413 15.9999 28.0413C16.2063 28.0393 16.4093 27.989 16.5927 27.8943C16.7761 27.7995 16.9348 27.6631 17.0559 27.496L26.9426 17.6093C30.0812 14.4707 30.0812 9.54401 26.9399 6.38801C26.2047 5.64764 25.3304 5.05988 24.3673 4.65852C23.4042 4.25717 22.3713 4.05015 21.3279 4.04935C19.3543 4.04967 17.4528 4.79104 15.9999 6.12668ZM25.0546 8.27335C27.1386 10.368 27.1399 13.64 25.0572 15.724L15.9999 24.7813L6.94256 15.724C4.85989 13.64 4.86123 10.368 6.93989 8.27868C7.95323 7.27068 9.27856 6.71601 10.6719 6.71601C12.0652 6.71601 13.3852 7.27068 14.3906 8.27601L15.0572 8.94268C15.1809 9.06661 15.3279 9.16492 15.4896 9.23201C15.6514 9.29909 15.8248 9.33361 15.9999 9.33361C16.175 9.33361 16.3484 9.29909 16.5102 9.23201C16.6719 9.16492 16.8188 9.06661 16.9426 8.94268L17.6092 8.27601C19.6252 6.26401 23.0412 6.26935 25.0546 8.27335Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
				</div>
				<Image
					src={film.imgFilm}
					width={1400}
					height={780}
					alt='Picture of the author'
				/>
			</div>
			<div className={styles.film__season}>
				<h1 className={styles.film__title}>Сезоны</h1>
				<ul>
					{categories.map((item, i) => (
						<li key={i} onClick={() => i}>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className={styles.film__season_card}>
				<CardSeason />
			</div>
			<h1 className={styles.film__title}>Описание</h1>
			<div className={styles.film__descrip}>
				<p className={styles.film__descrip__whiteText}>{film.description}</p>
				<div className={styles.film__descrip__icon}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='48'
						height='48'
						viewBox='0 0 48 48'
						fill='none'
					>
						<path
							d='M23.8093 44C26.4153 44.0034 28.9962 43.4876 31.4038 42.4823C33.8114 41.477 35.9982 40.002 37.8385 38.142C39.6836 36.2869 41.1469 34.0826 42.1442 31.6556C43.1415 29.2287 43.6532 26.627 43.6498 24C43.6531 21.3731 43.1414 18.7714 42.1441 16.3444C41.1468 13.9175 39.6836 11.7131 37.8385 9.85802C35.9982 7.99804 33.8114 6.52302 31.4038 5.5177C28.9962 4.51239 26.4153 3.99661 23.8093 4.00002C21.2033 3.99667 18.6224 4.51247 16.2148 5.51778C13.8072 6.52309 11.6204 7.99809 9.78005 9.85802C7.93496 11.7131 6.47172 13.9175 5.47443 16.3444C4.47713 18.7714 3.96544 21.3731 3.96877 24C3.96539 26.627 4.47705 29.2287 5.47435 31.6556C6.47165 34.0826 7.93491 36.2869 9.78005 38.142C11.6204 40.0019 13.8072 41.4769 16.2148 42.4823C18.6224 43.4876 21.2033 44.0034 23.8093 44Z'
							stroke='#4B4B4B'
							strokeWidth='4'
							strokeLinejoin='round'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M23.8082 37C24.4659 37 25.0968 36.7366 25.5619 36.2678C26.027 35.7989 26.2883 35.163 26.2883 34.5C26.2883 33.837 26.027 33.2011 25.5619 32.7322C25.0968 32.2634 24.4659 32 23.8082 32C23.1504 32 22.5196 32.2634 22.0545 32.7322C21.5894 33.2011 21.3281 33.837 21.3281 34.5C21.3281 35.163 21.5894 35.7989 22.0545 36.2678C22.5196 36.7366 23.1504 37 23.8082 37Z'
							fill='#4B4B4B'
						/>
						<path
							d='M23.8086 12V28'
							stroke='#4B4B4B'
							strokeWidth='4'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<p className={styles.film__descrip__blackText}>
						Контент может содержать сцены курения и употребления спиртных
						напитков. Курение и чрезмерное употребление алкоголя вредит вашему
						здоровью.
					</p>
				</div>
			</div>
			<h1 className={styles.film__title}>Похожее</h1>
			<div className={styles.film__similar}>
				<CardSimilar />
				<CardSimilar />
				<CardSimilar />
				<CardSimilar />
				<CardSimilar />
			</div>
			<h1 className={styles.film__title}> Информация</h1>
			<footer className={styles.film__footer}>
				<div className={styles.film__footer__item}>
					<div>
						<p className={styles.film__footer__item__blackText}>
							Премьера в мире
						</p>
						<p className={styles.film__footer__item__whiteText}>
							{film.premiere}
						</p>

						<p className={styles.film__footer__item__blackText}>
							Оригинальное название
						</p>
						<p className={styles.film__footer__item__whiteText}>
							{film.titleEng}
						</p>
					</div>
					<div>
						<p className={styles.film__footer__item__blackText}>Страна</p>
						<p className={styles.film__footer__item__whiteText}>
							{film.country}
						</p>
						<p className={styles.film__footer__item__blackText}>Жанры</p>
						<p className={styles.film__footer__item__whiteText}>{film.genre}</p>
					</div>
					<div>
						<p className={styles.film__footer__item__blackText}>
							Язык аудиодорожки
						</p>
						<p className={styles.film__footer__item__whiteText}>
							{film.audioLanguage}
						</p>
						<p className={styles.film__footer__item__blackText}>Качество</p>
						<p className={styles.film__footer__item__whiteText}>
							{film.quality}
						</p>
					</div>
				</div>
			</footer>
		</main>
	)
}

export default FilmId
