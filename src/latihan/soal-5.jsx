
import { useState , useEffect} from "react";

function ScoreCounter() {
  const [score, setScore] = useState(0);

  const tambahScore = () => {
    if (score < 10) {
      setScore(score + 1);
    }
  };

  const kurangScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

 useEffect(() => {
    document.title = `Score: ${score}`;
  }, [score]);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Score Counter</h1>

      <p className="text-5xl font-bold">{score}</p>

      <div className="flex gap-3">
        <button
          onClick={tambahScore}
          disabled={score === 10}
          className="rounded bg-green-500 px-4 py-2 text-white disabled:opacity-50"
        >
          +1
        </button>

        <button
          onClick={kurangScore}
          disabled={score === 0}
          className="rounded bg-red-500 px-4 py-2 text-white disabled:opacity-50"
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default ScoreCounter;
