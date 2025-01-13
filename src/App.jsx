import HeroSection from "./components/HeroSection";
import OtherStuff from "./components/OtherStuff";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// import LoadScroll from "./LoadScroll";
import CTA from "./components/CTA";

const App = () => {
	return (
		<>
			{/* <LoadScroll /> */}
			<Navbar />
			<OtherStuff />
			<ChatBot />
			<HeroSection />
			<CTA />
			<div className="max-w-screen-2xl mx-auto pt-20 px-6">
				<AboutSection />
			</div>
		</>
	);
};
export default App;
