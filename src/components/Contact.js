import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>THis is Contact us </h1>
      <input
        type="text"
        placeholder="Name"
        className="p-2 m-2 border border-solid"
      />
      <input
        type="text"
        placeholder="Message"
        className="p-2 m-2 border border-solid"
      />
      <button className="p-2 m-2 border border-solid">Submit</button>
    </div>
  );
};

export default Contact;
