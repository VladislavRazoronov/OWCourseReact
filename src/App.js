import './App.css';
import {Users} from "./components/UserComponents/Users/Users";
import {useState} from "react";
import {Posts} from "./components/PostComponents/Posts/Posts";

function App() {
  let [userId,setId] = useState(1)
  let Click = (id)=>{
    console.log(id)
    setId(id)
  }

  return (
    <div className="App">
      <Users click={Click}/>
       <Posts userId={userId}/>
    </div>
  );
}

export default App;
