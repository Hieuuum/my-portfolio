import React from "react";

const About = () => {
	const handleViewWork = () => {
		const projectsSection = document.getElementById("projects");
		projectsSection?.scrollIntoView({ behavior: "smooth" });
	};

	const handleDownloadCV = () => {
		window.open("/resume.pdf", "_blank");
	};

	return (
		<section id="about" className="relative">
			{/* Hero Section with Blue Background */}
			<div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white min-h-screen flex items-center">
				<div className="absolute inset-0 opacity-20 bg-[url(/my-little-plaid.png)]"></div>

				{/* Content */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center z-10">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Hi, I'm <span className="text-yellow-300">Hieu</span>
					</h1>
					<p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
						A passionate developer who loves creating amazing web experiences
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
						<button
							onClick={handleViewWork}
							className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:border-white border-2 border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
							aria-label="View my work section"
						>
							View My Work
						</button>
						<button
							onClick={handleDownloadCV}
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
							aria-label="Download my resume PDF"
						>
							Download CV
						</button>
					</div>
				</div>
			</div>

			{/* About Me Section */}
			<div className="bg-white pt-20 pb-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								About Me
							</h2>
							<p className="text-gray-600 mb-4 leading-relaxed">
								I'm a full-stack developer with a passion for creating
								innovative and user-friendly applications. With experience in
								modern web technologies, I enjoy turning complex problems into
								simple, beautiful, and intuitive solutions.
							</p>
							<p className="text-gray-600 leading-relaxed">
								When I'm not coding, you can find me reading books, cooking or
								enjoying outdoor activities.
							</p>
						</div>
						<div className="relative">
							<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-lg">
								<img
									src="/my-picture-edit.jpeg"
									alt="A picture showing myself"
									className="w-full h-96 object-cover object-center hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
