import Image from "next/image";

export default function About() {
    return (

        <div>
            <h2
                className="text-text-100 text-sm md:text-base font-medium md:text-lg md:font-normal mb-1"
            >
                About
            </h2>
            <div
                className="flex flex-col gap-3 text-text-300 md:leading-[1.6] text-xs leading-[1.85] md:text-base"
            >
                <p>
                    I am a senior developer with a proven track record of building scalable, efficient, and user-centric web applications. I specialize in front-end technologies like Angular and React, with deep expertise in full-stack development using NodeJS and databases like MySQL and MongoDB. <br /><br />
                    My focus is on delivering pixel-perfect, responsive, and accessible user experiences, optimizing performance, and ensuring smooth functionality across platforms. At Ernst and Young LLP, I implemented performance optimization strategies that reduced load times by 30%, enhancing overall user satisfaction. <br /><br />
                    I thrive on the excitement of bringing ideas to life and tackling new challenges in every project. Unlike most developers, I dont drink coffee or tea, but my passion for coding drives me to continuously improve and innovate.
                </p>
            </div>
        </div>

    );
}
