
import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import Tag from './components/Tag';

function App() {

  const [value, setValue] = useState(0);

  return (
    <div className="App">

      <Category val={value} setVal={setValue} />
      <Tag val={value} setVal={setValue} />

    </div>
  );
}

export default App;
