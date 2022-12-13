import React from "react";

// patern1
// const ColorfulMessage = (props) => {
//   // console.log(props);
//   const contentStyle = {
//     color: props.color,
//     fontSize: "18px"
//   };

//   return <p style={contentStyle}>{props.message}</p>;
// };

// patern2
const ColorfulMessage = (props) => {
  // console.log("カラフル");
  const { color, children } = props;
  // console.log(props);
  const contentStyle = {
    // color: color,
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
