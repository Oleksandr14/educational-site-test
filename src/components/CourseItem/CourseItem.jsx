import styles from "../CourseItem/CourseItem.module.css";

const CourseItem = ({ course }) => {
  return (
    <li className={styles.item}>
      <div className={styles.thumb}>
        <img src={course.image} alt={course.title} />
      </div>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.text}>{course.description}</p>
    </li>
  );
};

export default CourseItem;
