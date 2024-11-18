import { useEffect } from "react";
export default function Timer({ secondsRemaining, dispatch }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      if (secondsRemaining < 1) dispatch({ type: "finished" });
      const id = setInterval(function () {
        dispatch({ type: "tick" });
        // console.log("ana useEffect w lsa shghala");
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

//  CHATGPT

// import { useEffect } from "react";

// export default function Timer({ secondsRemaining, dispatch }) {
//   useEffect(() => {
//     if (secondsRemaining > 0) {
//       const id = setInterval(() => {
//         dispatch({ type: "tick" });
//       }, 1000);

//       return () => clearInterval(id);
//     }
//   }, [secondsRemaining, dispatch]);

//   return <div className="timer">{secondsRemaining}</div>;
// }
