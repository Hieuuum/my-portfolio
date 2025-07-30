import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<main>
				<About />
				<Skills />
				<Education />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
