import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: 0,
    };
  }
  render() {
    return (
      <>
        <form
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2rem",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.AddItems(this.state.Name, Number(this.state.Price));
          }}
        >
          <div>
            <label>Name</label> <br />
            <input
              type="text"
              name="Name"
              onChange={(e) => {
                this.setState({
                  Name: e.currentTarget.value,
                });
              }}
              value={this.state.Name}
            />
          </div>
          <div>
            <label>Price</label>
            <br />
            <input
              type="text"
              name="Price"
              onChange={(e) => {
                this.setState({
                  Price: Number(e.currentTarget.value),
                });
              }}
              value={this.state.Price}
            />
          </div>
          <div>
            <button
              style={{
                marginTop: "1.5rem",
                width: "10rem",
                marginLeft: "6rem",
                borderStyle: "none",
                color: "white",
                backgroundColor: "blue",
                height: "1.5rem",
                borderRadius: "5px",
              }}
            >
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default AddItem;
