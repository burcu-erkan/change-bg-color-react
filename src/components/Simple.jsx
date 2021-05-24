import React from "react";

import { Link } from "react-router-dom";

//import Hex from "./Hex";

class Simple extends React.Component {
  constructor() {
    super();
    this.state = {
      curBg: "yellow",
      bgColor: ["green", "red", "rgba(133,122,200)", "#f15025", "pink"]
    };
  }
  changeBg = () => {
    const { bgColor } = this.state;
    let index = Math.floor(Math.random() * bgColor.length);
    let color = bgColor[index];
    this.setState({ curBg: color });
  };

  render() {
    const { curBg } = this.state;
    return (
      <div style={{ backgroundColor: `${curBg}` }}>
        <nav className="nav-center">
          <h4>color flipper</h4>
          <ul className="nav-links">
            <li>
              <Link to="/">Simple</Link>
            </li>
            <li>
              <Link to="/hex">Hex</Link>
            </li>
          </ul>
        </nav>

        <main>
          <div className="container">
            <h2>
              background color :<span className="color">{curBg}</span>
            </h2>
            <button onClick={this.changeBg}>click me</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Simple;
