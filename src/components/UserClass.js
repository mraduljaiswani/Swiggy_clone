import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        Name: "Default",
        Location: "Default",
      },
    };
    console.log(this.props.Number + " " + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.Number + " " + "Child  component did mount");
    const data = await fetch("https://api.github.com/users/mraduljaiswani");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log(this.props.Number + " " + "Child render");
    const { login, location, html_url } = this.state.userInfo;
    return (
      <div className="user-cart">
        {/* <h3>Count : {this.state.count}</h3>
        <h3>Count : {this.state.count2}</h3>
        <h1>Name: {this.props.name}</h1> */}
        {/* <h3>Count : {count}</h3> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Count Increse{" "}
        </button> */}
        <h1>Name: {login}</h1>
        <h2>Location :{location}</h2>
        <Link to={html_url}>
          <h3>URL: {html_url}</h3>
        </Link>
        <h3>Contant: Snap: mradul jazz</h3>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
