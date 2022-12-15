import Animation from "../assets/GHAnimations.png";
import Animation2 from "../assets/GHAnimations2.png";
import Array from "../assets/GHArrayMethods.png";
import Fundamental from "../assets/GHCodingFundamentals.png";
import Fundamental2 from "../assets/GHCodingFundamentals2.png";
import Debug from "../assets/GHDebugging.png";

export default function Grasshopper() {
  return (
    <div className="gh-list">
      <img className="gh-image" src={Animation} alt="animation" />
      <img className="gh-image" src={Animation2} alt="animations 2" />
      <img className="gh-image" src={Array} alt="array methods" />
      <img className="gh-image gh-large" src={Fundamental} alt="fundamentals" />
      <img
        className="gh-image gh-large"
        src={Fundamental2}
        alt="fundamentals 2"
      />
      <img className="gh-image" src={Debug} alt="Debugging" />
    </div>
  );
}
