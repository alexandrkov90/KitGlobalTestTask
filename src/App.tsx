import {FC} from "react"
import Router from "./router/Router"
import Header from "./components/Header/Header";

const App: FC = () => {
    return (
        <>
            <Header/>
            <Router/>
        </>
    );
}

export default App;
