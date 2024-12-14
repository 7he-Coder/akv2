import { TiMinus } from "react-icons/ti";

const About = () => {
	return (
		<>
			<section
				className="about w-full h-screen bg-eerie-black place-items-center"
				id="about"
			>
				<h2 className="text-PrimaryPara inline-flex items-center font-ff-1 capitalize drop-shadow-sm py-4">
					<TiMinus /> <span className="ml-1">About section</span>
				</h2>
			</section>
		</>
	);
};

export default About;
