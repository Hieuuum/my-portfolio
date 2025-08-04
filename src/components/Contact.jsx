import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! I will get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			iconFile: "email.svg",
			label: "Email",
			value: "nguyenv@union.edu",
			link: "mailto:nguyenv@union.edu",
		},
		{
			iconFile: "linkedin.svg",
			label: "LinkedIn",
			value: "linkedin.com/in/hieu-nguyen-9a072b336/",
			link: "https://www.linkedin.com/in/hieu-nguyen-9a072b336/",
		},
		{
			iconFile: "github.svg",
			label: "GitHub",
			value: "github.com/Hieuuum",
			link: "https://github.com/Hieuuum",
		},
		// {
		// 	iconFile: "📱",
		// 	label: "Phone",
		// 	value: "+1 (555) 123-4567",
		// 	link: "tel:+15551234567",
		// },
	];

	return (
		<section id="contact" className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Contact Me
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-900 mb-6">
							Get In Touch
						</h3>
						<p className="text-gray-600 mb-8">
							Feel free to reach out to me through any of the following
							channels. I'm always excited to discuss new projects, creative
							ideas, or opportunities to be part of your visions.
						</p>

						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<a
									key={index}
									href={info.link}
									className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
								>
									<img
										className="text-2xl mr-4 w-10 h-10"
										src={info.iconFile}
									/>
									<div>
										<p className="font-medium text-gray-900">{info.label}</p>
										<p className="text-blue-600">{info.value}</p>
									</div>
								</a>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div>
						<h3 className="text-2xl font-semibold text-gray-900 mb-6">
							Send Me a Message
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="mt-16 pt-8 border-t border-gray-200 text-center">
				<p className="text-gray-600">© 2025 Hieu Nguyen. Built with ❤️</p>
			</div>
		</section>
	);
};

export default Contact;
