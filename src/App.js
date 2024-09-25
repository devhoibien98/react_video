import "./App.css";
// import Day1 from "./Day1/Day1";
import Day2 from "./Day2/Day2";

function App() {
  const handleClick = () => {
    console.log("Button Clicked in Component Day2");
  };
  return (
    <div className="container">
      <div className="text-center bg-dark fw-bold text-white p-4">
        http://localhost:3000
      </div>
      {/* <Day1 /> */}
      <Day2 title="Mashew" test="123" onClick={handleClick} />
      <Day2 title="Holder" />
      <Day2 title="Alex" />
      <Day2 title="Leon" />
      <Day2 title="Charles" />
    </div>
  );
}

export default App;
