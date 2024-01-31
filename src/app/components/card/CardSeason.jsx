import Image from 'next/image'
import styled from './card.module.scss'
import serImg from '/public/Seria.jpg'
const CardSeason = () => {
	return (
		<div className={styled.cardSeason}>
			<Image src={serImg} width={544} height={306} alt='card' />
			<p>1 серия</p>
			<span>43 минуты</span>
		</div>
	)
}

export default CardSeason
