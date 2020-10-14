import React,{useState} from 'react'
import Main from './views/Main';
import './App.css';
import Detail from './views/Detail';
import { Router } from '@reach/router';
import Update from './views/Update'
function App() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div className="App">
      <Router>
        <Main path="/people/" title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription}/>
        <Detail path="/people/:id" />
        <Update path="/people/:id/edit" title={title} price={price} description={description} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription}/>
      </Router>
    </div>
  );
}

export default App;