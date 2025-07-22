
import { content } from "../../data/content";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	return content.projects.map((project) => ({
		id: project.id,
	}));
}

export default function ProjectDetail({ params }) {
	const project = content.projects.find((p) => p.id === params.id);

	if (!project) {
		return <div className="text-white p-8">Project not found.</div>;
	}

	const {
		title,
		category,
		image,
		link,
		overview,
		role,
		responsibilities = [],
		techStack = [],
		keyFeatures = [],
		challenges = [],
		outcomes = [],
		timeline,
	} = project;

	const renderList = (items) =>
		items.map((item, i) => (
			<li key={i} className="mb-1">
				{item}
			</li>
		));

	return (
		<div className="min-h-screen bg-black text-white p-6 md:p-12">
			<div className="max-w-4xl mx-auto space-y-6">
				<div>
					<h1 className="text-4xl font-bold">{title}</h1>
					<p className="text-teal-400 uppercase mt-1">{category}</p>
					<p className="text-gray-400 italic mt-2">{timeline}</p>
				</div>

				<Image
					src={image}
					alt={title}
					width={1200}
					height={600}
					className="rounded w-full object-cover"
				/>

				<div className="space-y-2">
					<h2 className="text-2xl font-semibold">Overview</h2>
					<p className="text-gray-300">{overview}</p>
					<h3 className="text-xl font-medium mt-4">My Role</h3>
					<p className="text-gray-300">{role}</p>
				</div>

				{responsibilities.length > 0 && (
					<div>
						<h3 className="text-xl font-semibold">Responsibilities</h3>
						<ul className="list-disc list-inside text-gray-300 ml-4">
							{renderList(responsibilities)}
						</ul>
					</div>
				)}

				{techStack.length > 0 && (
					<div>
						<h3 className="text-xl font-semibold">Tech Stack</h3>
						<ul className="flex flex-wrap gap-2 mt-2">
							{techStack.map((tech, i) => (
								<li
									key={i}
									className="bg-teal-600 px-3 py-1 rounded text-sm"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
				)}

				{keyFeatures.length > 0 && (
					<div>
						<h3 className="text-xl font-semibold">Key Features</h3>
						<ul className="list-disc list-inside text-gray-300 ml-4">
							{renderList(keyFeatures)}
						</ul>
					</div>
				)}

				{challenges.length > 0 && (
					<div>
						<h3 className="text-xl font-semibold">Challenges & Solutions</h3>
						<ul className="list-disc list-inside text-gray-300 ml-4">
							{renderList(challenges)}
						</ul>
					</div>
				)}

				{outcomes.length > 0 && (
					<div>
						<h3 className="text-xl font-semibold">Outcomes</h3>
						<ul className="list-disc list-inside text-gray-300 ml-4">
							{renderList(outcomes)}
						</ul>
					</div>
				)}

				<div className="mt-6">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded font-semibold"
					>
						Visit Live Project
					</a>
				</div>

				<div className="mt-8">
					<Link href="/" className="text-teal-400 hover:text-teal-300">
						← Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
