import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Componentes/Pages/Home";
import Contact from "../Componentes/Pages/Contact";
import NewProject from "../Componentes/Pages/NewProject";

export default function Path(){
    <BrowserRouter>
        <Routes>
            <Route path="/" element={Home}/>
            <Route path="/Contact" element={Contact}/>
            <Route path="/NewProject" element={NewProject}/>
        </Routes>
    </BrowserRouter>
}