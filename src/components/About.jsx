import { TiMinus } from "react-icons/ti";
import about from "../assets/images/About.png";

const About = () => {
	return (
		<>
			<section
				className="about size-full w-xl bg-eerie-black place-items-center"
				id="about"
			>
				<h2 className="text-PrimaryPara inline-flex items-center font-ff-1 capitalize drop-shadow-sm py-4">
					<TiMinus /> <span className="ml-1">About section</span>
				</h2>

				<div className="innerContainer grid grid-cols-1 md:grid-cols-2 justify-between">
					<div className="aboutImage">
						<img src={about} alt="about image" />
					</div>
					<div className="aboutContent text-right">Abhay Kumar</div>
				</div>
			</section>
		</>
	);
};

export default About;
