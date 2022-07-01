import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from "./sections/Layout";

const App = () => {
    return (<>
                <Routes>
                    <Route index path="*" element={<Layout />} />
                </Routes>
        </>
    );
}

export default App;
