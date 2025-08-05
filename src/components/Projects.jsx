import React from "react";

const Projects = () => {
	const projects = [
		{
			title: "Read-it",
			description:
				"A book-tracking application that intelligently recommends new titles based on your personal reading history.",
			iconSrc:
				"https://cdn-editing-temp.picsart.com/editing-temp-landings/30026655-975b-4ebd-93a4-61fd399bc5fb.png",
			technologies: [
				"React.js",
				"JavaScript",
				"Node.js",
				"Express",
				"SupaBase",
				"PostgreSQL",
				"TailwindCSS",
			],
			liveUrl: "#",
			githubUrl: "https://github.com/Hieuuum/read-it",
			featured: true,
		},
		{
			title: "The Anvil",
			description:
				"A productivity app that guides you through timed work and break cycles using the Pomodoro Technique to help you achieve deep focus.",
			iconSrc: "/pomodoro-icon.png",
			technologies: [
				"React.js",
				"JavaScript",
				"Node.js",
				"Express",
				"SupaBase",
				"PostgreSQL",
				"TailwindCSS",
			],
			liveUrl: "https://the-anvil.vercel.app",
			githubUrl: "https://github.com/Hieuuum/the-anvil",
			featured: true,
		},
	];

	return (
		<section id="projects" className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Projects
					</h2>
				</div>

				{/* Featured Projects */}
				<div className="mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
							>
								<div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
									<img
										src={project.iconSrc}
										alt={`${project.title} icon`}
										className="w-40 h-40 text-blue-600"
										// style={{
										// 	filter:
										// 		"invert(23%) sepia(96%) saturate(2498%) hue-rotate(212deg) brightness(93%) contrast(101%)",
										// }}
									/>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-900 mb-3">
										{project.title}
									</h4>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										<a
											href={project.liveUrl}
											className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
											aria-label={`View live demo of ${project.title}`}
										>
											Live Demo
										</a>
										<a
											href={project.githubUrl}
											className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer"
											aria-label={`View GitHub repository of ${project.title}`}
										>
											GitHub
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
