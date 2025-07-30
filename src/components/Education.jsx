import React from "react";

const Education = () => {
	const education = [
		{
			degree: "Bachelor of Science in Computer Engineering and Mathematics",
			school: "Union College",
			year: "Sep 2024 - Jun 2028",
			description: "GPA.",
			gpa: "3.8/4.0",
		},
	];

	return (
		<section id="education" className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
				</div>

				{/* Education Timeline */}
				<div className="mb-16">
					<div className="space-y-8 flex flex-col items-center">
						{education.map((edu, index) => (
							<div key={index} className="bg-gray-50 p-6 rounded-lg max-w-5xl">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<div>
										<h4 className="text-xl font-semibold text-blue-600">
											{edu.school}
										</h4>
										<p className=" font-medium">{edu.degree}</p>
									</div>
									<div className="text-right mt-2 md:mt-0">
										<span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
											{edu.year}
										</span>
									</div>
								</div>
								<ul className="space-y-2 mb-6">
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<span className="font-bold">GPA:</span> 3.95 |
											<span className="font-bold"> Honors:</span> Dean's List
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<span className="font-bold">Relevant Coursework:</span>{" "}
											Object-Oriented Programming, Data Structures and
											Algorithms, Computer and Logic Design, Linear Algebra,
											Discrete Mathematics, Multivariable Calculus.
										</div>
									</li>
									<li className="flex items-start">
										<span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
										<div>
											<span className="font-bold">Activities:</span> CodePath
											Advanced Technical Interview Prep, Harvard CS50's
											Introduction to Programming with Python, CodePath
											Intermediate Cybersecurity.
										</div>
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
