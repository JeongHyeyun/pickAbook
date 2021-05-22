import React from 'react';

function PropsTest(props) {
  console.log(props);
  // {aaa} = props;
  return (
    <div>
      <h3>{props.test}</h3>
      <h3></h3>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>test</h1>
      <PropsTest test="xxxxx" array={[1, 2, 3, 4, 5]} bool={true}/>
    </div>
  );
}

export default App;
