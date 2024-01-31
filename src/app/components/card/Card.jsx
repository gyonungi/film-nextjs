import Image from 'next/image'
import styled from './card.module.scss'
const Card = ({ rating, imgFilm, title }) => {
	return (
		<div className={styled.card}>
			<p className={styled.card__text}>{rating}</p>
			<Image src={imgFilm} width={398} height={597} alt={title} />
		</div>
	)
}

export default Card
