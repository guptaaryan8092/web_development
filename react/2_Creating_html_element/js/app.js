const heading = React.createElement(
    'h1',
    { id: 'abc' },
    'This is a heading.'
  );
  
  ReactDOM.render(
    heading,
    document.getElementById('react-container')
  );
  
  const paragraph = React.createElement(
    'p',
    null,
    'This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.'
  );
  
  const box = React.createElement(
    'div',
    { className: 'box'},
    heading,
    paragraph,
  );
  
  ReactDOM.render(
    box,
  
    document.getElementById('react-container')
  );
  