import "./Slider.scss";
import "./media.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <h1 className="slider__container--title">The Power of Simplicity</h1>
        <p className="slider__container--subtitle">
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className="slider__container--button">Learn</button>
      </div>
      <ul className="slider__dots">
        <li className="slider__dot "></li>
        <li className="slider__dot "></li>
        <li className="slider__dot slider__dot--active"></li>
        <li className="slider__dot "></li>
        <li className="slider__dot "></li>
      </ul>
    </div>
  );
};
