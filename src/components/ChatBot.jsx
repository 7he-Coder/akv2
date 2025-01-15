import { FaRocketchat } from "react-icons/fa";
import ChateBot from "../assets/images/3d-Img/D-5.png";

const ChatBot = () => {
	return (
		<>
			<div className="chatBot fixed bottom-32 md:bottom-24 right-2 md:right-5 z-[999999]">
				<div className="bg-PrimaryColor drop-shadow-2xl rounded-full p-2 md:p-3 xl:p-4">
					<div className="size-full relative">
						<span className="text-SecondaryPara *:text-PrimaryPara">
							<a href="#">
								<FaRocketchat />
							</a>
						</span>
					</div>
					<span className="absolute -top-8">
						<img src={ChateBot} alt="chat bot" />
					</span>
				</div>
			</div>

			<div className="chatBot fixed bottom-56 md:bottom-52 right-2 md:right-5 z-[999999]">
				<div className="bg-red-700 drop-shadow-2xl rounded-sm p-3 md:p-4 xl:p-5 *:text-xl *:capitalize *:font-ff-2 *:first-letter:text-5xl">
					<h6>Site is under maintenance.</h6>
				</div>
			</div>
		</>
	);
};

export default ChatBot;
