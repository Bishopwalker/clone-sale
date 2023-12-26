import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header.jsx";
import Home from'./components/home/Home.jsx';
import PricingPage from "./components/pricing/PricingPage.jsx";

function App() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Header/>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path='/buy' element={<PricingPage/>}/>

                    {/* other routes */}
                </Routes>

            </Box>

        </>
    )
}

export default App
