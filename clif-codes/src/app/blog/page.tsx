import Header from "../components/Header";
import BlogShowcase, { ShowcaseProps } from "./blog-components/BlogShowcase";

export default function Blog() {
//   const blogPosts: ShowcaseProps[] = [
//     {
//       title: "",
//       readingTime: 0,
//       datePosted: "",
//       previewImgSrc: "/ClifAI.webp",
//       redirectURL: "/blog/first",
//     },
//     {
//       title: "",
//       readingTime: 0,
//       datePosted: "",
//       previewImgSrc: "/ClifAI.webp",
//       redirectURL: "/blog/second",
//     },
//   ];

  return (
    <section id="blog-posts" className="max-w-7xl mx-auto">
        <Header />
      <h1 className="text-center text-3xl">Clif&apos;s Blog Posts</h1>
      <div className="flex justify-evenly flex-wrap m-12">
        {/* <BlogShowcase
          title={blogPosts[0].title}
          readingTime={blogPosts[0].readingTime}
          datePosted={blogPosts[0].datePosted}
          previewImgSrc={blogPosts[0].previewImgSrc}
          redirectURL={blogPosts[0].redirectURL}
        />
        <BlogShowcase
          title={blogPosts[1].title}
          readingTime={blogPosts[1].readingTime}
          datePosted={blogPosts[1].datePosted}
          previewImgSrc={blogPosts[1].previewImgSrc}
          redirectURL={blogPosts[1].redirectURL}
        /> */}
        
      </div>
    </section>
  );
}
