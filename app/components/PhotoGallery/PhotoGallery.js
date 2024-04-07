"use client";

import { useState, useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
	{
		id: 1,
		src: "/gallery/thumbnails/thumbnail-1.jpg",
		club: "Review 1",
		slides: [{ src: "/gallery/slider-images/slider-1.jpg" }, { src: "/gallery/slider-images/slider-2.jpg" }, { src: "/gallery/slider-images/slider-3.jpg" }],
	},
	{
		id: 2,
		src: "/gallery/thumbnails/thumbnail-2.jpg",
		club: "Review 2",
		slides: [{ src: "/gallery/slider-images/slider-4.jpg" }, { src: "/gallery/slider-images/slider-5.jpg" }, { src: "/gallery/slider-images/slider-6.jpg" }],
	},
	{
		id: 3,
		src: "/gallery/thumbnails/thumbnail-3.jpg",
		club: "Review 3",
		slides: [{ src: "/gallery/slider-images/slider-7.jpg" }, { src: "/gallery/slider-images/slider-8.jpg" }, { src: "/gallery/slider-images/slider-9.jpg" }],
	},
	{
		id: 4,
		src: "/gallery/thumbnails/thumbnail-4.jpg",
		club: "Review 4",
		slides: [{ src: "/gallery/slider-images/slider-10.jpg" }, { src: "/gallery/slider-images/slider-11.jpg" }, { src: "/gallery/slider-images/slider-12.jpg" }],
	},
	{
		id: 5,
		src: "/gallery/thumbnails/thumbnail-5.jpg",
		club: "Review 5",
		slides: [{ src: "/gallery/slider-images/slider-13.jpg" }, { src: "/gallery/slider-images/slider-14.jpg" }, { src: "/gallery/slider-images/slider-15.jpg" }],
	},
	{
		id: 6,
		src: "/gallery/thumbnails/thumbnail-6.jpg",
		club: "Review 6",
		slides: [{ src: "/gallery/slider-images/slider-16.jpg" }, { src: "/gallery/slider-images/slider-17.jpg" }, { src: "/gallery/slider-images/slider-18.jpg" }],
	},
];

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.2,
};

export default function PhotoGallery() {
	const [openGallery, setOpenGallery] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	const clickHandler = (index) => {
		setOpenGallery(true);
		setGalleryIndex(index);
	};

	return (
		<section id="photo-gallery" className={`w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem] reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container>
				<h2 className="font-bold text-6xl pb-6">Reviews</h2>
				<p>What our customers say</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
					{galleryThumbnails.map((item, index) => {
						return (
							<div className="flex flex-col mb-5 leading-none" key={item.id}>
								<div className="w-full h-full rounded-lg bg-fluo-green transition-all">
									<Image className="rounded-lg cursor-pointer hover:opacity-60 transition-all" src={item.src} width={400} height={400} alt="Gallery gig thumbnail" onClick={() => clickHandler(index)} />
								</div>
								<h5 className="text-sm md:text-lg xl:text-xl font-medium">{item.club}</h5>
							</div>
						);
					})}
					<Lightbox open={openGallery} close={() => setOpenGallery(false)} slides={galleryThumbnails[galleryIndex].slides} />
				</div>
			</Container>
		</section>
	);
}
