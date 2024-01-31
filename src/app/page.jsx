'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { dataFilms } from './assets/data'
import Card from './components/card/Card'
import styles from './page.module.scss'
import car2 from '/public/card2.png'
import bcImg from '/public/image 3.jpg'
import frImg from '/public/image 4.png'
export default function Home() {
	const [data, setData] = useState(dataFilms)

	return (
		<main className={styles.container}>
			<div className={styles.header}>
				<div className={styles.heda}>
					<Image
						src={frImg}
						width={576}
						height={228}
						objectFit='cover'
						quality={100}
						alt='Picture of the author'
					/>
					<p className={styles.header__text}>
						Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему
						в седле.
					</p>
					<div className={styles.Btn}>
						<button className={styles.Btn__watch}>Смотреть</button>
						<button className={styles.Btn__about}>О фильме</button>
					</div>
				</div>
				<Image
					src={bcImg}
					width={1250}
					height={800}
					alt='Picture of the author'
				/>
			</div>

			<h2 className={styles.card__h1}>Новинки</h2>
			<div className={styles.main__card}>
				{data.map(item => (
					<Link href={`film/${item.id}`} key={item._id}>
						<Card {...item} />
					</Link>
				))}
			</div>
			<div className={styles.foot}>
				<h1 className={styles.pageh2}>ТОП-10</h1>
				<h2 className={styles.card__h1}>просмотров за неделю</h2>
			</div>
			<div className={styles.foot_card}>
				<div className={styles.foot_card_item}>
					<p className={styles.foot_card_p}>1</p>
					<Image src={car2} width={398} height={597} />
				</div>
				<div className={styles.foot_card_item}>
					<p className={styles.foot_card_p}>1</p>
					<Image src={car2} width={398} height={597} />
				</div>
			</div>
		</main>
	)
}
