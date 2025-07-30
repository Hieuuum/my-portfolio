import React from "react";

const Experience = () => {
	const experiences = [
		{
			title: "Undergraduate Researcher",
			company: "Union Evolutionary Robotics Lab",
			period: "Mar 2025 – Present",
			description: [
				"Improved simulation accuracy by 20% through implementing dynamic models of soft robotic systems in Python with DiffTaichi and GENESIS physics simulators.",
				"Refactored core simulation module by optimizing legacy code, decreasing computation time per simulation by 17%.",
			],
		},
		{
			title: "Information Technology Support Specialist",
			company: "Union College",
			period: "Jan 2025 – Present",
			description: [
				"Diagnosed, resolved and documented software and hardware issues as the first point of contact for technical assistance using the ACE method.",
				"Developed and maintained a small repository of PowerShell/Bash scripts to automate repetitive diagnostic tasks, reducing manual troubleshooting time by 28% and ensured consistent data collection for escalations.",
			],
		},
	];

	return (
		<section id="experience" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Experience
					</h2>
				</div>

				<div className="space-y-8 flex flex-col items-center">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-lg shadow-md max-w-5xl"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
								<div className="mb-4 md:mb-0">
									<h3 className="text-xl font-semibold text-blue-600">
										{exp.title}
									</h3>
									<p className="font-medium text-lg">{exp.company}</p>
								</div>
								<div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
									{exp.period}
								</div>
							</div>

							<ul className="list-disc list-inside mb-6 space-y-2">
								{exp.description.map((item, itemIndex) => (
									<li key={itemIndex}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
