import Link from "next/link";

interface Props {
    projects: any
}

export default function Portfolio({ projects }: Props) {
    return (
        <div>
            <h2
                className="text-text-100 text-sm md:text-base font-medium md:text-lg md:font-normal mb-1 mb-3"
            >
                Side Projects
            </h2>
            <div className="flex flex-col gap-3">
                {projects.map((project: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link
                        href="https://ninja-sketch.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Project"
                        className="border border-border bg-glass p-6 rounded-lg shadow flex flex-col gap-2 transition-shadow duration-300 hover:shadow-[0_4px_15px_rgba(255,255,255,0.5)]"
                    >
                        <div className="flex justify-between">
                            <h3 className="text-text-100 text-sm">{project.title}</h3>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                color="#5c87f6"
                                style={{ color: "#5c87f6" }}
                                height="18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </div>
                        <p
                            className="text-text-200 text-sm leading-[1.6] md:leading-[1.5] max-w-[800px]"
                        >
                            {project.description}
                        </p>
                        <ul className="flex items-center">
                            {project.skills.map((skill:any) => (
                                // eslint-disable-next-line react/jsx-key
                                <li
                                className="mt-2 md:mt-3 text-blue-200 py-1 text-xs flex-wrap rounded flex items-start"
                            >
                                {skill}<span className="mx-3">-</span>
                            </li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
        </div>
    );
}
