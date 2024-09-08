import ProjectDisplay from "@/app/components/ProjectDisplay";

const description = "Cart Dart is a web application designed to bridge the gap between food vendors and local food enthusiasts. Whether you're on the hunt for a food truck in your hometown or exploring a new city, Cart Dart makes it effortless to find and support local vendors. Our platform allows vendors to share their real-time location, menu, and daily specials, ensuring you never miss out on the best bites around. With an intuitive interface and seamless user experience, Cart Dart connects you to the flavors of your community, one delicious meal at a time.";
const missionStatement = "The mission of Cart Dart is to connect local food vendors with their communities, making it easy for people to discover and enjoy unique, locally-sourced meals while supporting small businesses."
const technologies = ["JavaScript", "TypeScript", "React", "AWS Lambda", "AWS SES", "PostgresQL", "AWS S3", "AWS API Gateway", "AWS IAM", "Google Maps API"];

export default function CartDart() {
    return (
        <ProjectDisplay website="https://cart-dart.vercel.app" projectName="Cart Dart" imageSrc="/cartDartLogo.svg" webMockupImg="/cart-dart-screeny.svg" github="" description={description} missionStatement={missionStatement} technologies={technologies}  />
    )
}