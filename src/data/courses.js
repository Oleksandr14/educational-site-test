import science from "../image/science.jpg";
import math from "../image/math.jpg";
import computer from "../image/computer-s.jpg";
import lang from "../image/language.jpg";
import social from "../image/social.jpg";
import spanish from "../image/spain.jpg";
import economic from "../image/economic.jpg";
import marceting from "../image/marketing.jpg";
import philosophy from "../image/philosophy.jpeg";
import bio from "../image/biol.jpg";
import art from "../image/artifical.jpg";
import history from "../image/history.jpg";

export const coursesData = [
  {
    id: 1,
    title: "Introduction to Science",
    description:
      "Learn the basics of science and how it impacts our daily lives.",
    category: "science",
    difficulty: "beginner",
    image: science,
  },
  {
    id: 2,
    title: "Calculus for Beginners",
    description:
      "Get started with calculus and learn the fundamentals of this important branch of mathematics.",
    category: "mathematics",
    difficulty: "beginner",
    image: math,
  },
  {
    id: 3,
    title: "Introduction to Programming",
    description:
      "Learn how to program using popular languages like Python and JavaScript.",
    category: "computer science",
    difficulty: "beginner",
    image: computer,
  },
  {
    id: 4,
    title: "English Composition",
    description:
      "Develop your writing skills and learn how to write effective essays and papers.",
    category: "language arts",
    difficulty: "intermediate",
    image: lang,
  },
  {
    id: 5,
    title: "Introduction to Psychology",
    description: "Explore the science of behavior and mental processes.",
    category: "sciences",
    difficulty: "advanced",
    image: social,
  },
  {
    id: 6,
    title: "Spanish for Beginners",
    description: "Learn the basics of the Spanish language.",
    category: "language arts",
    difficulty: "beginner",
    image: spanish,
  },
  {
    id: 7,
    title: "Introduction to Economics",
    description:
      "Learn about the production, consumption, and transfer of wealth.",
    category: "sciences",
    difficulty: "advanced",
    image: economic,
  },
  {
    id: 8,
    title: "Digital Marketing Fundamentals",
    description:
      "Learn how to promote products and services through digital channels like social media and email marketing.",
    category: "business",
    difficulty: "intermediate",
    image: marceting,
  },
  {
    id: 9,
    title: "Introduction to Philosophy",
    description:
      "Explore fundamental questions about existence, knowledge, and ethics.",
    category: "history",
    difficulty: "beginner",
    image: philosophy,
  },
  {
    id: 10,
    title: "Biology Basics",
    description:
      "Learn the fundamentals of biology, including the structure of cells and the basics of genetics.",
    category: "science",
    difficulty: "beginner",
    image: bio,
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence",
    description:
      "Explore the fundamentals of artificial intelligence and machine learning.",
    category: "computer science",
    difficulty: "advanced",
    image: art,
  },
  {
    id: 12,
    title: "The History of the United States",
    description:
      "Learn about the key events and figures that shaped the United States.",
    category: "history",
    difficulty: "beginner",
    image: history,
  },
];

export const filtersData = [
  {
    category: "All categories",
    difficulty: "All",
  },
  {
    category: "Science",
    difficulty: "Beginner",
  },
  {
    category: "Mathematics",
  },
  {
    category: "Computer Science",
  },
  {
    category: "Language Arts",
    difficulty: "Intermediate",
  },
  {
    category: "Social Sciences",
  },
  {
    category: "Language Arts",
  },
  {
    category: "Business",
  },
  {
    category: "Humanities",
  },
  {
    category: "History",
  },
  {
    difficulty: "Advanced",
  },
];
