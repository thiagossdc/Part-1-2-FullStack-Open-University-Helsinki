import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <Button text="Good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
