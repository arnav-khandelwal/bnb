import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Rooms.module.scss';

const rooms = [
	{
		name: 'Garden View Room',
		description:
			'Wake up to the sights and sounds of Kerala’s lush gardens. This cozy room features local decor, a queen bed, and a private balcony overlooking the greenery.',
		price: 180,
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
	},
	{
		name: 'Homestead Suite',
		description:
			'Spacious suite with traditional Kerala furnishings, a king bed, and a sitting area. Enjoy direct access to our tropical garden and a peaceful reading nook.',
		price: 220,
		image:
			'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80',
	},
	{
		name: 'Treehouse Retreat',
		description:
			'Experience Kerala’s nature from above in our unique treehouse room. Perfect for couples, with panoramic views of the surrounding greenery and birdsong.',
		price: 250,
		image:
			'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80',
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
