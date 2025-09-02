import "@fontsource/ubuntu"; // Defaults to weight 400

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./pages/transaction/Transaction";
import Support from "./pages/support/Support";
import Register from "./pages/AuthAll/Register";
import Login from "./pages/AuthAll/Login";
import EmailVerification from "./pages/AuthAll/EmailVerification";
import ForgotPassword from "./pages/AuthAll/ForgotPassword";
import PasswordResetSent from "./pages/AuthAll/Passwordresetsent";
import ResetPassword from "./pages/AuthAll/Resetpassword";
import PasswordResetDone from "./pages/AuthAll/PasswordResetDone";
import RegistrationSuccess from "./pages/AuthAll/RegistrationSuccess";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mailverification" element={<EmailVerification/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/passwordresetsent" element={<PasswordResetSent/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/passwordrestsuccess" element={<PasswordResetDone/>}/>
          <Route path="/RegistrationSuccess" element={<RegistrationSuccess/>}/>

        </Routes>
      </BrowserRouter>

            <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
