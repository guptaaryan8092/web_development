const box = (
    <div className='box'>
      <h1 id='abc'>This is {4+5}'s heading</h1>
      <p>This is a test paragraph which is created by React. 
         This paragraph has no attribute and is contained inside a div which is also created by React.</p>
    </div>
  );
  
  ReactDOM.render(
    box,
  
    document.getElementById('react-container')
  );
  