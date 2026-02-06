import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import Footer from "./components/Footer";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />

        <main className="flex-fill">
          <Routes>
            {/* /////http://localhost:3000   = how this */}
            <Route path="/" element={<ListEmployeeComponent/>}></Route>
            
            {/* //// http://localhost:3000/Employees */}
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>

            {/* //http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;
