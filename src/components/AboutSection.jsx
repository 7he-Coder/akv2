import { TiMinus } from "react-icons/ti";
import { RxArrowTopRight } from "react-icons/rx";
import aboutBg from "../assets/images/About1.png";

const AboutSection = () => {
	return (
		<section
			className="about w-full h-screen w-xl place-items-center"
			id="about"
		>
			<h2 className="text-PrimaryPara my-10 inline-flex items-center font-ff-1 capitalize drop-shadow-sm py-4">
				<div className="absolute bottom-1 -left-8 -z-20">
					<svg
						className="size-[80px] md:size-[90px] xl:size-[100px]"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="100"
						height="100"
						viewBox="0 0 100 100"
					>
						<defs>
							<linearGradient
								id="linear-gradient"
								x1="0.033"
								y1="0.137"
								x2="0.873"
								y2="0.834"
								gradientUnits="objectBoundingBox"
							>
								<stop offset="0" stop-color="#fff" />
								<stop offset="0.038" stop-color="#fefefe" />
								<stop offset="1" stop-color="gray" stop-opacity="0.831" />
								<stop offset="1" />
							</linearGradient>
						</defs>
						<circle
							id="Ellipse_1"
							data-name="Ellipse 1"
							cx="50"
							cy="50"
							r="50"
							fill="url(#linear-gradient)"
						/>
					</svg>
				</div>
				<div className="flex items-center">
					<TiMinus /> <span className="ml-[.15px]">About</span>
				</div>
			</h2>

			<div className="innerContainer grid gap-12 grid-cols-1 md:grid-cols-2 justify-between">
				<div className="aboutImage">
					<img src={aboutBg} width={600} loading="lazy" alt="about image" />
				</div>

				<div className="aboutContent md:text-right">
					<div className="[&_h4]:text-xl md:[&_h4]:text-2xl 2xl:[&_h4]:text-3xl [&_h4]:mb-1">
						<h4>Abhay Kumar</h4>
						<div className="[&_p]:text-lg md:[&_p]:text-xl 2xl:[&_p]:text-2xl leading-snug">
							<p>+91 7379289932</p>
							<p>aabhaykumar469@gmail.com</p>
						</div>
					</div>
					<div className="text-left py-16 *:py-4">
						<p className="text-2xl md:text-4xl ">
							Hi, My name is Abhay kumar. We build responsive websites,
							intuitive mobile apps, and e-commerce solutions that help
							businesses grow. With a focus on quality, innovation, and customer
							satisfaction, we deliver tailored solutions that meet your unique
							needs. Let's turn your ideas into reality. Get in touch today!
						</p>
						<small>Know more about us download the resume given below.</small>
						<div className="mt-4">
							<div className="bg-Gradient-1 max-w-min p-4 rounded-full text-4xl">
								<a
									href="https://drive.google.com/file/d/1oE3QJnmjSJSVdB9wOAu6wu3m24IcfC1O/view?usp=drive_link"
									target="_blank"
								>
									<RxArrowTopRight />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
