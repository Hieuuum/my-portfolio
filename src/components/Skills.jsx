import React from "react";

const Skills = () => {
	const categories = [
		{
			title: "Programming Languages",
			skills: ["Python", "Java", "JavaScript", "C/C++", "SQL"],
		},
		{
			title: "Frameworks",
			skills: [
				"React",
				"TailwindCSS",
				"Node.js",
				"Express.js",
				"Bootstrap",
				"TailwindCSS",
				"jQuery",
				"DiffTaichi",
				"Genesis",
			],
		},
		{
			title: "Tools & Others",
			skills: [
				"Git/GitHub",
				"Postman",
				"PostgreSQL",
				"Docker",
				"SupaBase",
				"Linux",
				"Arduino",
			],
		},
	];

	return (
		<section id="skills" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
				</div>

				{/* Skill Categories */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{categories.map((category, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
								{category.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, skillIndex) => (
									<span
										key={skillIndex}
										className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
