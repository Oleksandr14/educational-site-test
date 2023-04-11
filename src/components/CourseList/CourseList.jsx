import { useState, useMemo } from "react";
import styles from "./CourseList.module.css";
import CourseItem from "../CourseItem/CourseItem";
import { coursesData } from "../../data/courses";

const CourseList = () => {
  const [searchCourse, setSearchCourse] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredCourses = useMemo(() => {
    const term = searchCourse.toLowerCase();
    const category = selectedCategory;
    const difficulty = selectedDifficulty;

    return coursesData.filter((course) => {
      const matchTitle = course.title.toLowerCase().includes(term);
      const matchCategory = category === "all" || course.category === category;
      const matchDifficulty =
        difficulty === "all" || course.difficulty === difficulty;
      return matchTitle && matchCategory && matchDifficulty;
    });
  }, [searchCourse, selectedCategory, selectedDifficulty]);

  const handleSearch = (e) => {
    setSearchCourse(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };

  return (
    <div className="container">
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            value={searchCourse}
            className={styles.input}
            type="text"
            placeholder="Search courses..."
            onChange={handleSearch}
          />
        </div>

        <div className={styles.categoryFilter}>
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="science">Science</option>
            <option value="computer science">Computer science</option>
            <option value="mathematics">Mathematics</option>
            <option value="history">History</option>
            <option value="language arts">Language arts</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className={styles.categoryFilter}>
          <label htmlFor="difficulty-filter">Difficulty:</label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="all">All</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <ul className={styles.listCourse}>
          {filteredCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
