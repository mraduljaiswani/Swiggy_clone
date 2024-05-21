import { useState } from "react";

// const User = (props) => {
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-cart">
      {/* <h1>Name: {props.name}</h1> */}
      <hr />
      <h3>Count : {count}</h3>
      <h3>Count : {count2}</h3>
      <h1>Name: {name}</h1>
      <h2>Location :Kota, Rajasthan</h2>
      <h3>Contant: Snap: mradul jazz</h3>
    </div>
  );
};

export default User;
