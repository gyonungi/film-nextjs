import Image from 'next/image'
import styled from './card.module.scss'
import carImg from '/public/card.png'
const CardSimilar = () => {
	return (
		<div className={styled.cardSimilar}>
			<p>9.1</p>
			<Image src={carImg} width={255} height={382} alt='cards' />
		</div>
	)
}

export default CardSimilar
