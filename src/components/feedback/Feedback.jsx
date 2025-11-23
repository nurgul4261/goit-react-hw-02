import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  if (totalFeedback === 0) {
    return <p className={styles.text}>No feedback yet</p>;
  }

  return (
    <div>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;