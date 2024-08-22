import ProjectDisplay from "@/app/components/ProjectDisplay";

const description =
  "Next Meal is a dynamic web application that helps users plan their meals with ease and convenience. Whether you're looking for quick recipes, meal prep ideas, or personalized suggestions based on your dietary preferences, Next Meal has you covered. With its user-friendly interface and smart features, Next Meal takes the stress out of meal planning, ensuring that you always have delicious and nutritious options at your fingertips.";
const missionStatement =
  "The mission of Next Meal is to simplify meal planning by providing personalized, accessible, and nutritious meal options, empowering users to make healthier choices with ease and confidence.";
const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Spoonacular API",
  "AWS Lambda",
  "PostgresQL",
];

export default function NextMeal() {
  return (
    <ProjectDisplay
      projectName="Next Meal"
      website="https://next-meal-cookbook.vercel.app"
      imageSrc="/NextMeal.png"
      github="https://github.com/bealecs/NextMeal"
      description={description}
      missionStatement={missionStatement}
      technologies={technologies}
    />
  );
}
