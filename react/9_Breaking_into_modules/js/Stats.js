import React from 'react';
const Stats = (props) => {
    let boxes = props.boxes;
    let black_count = 0, red_count = 0, yellow_count = 0, blue_count = 0, green_count = 0;
     boxes.forEach(box => {
      if (box.color == "black") {
        black_count++;
      } else if (box.color == "red") {
        red_count++;
      } else if (box.color == "yellow") {
        yellow_count++;
      } else if (box.color == "blue") {
        blue_count++;
      } else if (box.color == "green") {
        green_count++;
      }
    });
    
    return (
      <div className='stats'>
        Total heading color count:
        <div>Black: {black_count}</div>
        <div>Red: {red_count}</div>
        <div>Yellow: {yellow_count}</div>
        <div>Blue: {blue_count}</div>
        <div>Green: {green_count}</div>
      </div>
    );
    }
    export default Box;