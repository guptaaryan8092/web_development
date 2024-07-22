const Box = (props) => {
    return (
        <div className='box'>
            <h1 className = {props.color}> {props.heading} </h1>
            <p>This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.</p>
            <button onClick={()=>props.changeColor(props.id,"red")}>Red</button>
            <button onClick={()=>props.changeColor(props.id,"yellow")}>Yellow</button>
            <button onClick={()=>props.changeColor(props.id,"blue")}>Blue</button>
            <button onClick={()=>props.changeColor(props.id,"green")}>Green</button>
        </div>
    );
  }
  
  
  class App extends React.Component {
  state = {
    boxes: [
        {
            id: 1, 
            heading: "First Heading",
            color: "black"
        },
        { 
            id: 2,
            heading: "Second Heading",
            color: "black"
        },
        {
            id: 3, 
            heading: "Third Heading",
            color: "black"
        },
        {
            id: 4, 
            heading: "Fourth Heading",
            color: "black"
        },
        {
            id: 5,
            heading: "Fifth Heading",
            color: "black"
        },
        {
            id: 6, 
            heading: "Sixth Heading",
            color: "black"
        },
    ]
  };
  
  changeColor(id, color) {
    let boxes = this.state.boxes;
    boxes[id-1].color = color;
    this.setState({
        boxes: boxes
    });
  }
  
  render(){
  return (
  <div className='row'>
    {this.state.boxes.map( box => 
      <div className='col'>
        <Box
            id={box.id}
            heading={box.heading}
            color={box.color}
            changeColor={this.changeColor.bind(this)}
        />
      </div>
    )}
  </div>
  );
  }
  };
  
  ReactDOM.render(
  <App />,
  document.getElementById('react-container')
  );
  