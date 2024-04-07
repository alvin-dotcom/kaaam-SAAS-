import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
	title: "kaam",
	description: "kaam",
	verification: {
		google: "ephPAYWfbfSOHHWnGeqEHiOPuxTXr300eIzTmT2oJcY",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-poppins font-rendering text-2xl xl:text-3xl">
				{children}
				<Footer />
			</body>
		</html>
	);
}
