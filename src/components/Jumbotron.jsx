import { Link } from "react-router-dom";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {

    const handleLearMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    }

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} alt="image of iphone 14" className="logo" />
      <p className="text">Big and Bigger.</p>
      <span className="description">
        From $41.98 per month or 24 months or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <Link to="#" className="link" onClick={handleLearMore}>Learn More</Link>
        </li>
      </ul>
      <img 
        src={HoldingIphone} 
        alt="Image for holding iphone with a hand" 
        className="iphone-img"
        />
    </div>
  );
};

export default Jumbotron;
