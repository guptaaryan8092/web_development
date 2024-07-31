import React from 'react';
const Box = (props) => {
    return (
        <div className='box'>
            <h1 className={props.color}> { props.heading } </h1>
            <p>This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also create by React</p>
            <button onClick={() => props.changeColor(props.id, "red")}>Red</button>
            <button onClick={() => props.changeColor(props.id, "yellow")}>Yellow</button>
            <button onClick={() => props.changeColor(props.id, "blue")}>Blue</button>
            <button onClick={() => props.changeColor(props.id, "green")}>Green</button>
        </div>
    );
  }

  export default Box;