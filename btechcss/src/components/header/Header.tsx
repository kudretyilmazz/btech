// Import Components
import Logo from "./_partials/Logo";
import Navbar from "./_partials/Navbar";

function Header() {
	return (
		<header className="max-w-[1440px] h-24 flex justify-between items-center px-4 md:px-20 shrink-0">
			<Logo heading="Collers" />
			<Navbar />
		</header>
	);
}

export default Header;
