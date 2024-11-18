export default function QuizInformation({
  questionsNumber,
  points,
  maxPossiblePoints,
  index,
  answer,
  dispatch,
}) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={questionsNumber}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> of {questionsNumber}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}
