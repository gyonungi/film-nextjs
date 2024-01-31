'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from './navbar.module.scss'
const links = [
	{
		id: 1,
		title: 'Главная',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M19.5187 34.1843C22.7728 34.1837 25.9332 33.0943 28.4965 31.0897L36.5559 39.149L39.1482 36.5567L31.0889 28.4973C33.0946 25.9337 34.1846 22.7726 34.1854 19.5177C34.1854 11.4308 27.6055 4.851 19.5187 4.851C11.4319 4.851 4.85205 11.4308 4.85205 19.5177C4.85205 27.6045 11.4319 34.1843 19.5187 34.1843ZM19.5187 8.51766C25.5852 8.51766 30.5187 13.4512 30.5187 19.5177C30.5187 25.5842 25.5852 30.5177 19.5187 30.5177C13.4522 30.5177 8.51872 25.5842 8.51872 19.5177C8.51872 13.4512 13.4522 8.51766 19.5187 8.51766Z'
					fill='#BABABA'
				/>
			</svg>
		),
		url: '/',
	},
	{
		id: 2,
		title: 'Портфолио',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M9.16667 40.333H34.8333C35.8058 40.333 36.7384 39.9467 37.4261 39.2591C38.1137 38.5714 38.5 37.6388 38.5 36.6663V20.1663C38.5014 19.925 38.4551 19.6859 38.3639 19.4625C38.2727 19.2391 38.1382 19.036 37.9683 18.8647L23.3017 4.19799C22.9582 3.85653 22.4935 3.66487 22.0092 3.66487C21.5248 3.66487 21.0602 3.85653 20.7167 4.19799L6.05 18.8647C5.87677 19.0345 5.73896 19.2369 5.64455 19.4604C5.55014 19.6838 5.50101 19.9238 5.5 20.1663L5.5 36.6663C5.5 37.6388 5.88631 38.5714 6.57394 39.2591C7.26157 39.9467 8.19421 40.333 9.16667 40.333ZM18.3333 36.6663V27.4997H25.6667L25.6667 36.6663H18.3333ZM9.16667 20.918L22 8.08466L34.8333 20.918V36.6663H29.3333L29.3333 27.4997C29.3333 26.5272 28.947 25.5946 28.2594 24.9069C27.5718 24.2193 26.6391 23.833 25.6667 23.833H18.3333C17.3609 23.833 16.4282 24.2193 15.7406 24.9069C15.053 25.5946 14.6667 26.5272 14.6667 27.4997V36.6663H9.16667L9.16667 20.918Z'
					fill='#BABABA'
				/>
			</svg>
		),
		url: '/portfolio',
	},
	{
		id: 3,
		title: 'Блог',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M36.6665 5.5L7.33317 5.5C5.311 5.5 3.6665 7.1445 3.6665 9.16667L3.6665 34.8333C3.6665 36.8555 5.311 38.5 7.33317 38.5H36.6665C38.6887 38.5 40.3332 36.8555 40.3332 34.8333V9.16667C40.3332 7.1445 38.6887 5.5 36.6665 5.5ZM36.6683 16.5C36.6665 16.5 36.6665 16.5 36.6683 16.5H35.8158L30.9263 9.16667H36.6665L36.6683 16.5ZM17.4825 16.5L12.593 9.16667H17.3523L22.2418 16.5H17.4825ZM26.6492 16.5L21.7597 9.16667L26.519 9.16667L31.4085 16.5H26.6492ZM7.33317 9.16667H8.18567L13.0752 16.5H7.33317L7.33317 9.16667ZM7.33317 34.8333L7.33317 20.1667H36.6665L36.6702 34.8333H7.33317Z'
					fill='#BABABA'
				/>
				<path d='M18.3332 33L28.4165 27.5L18.3332 22V33Z' fill='#BABABA' />
			</svg>
		),
		url: '/blog',
	},
	{
		id: 4,
		title: 'Обо мне',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M36.6665 5.5L7.33317 5.5C5.311 5.5 3.6665 7.1445 3.6665 9.16667L3.6665 29.3333C3.6665 31.3555 5.311 33 7.33317 33H14.6665L11.3665 37.4L14.2998 39.6L19.2498 33H24.7498L29.6998 39.6L32.6332 37.4L29.3332 33H36.6665C38.6887 33 40.3332 31.3555 40.3332 29.3333V9.16667C40.3332 7.1445 38.6887 5.5 36.6665 5.5ZM7.33317 29.3333L7.33317 9.16667L36.6665 9.16667L36.6683 29.3333L7.33317 29.3333Z'
					fill='#BABABA'
				/>
				<path d='M11 22H18.3333V25.6667H11V22Z' fill='#BABABA' />
			</svg>
		),
		url: '/about',
	},
	{
		id: 5,
		title: 'Контакты',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M21.9999 8.42417C20.0023 6.58736 17.3876 5.56793 14.6739 5.56784C13.2375 5.56934 11.8157 5.85487 10.4901 6.408C9.16453 6.96113 7.96144 7.77095 6.95005 8.79084C2.63622 13.123 2.63805 19.899 6.95372 24.2128L20.3957 37.6548C20.7074 38.203 21.3087 38.5568 21.9999 38.5568C22.2837 38.5541 22.5629 38.4848 22.815 38.3546C23.0672 38.2244 23.2853 38.0368 23.4519 37.807L37.0461 24.2128C41.3617 19.8972 41.3617 13.123 37.0424 8.78351C36.0315 7.76549 34.8294 6.95732 33.5051 6.40546C32.1808 5.8536 30.7605 5.56894 29.3259 5.56784C26.6122 5.56828 23.9977 6.58767 21.9999 8.42417ZM34.4501 11.3758C37.3155 14.256 37.3174 18.755 34.4537 21.6205L21.9999 34.0743L9.54605 21.6205C6.68238 18.755 6.68422 14.256 9.54238 11.3832C10.9357 9.99717 12.758 9.23451 14.6739 9.23451C16.5897 9.23451 18.4047 9.99717 19.7871 11.3795L20.7037 12.2962C20.8738 12.4666 21.0759 12.6018 21.2983 12.694C21.5207 12.7862 21.7591 12.8337 21.9999 12.8337C22.2407 12.8337 22.4791 12.7862 22.7015 12.694C22.9239 12.6018 23.1259 12.4666 23.296 12.2962L24.2127 11.3795C26.9847 8.61301 31.6817 8.62034 34.4501 11.3758Z'
					fill='#BABABA'
				/>
			</svg>
		),
		url: '/contact',
	},
	{
		id: 6,
		title: 'Панель управления',
		src: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
			>
				<path
					d='M22 3.66669C20.187 3.66669 18.4147 4.2043 16.9073 5.21155C15.3998 6.21879 14.2249 7.65043 13.5311 9.32542C12.8373 11.0004 12.6558 12.8435 13.0095 14.6217C13.3632 16.3998 14.2362 18.0332 15.5182 19.3152C16.8002 20.5971 18.4335 21.4702 20.2117 21.8239C21.9898 22.1776 23.8329 21.9961 25.5079 21.3022C27.1829 20.6084 28.6146 19.4335 29.6218 17.9261C30.6291 16.4186 31.1667 14.6463 31.1667 12.8334C31.1667 10.4022 30.2009 8.07062 28.4818 6.35154C26.7627 4.63246 24.4312 3.66669 22 3.66669ZM22 18.3334C20.9122 18.3334 19.8488 18.0108 18.9444 17.4064C18.0399 16.8021 17.3349 15.9431 16.9187 14.9381C16.5024 13.9331 16.3935 12.8273 16.6057 11.7604C16.8179 10.6935 17.3417 9.71346 18.1109 8.94427C18.8801 8.17508 19.8601 7.65125 20.927 7.43903C21.9939 7.22682 23.0998 7.33573 24.1048 7.75202C25.1098 8.1683 25.9687 8.87325 26.5731 9.77772C27.1774 10.6822 27.5 11.7456 27.5 12.8334C27.5 14.292 26.9205 15.691 25.8891 16.7224C24.8576 17.7539 23.4587 18.3334 22 18.3334ZM38.5 38.5V36.6667C38.5 33.2631 37.1479 29.9989 34.7412 27.5921C32.3345 25.1854 29.0703 23.8334 25.6667 23.8334H18.3333C14.9297 23.8334 11.6655 25.1854 9.2588 27.5921C6.85208 29.9989 5.5 33.2631 5.5 36.6667V38.5H9.16667V36.6667C9.16667 34.2355 10.1324 31.904 11.8515 30.1849C13.5706 28.4658 15.9022 27.5 18.3333 27.5H25.6667C28.0978 27.5 30.4294 28.4658 32.1485 30.1849C33.8676 31.904 34.8333 34.2355 34.8333 36.6667V38.5H38.5Z'
					fill='#BABABA'
				/>
			</svg>
		),
		url: '/dashboard',
	},
]
const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop
		setIsVisible(scrolled > 300)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])
	return (
		<nav className={styled.sidebar}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='144'
				height='50'
				viewBox='0 0 144 50'
				fill='none'
				className={styled.sidebar__logo}
			>
				<path d='M32 14L32 36L0 50L2.18557e-06 0L32 14Z' fill='white' />
				<path d='M24 4.5V9.59375L16 6.0625V1.39876e-06L24 4.5Z' fill='white' />
				<path d='M32 9V13.125L25 10.0352V5.0625L32 9Z' fill='white' />
			</svg>
			<div className={styled.links}>
				{links.map(link => (
					<Link key={link.id} href={link.url}>
						<p className={styled.links__p}>{link.src}</p>
					</Link>
				))}
				{isVisible && (
					<button onClick={scrollToTop} className={styled.link__arrow}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='44'
							height='44'
							viewBox='0 0 44 44'
							fill='none'
						>
							<path
								d='M20.1664 15.4257V33H23.8331V15.4257L31.7036 23.2962L34.2959 20.7038L21.9998 8.40765L9.70361 20.7038L12.2959 23.2962L20.1664 15.4257Z'
								fill='#BABABA'
							/>
						</svg>
					</button>
				)}
			</div>
		</nav>
	)
}

export default NavBar
