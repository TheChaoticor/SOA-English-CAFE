import Winter from "./Winter";
import Autumn from "./Autumn";
// Rainy & Summer intentionally imported but unused visually

import "./seasonal.css";

function SeasonalLayer() {
  const month = new Date().getMonth();

  let season = "summer";

  if (month === 0 || month === 1 || month === 2) {
    season = "winter";
  } else if (month >= 9 && month <= 11) {
    season = "autumn";
  } else if (month >= 6 && month <= 8) {
    season = "rainy";
  } else {
    season = "summer";
  }

  return (
    <>
      {season === "winter" && <Winter />}
      {season === "autumn" && <Autumn />}
      {/* Summer & Rainy intentionally empty */}
    </>
  );
}

export default SeasonalLayer;

