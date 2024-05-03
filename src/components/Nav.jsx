import React from "react";


export default function Nav() {
  return (
    <div className="nav--container">
        <div class="github">
          <a href="https://github.com/joeokat/JoeOkat.me" target="_blank" rel="noreferrer"><img src="./assets/star.svg" alt=""/> Star</a>
          <a href="https://github.com/joeokat/JoeOkat.me" target="_blank" rel="noreferrer"><img src="./assets/fork.svg" alt=""/> Fork</a>
          <a class="cheveron" href="#nav"><img src="./assets/cheveronUp.svg" alt=""/></a>
        </div>
        <div class="copyright">
          <p>Designed in 🌍 with 💛 by Me [JoeOkat]</p>
        </div>
    </div>
  );
}
