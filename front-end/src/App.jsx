import { Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing.jsx";
import Navbar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Form from "./screens/Form.jsx";
import FormSign from "./screens/FormSign.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import PresistProfile from "./components/PersistProfile.jsx";
function App() {
  return (
    <>
      <PresistProfile />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <Footer />
            </>
          }
        />
        <Route
          path="/form"
          element={
            <>
              <Navbar />
              <Form />
              <Footer />
            </>
          }
        />
        <Route
          path="/form-signup"
          element={
            <>
              <Navbar />
              <FormSign />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />

              <div className="Errorpage">
                Wrong url <a href="/">Click here</a> to go back home
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
