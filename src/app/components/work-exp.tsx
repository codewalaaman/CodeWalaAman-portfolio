import Image from "next/image";

interface Props {
    exp: any;
}

export default function WorkExp({ exp }: Props) {
    return (
        <div>
            <h2
                className="text-text-100 text-sm md:text-base font-medium md:text-lg md:font-normal mb-1 mb-4"
            >
                Work Experience
            </h2>
            {exp.map((data: any) => (
                <div
                    key={data.id}
                    className="leading-[1.8] md:leading-[1.5] text-sm md:text-base text-text-300 mb-20px-not-last"
                >
                    <p className="text-xs md:text-sm text-blue-200">{data.from} - {data.to}</p>
                    <h3 className="text-text-100 my-1">
                        {data.position} · {data.company}
                    </h3>
                    <p className="leading-[1.6]">
                        {data.description}
                    </p>
                    <ul className="flex flex-wrap items-center gap-[6px] mt-3 md:mt-0">
                        {data.skills.map((skill: any) => (
                            // eslint-disable-next-line react/jsx-key
                            <li
                                className="shadow md:mt-3 bg-blue-100 text-blue-200 py-1 px-2 border border-border text-xs rounded"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

    );
}
