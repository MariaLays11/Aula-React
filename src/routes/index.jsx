import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/pages/home"
import AboutPage from "../pages//pages/about";
import ContactPage from "../pages/pages/contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path= "/" element={<HomePage/>}/>
            <Route path= "/about" element={<AboutPage/>}/>
            <Route path= "/contact" element={<ContactPage/>}/>
        </Routes>
    )
}

export default AppRoutes;