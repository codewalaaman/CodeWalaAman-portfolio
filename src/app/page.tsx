import Image from "next/image";
import WorkExp from "./components/work-exp";
import Portfolio from "./components/portfolio";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import { constant } from "./data";

export default function Home() {
	return (
		<div className="max-w-screen-lg mx-auto flex flex-col gap-12 md:gap-16">
			<Header name={constant.name} title={constant.current_position} />
			{/* About Section */}
			<section>
				<About />
			</section>
			{/* About Section */}
			{/* Exp Section */}
			<section>
				<WorkExp exp={constant.experiences} />
			</section>
			{/* Exp Section */}
			{/* Portfolio Section */}
			<section>
				<Portfolio projects={constant.projects} />
			</section>
			{/* Portfolio Section */}
			{/* footer Section */}
			<Footer social={constant.social_links} />
			{/* footer Section */}
		</div>
	);
}
