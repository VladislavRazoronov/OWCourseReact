//import logo from './logo.svg';
import './App.css';
import {Posts} from "./components/postComponents/Posts/Posts";
import {LaunchList} from "./components/SpaceX/LaunchList/LaunchList";


const App = () => {

  return (
    <div className="App">
        <div>
            <Posts/>
        </div>
        <div>
            <LaunchList/>
        </div>
    </div>
  );
}

export {App};
