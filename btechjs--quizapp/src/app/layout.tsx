// Import Next
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Import Components
import Header from "@/components/header/Header";

// Import Global Style
import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body className={`${inter.className} h-full flex flex-col`}>
				<Header />
				<main className="flex-1 bg-blue-400">{children}</main>
			</body>
		</html>
	);
}