import React from "react";

const del = () => {
	return (
		<div>
			<div className="size-[80px] md:size-[150px] xl:size-[150px] absolute translate-x-[507%] -translate-y-[8.55rem]">
				<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient
							id="my-linear-gradient"
							gradientTransform="rotate(51 .5 .5)"
						>
							<stop offset="0" stop-color="hsl(297, 45%, 50%)" />
							<stop offset="0.75" stop-color="hsl(297, 45%, 80%)" />
						</linearGradient>
					</defs>
					<circle fill="url(#my-linear-gradient)" r="250" cx="400" cy="400" />
				</svg>
			</div>
		</div>
	);
};

export default del;
