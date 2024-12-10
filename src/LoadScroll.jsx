import img_One from "../src/assets/loading.svg";
import img_Two from "../src/assets/loading-circle.svg";

const LoadScroll = () => {
	return (
		<>
			{/* <link rel="preload" as="image" href="./src/assets/loading.svg" />
			<link rel="preload" as="image" href="./src/assets/loading-circle.svg" /> */}

			<div className="loading" data-loading>
				<img
					className="img"
					src={img_One}
					width="55"
					height="55"
					alt="loading"
				/>
				<img
					className="circle"
					src={img_Two}
					width="70"
					height="70"
					alt="circle"
				/>
			</div>

			<a
				href="#top"
				className="back-top-btn"
				aria-label="back to top"
				data-back-top-btn
			>
				0%
			</a>

			<div className="cursor" data-cursor></div>
		</>
	);
};

export default LoadScroll;
