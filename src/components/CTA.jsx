import cta from "../assets/images/cta.png";
import { FaStar } from "react-icons/fa";

const CTA = () => {
	return (
		<>
			<section className="container mx-auto px-4 md:px-16">
				<div className="CtaBar w-full border-y-2 border-eerie-black">
					<div className="lg:flex items-center justify-between py-6">
						{/* leftside */}
						<div className="md:grid grid-cols-5 items-center">
							<div className="w-full">
								<img src={cta} alt="cta image" />
							</div>
							<div className="mt-4 sm:mt-4 md:mt-0 md:ml-8 col-span-4 *:text-balance leading-none md:leading-[1.125] text-PrimaryPara font-ff-2 font-bold text-right lg:text-left">
								<h6 className="*:text-radical-blue">
									I'm A Professional <span>Web Developer</span> And{" "}
									<span>Designer</span> Based In Uttar Pradesh INDIA
								</h6>
							</div>
						</div>

						{/* right side  */}
						<div className="block md:flex gap-8 *:place-items-center mt-10 lg:mt-0">
							<div className="box1 w-56 h-32 my-10 md:my-0 md:mt-2 pl-6 py-3 bg-purple-700 border-2 rounded-2xl">
								<div className="innerBox w-56 h-32 bg-Gradient-1 drop-shadow-2xl shadow-black rounded-2xl">
									<h6 className="grid gap-1 py-1">
										<FaStar className="text-2xl text-left ml-2 mt-1" />
										<strong className="text-5xl tracking-tighter text-center">
											1.5 year+
										</strong>
										<p className="text-2xl capitalize text-center">
											experience
										</p>
									</h6>
								</div>
							</div>
							<div className="box3 w-56 h-32 my-4 md:mt-2 md:ml-6 pl-6 py-3 bg-purple-700 border-2 rounded-2xl">
								<div className="innerBox2 w-56 h-32 bg-Gradient-1 drop-shadow-2xl shadow-black rounded-2xl">
									<h6 className="grid gap-1 py-1">
										<FaStar className="text-2xl text-left ml-2 mt-1" />
										<strong className="text-5xl text-center">10K+</strong>
										<p className="text-2xl capitalize text-center">
											happy clients
										</p>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
