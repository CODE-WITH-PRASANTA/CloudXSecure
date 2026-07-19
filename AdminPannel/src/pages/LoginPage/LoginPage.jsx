import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ FIXED LOGIN
    if (userId === "cloudxsecure" && password === "123456") {
      localStorage.setItem("isAdmin", "true");

      Swal.fire({
        title: "Login Successful 🎉",
        text: "Welcome Admin!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      Swal.fire("Error ❌", "Invalid ID or Password", "error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-black via-gray-900 to-gray-950 
    px-4">

      <div className="w-full max-w-md 
      bg-white/10 backdrop-blur-2xl border border-white/20 
      rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] 
      p-6">

        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Admin Login 🔐
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* USER ID */}
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="inputPremium"
            required
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputPremium pr-10"
              required
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 
              text-gray-300 cursor-pointer"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl 
            text-white font-semibold
            bg-gradient-to-r from-blue-600 to-purple-600 
            disabled:opacity-60"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>

      {/* Styles */}
      <style>{`
        .inputPremium {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;