import Animation from "./assets/GHAnimations.png";
import Animation2 from "./assets/GHAnimations2.png";
import Array from "./assets/GHArrayMethods.png";
import Fundamental from "./assets/GHCodingFundamentals.png";
import Fundamental2 from "./assets/GHCodingFundamentals2.png";
import Debug from "./assets/GHDebugging.png";

export default function Grasshopper() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-8 mt-36 mx-24">
      <img className="w-72 h-64" src={Animation} alt="animation" />
      <img className="w-72 h-64" src={Animation2} alt="animations 2" />
      <img className="w-72 h-64" src={Array} alt="array methods" />
      <img className="w-64 h-64" src={Fundamental} alt="fundamentals" />
      <img className="w-64 h-64" src={Fundamental2} alt="fundamentals 2" />
      <img className="w-72 h-64" src={Debug} alt="Debugging" />
    </div>
  );
}
