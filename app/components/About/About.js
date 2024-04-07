"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function About() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="about" className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
					<h2 className="font-bold text-6xl pb-6">About Us</h2>
					<p>
					<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
					Welcome to our platform!
						</a>{" "}
					 We're a dedicated team passionate about assisting college students by providing tailored note-taking and assignment services. {" "}
					
					</p>
					<p className="pt-8">
					<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
					With our expertise,
						</a>{" "}
						 we aim to support academic success, enabling students to excel in their studies effortlessly.{" "}
					</p>
				</div>
			</Container>
			<Image className="mt-5 lg:hidden" src="/about-mobile.jpg" width={1000} height={486} alt="Holding guitar" />
			<Image className="hidden lg:max-w-lg lg:block xl:max-w-xl" src="/about.jpg" width={750} height={533} alt="Holding guitar" />
		</section>
	);
}
