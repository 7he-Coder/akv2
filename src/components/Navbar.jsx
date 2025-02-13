import { FaGithub } from "react-icons/fa";
import { navItems } from "../constant";

const Navbar = () => {
	return (
		<>
			<div className="absolute inset-0 z-[99999]">
				<svg
					className="size-[200px] md:size-[300px] xl:size-[400px]"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient
							id="my-linear-gradient"
							gradientTransform="rotate(45 .5 .5)"
						>
							<stop offset="0" stop-color="hsl(256, 64%, 37%)" />
							<stop offset="1" stop-color="hsl(256, 43%, 78%)" />
						</linearGradient>
					</defs>
					<circle fill="url(#my-linear-gradient)" r="350" cx="150" cy="200" />
				</svg>
			</div>
			<nav className="sticky top-0 z-[9999999] py-1 2xl:py-3 bg-transparent">
				<div className="container mx-auto relative px-4">
					<div className="md:flex items-center justify-between mt-2 *:rounded-full *:backdrop-blur-sm">
						<div className="flex items-center justify-between border border-jet-1 *:text-PrimaryPara *:font-ff-5 *:tracking-tight py-1 px-8">
							<a href="#">
								<h6>Abhay Kumar</h6>
							</a>
							<span className="md:hidden">
								<FaGithub />
							</span>
						</div>

						<ul className="hidden md:flex items-center justify-center border border-jet-1 *:py-[.69rem] [&_li]:px-7 xl:[&_li]:px-8 [&_a]:text-PrimaryPara [&_a]:uppercase">
							{navItems.map((item, index) => (
								<li key={index}>
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
					</div>

					{/* mobile menu */}
					<ul className="w-full fixed md:hidden bottom-0 left-0 flex items-center justify-center bg-PrimaryColor border border-jet-1 backdrop-blur-sm *:py-[.69rem] max-[320px]:[&_li]:px-2 max-[320px]:[&_li]:mx-1 max-[390px]:[&_li]:px-[16px] max-[428px]:[&_li]:px-5 min-[429px]:[&_li]:px-6 *:rounded-lg [&_a]:text-PrimaryPara [&_a]:uppercase">
						{navItems.map((item, index) => (
							<li key={index}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
