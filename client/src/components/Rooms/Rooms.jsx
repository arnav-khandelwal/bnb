import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Rooms.module.scss';

const roomImages = [
	{ name: 'Room', src: '/room/room.jpeg' },
	{ name: 'Washroom', src: '/room/washroom.jpeg' },
	{ name: 'Study', src: '/room/study.jpeg' },
	{ name: 'Kitchen', src: '/room/kitchen.jpeg' },
];

const room = {
	name: 'A Room Inside Cottage',
	description:
		'A peaceful, private room inside the cottage with access to a washroom, study, and kitchen. Perfect for a tranquil stay surrounded by nature.',
};

const Rooms = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === roomImages.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? roomImages.length - 1 : prevIndex - 1
		);
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div id="rooms" className={styles.roomsSection}>
			<div className={styles.container}>
				<h2 className={styles.title}>{room.name}</h2>
				<div className={styles.carouselWrapper}>
					<div className={styles.carousel}>
						<div
							className={styles.slide}
							style={{ left: 0, transform: 'translateX(0)' }}
						>
							<img
								src={roomImages[currentIndex].src}
								alt={roomImages[currentIndex].name}
								className={styles.roomImage}
							/>
							<div className={styles.overlay}></div>
							<div className={styles.slideContent}>
								<h3 className={styles.roomName}>
									{roomImages[currentIndex].name}
								</h3>
								<p className={styles.roomDesc}>{room.description}</p>
								<div className={styles.roomFooter}>
								</div>
							</div>
						</div>
						<button onClick={prevSlide} className={styles.arrowLeft}>
							<ChevronLeft size={24} />
						</button>
						<button onClick={nextSlide} className={styles.arrowRight}>
							<ChevronRight size={24} />
						</button>
					</div>
					<div className={styles.thumbnails}>
						{roomImages.map((img, index) => (
							<button
								key={img.name}
								onClick={() => goToSlide(index)}
								className={
									index === currentIndex
										? styles.thumbnailActive
										: styles.thumbnail
								}
							>
								<img
									src={img.src}
									alt={img.name}
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
