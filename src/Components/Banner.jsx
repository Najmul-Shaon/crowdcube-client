import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css"; // Import default styles

const Banner = () => {
  return (
    <div className="my-12">
      <AwesomeSlider>
        <div data-src={`https://i.ibb.co.com/wJRzbpB/header-img-03.jpg`} />
        <div data-src={`https://i.ibb.co.com/gDZhwFB/header-img-01.jpg`} />
        <div data-src={`https://i.ibb.co.com/wJRzbpB/header-img-03.jpg`} />
        <div data-src={`https://i.ibb.co.com/gDZhwFB/header-img-01.jpg`} />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
