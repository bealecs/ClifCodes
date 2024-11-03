import Image from "next/image";

export interface ShowcaseProps {
    title: string;
    datePosted: string;
    readingTime: number;
    previewImgSrc: string;
    redirectURL: string;
}

export default function BlogShowcase({title, datePosted, readingTime, previewImgSrc, redirectURL}: ShowcaseProps) {

    return (
        <div id="blog-showcase" className="rounded-xl border-2 w-fit p-2 text-center">
            <Image src={previewImgSrc} alt={title} width={250} height={100} className="rounded-xl"/>
            <h4>{title}</h4>
            <p>Time to read: {readingTime}</p>
            <p>posted on: {datePosted}</p>
            <a href={redirectURL} className="border-2 p-1 rounded-xl">View post</a>
        </div>
    )
}