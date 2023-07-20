// Import Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Import Font
import { Roboto } from "next/font/google";
const roboto = Roboto({
	weight: ["300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

// Import Style
import "./globals.css";

export const metadata = {
	title: "Collers",
	description: "Collectible Sneakers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`${roboto.className} h-full max-w-full flex flex-col bg-gradient-to-b from-amber-50 to-white bg-no-repeat bg-fixed`}
			>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
