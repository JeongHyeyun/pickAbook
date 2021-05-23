import React from 'react';

const mapTest  = [
  { name: 'map1', index: 1 },
  { name: 'map2', index: 2 },
  { name: 'map3', index: 3 },
  { name: 'map4', index: 4 },
  { name: 'map5', index: 5 },
  { name: 'map6', index: 6 },
  { name: 'map7', index: 7 },
  { name: 'map8', index: 8 },
  { name: 'map9', index: 9 },
]

function PropsTest({name, index}) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{index}</h3>
    </div>
  );
}
function App() {
  return (
    <div>
      {mapTest.map((test) => (<PropsTest name={test.name} index={test.index}/>))}
    </div>
  );
}

export default App;
