import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Box} from "@material-ui/core";

function App() {
    return (
        <>
            <Box component="div" className="backgroundMain" />
            <Header/>
            <Home/>
        </>
    );
}

export default App;
