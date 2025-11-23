import { useState, useEffect } from "react";
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import styles from "./App.module.css";

function App() {
  const [good, setGood] = useState(() => {
    const saved = localStorage.getItem("good");
    return saved ? JSON.parse(saved) : 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const saved = localStorage.getItem("neutral");
    return saved ? JSON.parse(saved) : 0;
  });

  const [bad, setBad] = useState(() => {
    const saved = localStorage.getItem("bad");
    return saved ? JSON.parse(saved) : 0;
  });

  const totalFeedback = good + neutral + bad;

  const handleLeaveFeedback = (type) => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    localStorage.setItem("good", 0);
    localStorage.setItem("neutral", 0);
    localStorage.setItem("bad", 0);
  };

  useEffect(() => {
    localStorage.setItem("good", JSON.stringify(good));
  }, [good]);

  useEffect(() => {
    localStorage.setItem("neutral", JSON.stringify(neutral));
  }, [neutral]);

  useEffect(() => {
    localStorage.setItem("bad", JSON.stringify(bad));
  }, [bad]);

  return (
    <div className={styles.app}>
      <Description />

      <Options
        onLeaveFeedback={handleLeaveFeedback}
        onReset={handleReset}
        total={totalFeedback}
      />

      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
