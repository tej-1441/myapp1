import Outer from './Outer'
import Inner from './Inner';
import Timer from "./Timer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <ToastContainer closeButton={false} position="top-center" />
      <Routes>
        <Route path="/" element={
        <div>
        <Outer />
        {/* <Timer /> */}
        </div>
        }>
        </Route>
        <Route path="/inner" element={
        <div>
         <Inner />
         {/* <Timer /> */}
        </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
