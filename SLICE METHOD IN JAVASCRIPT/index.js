import React, { useState } from 'react';

// Child Component
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
    </div>
  );
}

// Parent Component
function App() {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const handleButtonClick = () => {
    console.log('Button clicked in parent component!');
  };

  return (
    <div>
      <ChildComponent user={user} />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
