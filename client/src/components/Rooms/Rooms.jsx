import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Rooms.module.scss';

const rooms = [
	{
		name: 'The Rose Suite',
		description:
			'Our most luxurious suite featuring a king-size bed, private balcony overlooking the gardens, and a spacious en-suite bathroom with a clawfoot tub.',
		price: 245,
		image:
			'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
	},
	{
		name: 'The Lavender Room',
		description:
			'A charming room with a queen-size bed, garden views, and vintage furnishings. Perfect for a romantic getaway.',
		price: 195,
		image:
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
	},
	{
		name: 'The Magnolia Suite',
		description:
			'Spacious suite with a four-poster queen bed, sitting area, and French doors leading to a private garden patio.',
		price: 225,
		image:
			'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80',
	},
];

const Rooms = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div id="rooms" className={styles.roomsSection}>
			<div className={styles.container}>
				<h2 className={styles.title}>Our Rooms</h2>
				<div className={styles.carouselWrapper}>
					<div className={styles.carousel}>
						{rooms.map((room, index) => (
							<div
								key={index}
								className={styles.slide}
								style={{
									left: `${index * 100}%`,
									transform: `translateX(-${currentIndex * 100}%)`,
								}}
							>
								<img
									src={room.image}
									alt={room.name}
									className={styles.roomImage}
								/>
								<div className={styles.overlay}></div>
								<div className={styles.slideContent}>
									<h3 className={styles.roomName}>{room.name}</h3>
									<p className={styles.roomDesc}>{room.description}</p>
									<div className={styles.roomFooter}>
										<span className={styles.roomPrice}>
											${room.price} / night
										</span>
										<button className={styles.bookButton}>Book Now</button>
									</div>
								</div>
							</div>
						))}
						<button onClick={prevSlide} className={styles.arrowLeft}>
							<ChevronLeft size={24} />
						</button>
						<button onClick={nextSlide} className={styles.arrowRight}>
							<ChevronRight size={24} />
						</button>
					</div>
					<div className={styles.thumbnails}>
						{rooms.map((room, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={
									index === currentIndex
										? styles.thumbnailActive
										: styles.thumbnail
								}
							>
								<img
									src={room.image}
									alt={room.name}
									className={styles.thumbnailImage}
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rooms;
