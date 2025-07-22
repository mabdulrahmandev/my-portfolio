"use client";

import { useState } from "react";
import { content } from "../data/content";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div id="faq" className="bg-black text-white py-12">
			<div className="mx-4 sm:mx-16 md:mx-48">
				<h2 className="text-4xl font-bold mb-12 font-sans text-center">Your Queries — Our Answers</h2>
				<div className="space-y-4">
					{content.faqData?.map((faq, index) => (
						<div key={index} className="text-white py-4 border-b border-white">
							<div
								className="flex justify-between items-center cursor-pointer"
								onClick={() => handleToggle(index)}
							>
								<h3 className="text-lg sm:text-xl md:text-2xl font-bold font-poppins">{faq.question}</h3>
								<svg
									className={`w-6 h-6 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
							{openIndex === index && (
								<p className="mt-3 text-sm sm:text-base font-normal font-poppins w-full sm:w-[80%] md:w-[95%]">{faq.answer}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
