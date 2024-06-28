// src/app/login/layout.jsx
import LoginSidebar from "@/components/LoginSidebar";
import LoginPage from "./page";

const LoginLayout = () => {
  return (
    <div className="flex bg-white">
      <div className="flex-none">
        <LoginSidebar />
      </div>
      <div className="flex-1">
        <LoginPage />
      </div>
    </div>
  );
};

export default LoginLayout;
