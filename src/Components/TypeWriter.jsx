import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="App">
      <h1 className="text-4xl">
        Every act of kindness matters{" "}
        <span className="text-green-400 font-pacifico">
          <Typewriter
            words={["Donate", "Support", "Impact", "Repeat!"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
