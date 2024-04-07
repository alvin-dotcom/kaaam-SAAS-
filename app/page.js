import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Shows from "./components/Shows/Shows";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-white">
				<Intro />
				<About />
				<Shows />
				<ContactUs />
				<PhotoGallery />
			</main>
		</>
	);
}
