import React from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navBar">
          <div
            className="icon-name"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>ADD TO CARD</div>
            <div>TOTAL ITEMS: {this.props.totalItem}</div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
