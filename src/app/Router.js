import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Page2 } from "../pages/Page2";
import Init from "../pages/Init";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Init />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
)

export default Router