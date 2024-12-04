import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({ content, written }) => {
  console.log(written);
  return (
    <div className="App">
      <h1 className="text-4xl">
        {content}{" "}
        <span className="text-green-400 font-pacifico">
          <Typewriter
            words={written}
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
