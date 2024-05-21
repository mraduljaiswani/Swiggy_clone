import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent  component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Hi , this is a about </h1>
        <UserClass name={"Mradul Jaiswani (Class Component)"} Number={"I st"} />
        {/* <UserClass
          name={"Mradul Jaiswani (Class Component)"}
          Number={"II nd"}
        />
        <UserClass
          name={"Mradul Jaiswani (Class Component)"}
          Number={"III rd"}
        /> */}

        {/* <User name={"Mradul Jaiswani (Functional Component)"} /> */}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>Hi , this is a about </h1>
//       <UserClass name={"Mradul Jaiswani (Class Component)"} />
//       {/* <User name={"Mradul Jaiswani (Functional Component)"} /> */}
//     </div>
//   );
// };
export default About;
