// src/app/login/layout.jsx
import LoginSidebar from "@/components/LoginSidebar";
import LoginPage from "./page";

const LoginLayout = () => {
  return (
    <div className="flex bg-white">
      <LoginSidebar />
      <LoginPage />
    </div>
  );
};

export default LoginLayout;
