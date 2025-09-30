import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Date-fns Clock Widget",
	description:
		"A digital clock widget built with date-fns for accurate time display",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center"></section>
		</>
	);
};

export default page;
