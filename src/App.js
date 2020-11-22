import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import TimeLine from "./pages/TimeLine";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Route path='/' exact component={Home}></Route>
                <Route path='/project' exact component={Project}></Route>
                <Route path='/timeline' exact component={TimeLine}></Route>
            </BrowserRouter>
        </>

    );
}

export default App;
