// Import Next
import Link from "next/link";
import Image from "next/image";

// Import Components
import Youtube from "@/components/icons/Youtube";
import Facebook from "@/components/icons/Facebook";
import Twitter from "@/components/icons/Twitter";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";

// Import Assets
import AppleStoreButton from "@/assets/images/appstore-button.svg";
import GooglePlayButton from "@/assets/images/googleplay-button.svg";

function FooterSocialList() {
	return (
		<div className="flex-1 flex flex-col items-center md:items-baseline">
			<h6 className="text-slate-200 h-[46px] py-4 font-medium mb-2">Get the App</h6>
			<div className="flex-1 flex flex-col gap-y-3">
				<Image src={AppleStoreButton} alt="get app on app store" className="mx-auto md:mx-0" />
				<Image src={GooglePlayButton} alt="get app on play store" />
			</div>
			<div className="mt-16 md:mt-auto">
				<p className="text-lg text-slate-200 font-thin md:font-normal text-center md:text-left mb-4">
					Follow Us
				</p>
				<div className="flex gap-x-4">
					<Link href="#">
						<Youtube className="fill-slate-200" />
					</Link>
					<Link href="#">
						<Facebook className="fill-slate-200" />
					</Link>
					<Link href="#">
						<Twitter className="fill-slate-200" />
					</Link>
					<Link href="#">
						<Instagram className="fill-slate-200" />
					</Link>
					<Link href="#">
						<Linkedin className="fill-slate-200" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FooterSocialList;
