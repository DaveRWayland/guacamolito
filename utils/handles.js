export const handleNextStep = (step) => {
	const nextStep = document.querySelector(`.p-tabview-nav-content > ul > li:nth-child(${step}) > a`);
	nextStep?.click();
	nextStep?.scrollIntoView({ behavior: "smooth" });
};
