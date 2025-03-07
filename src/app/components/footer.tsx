import Image from "next/image";
import Link from "next/link";

interface Props {
    social: any
}

export default function Footer({ social }: Props) {
    return (
        <footer className="flex flex-col gap-8 pb-6">
            <div className="block bg-border h-[1px]"></div>
            <div
                className="flex justify-around md:gap-[100px] md:justify-center text-text-300 text-sm"
            >
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center">
                    {social.map((link: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <Link
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
