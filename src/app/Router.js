import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page2 from "../pages/Page2";
import Init from "../pages/Init";
import Layout from "./layout";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout />}>
                    <Route index element={<Init />} />
                    <Route path="/page2" element={<Page2 />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Router;