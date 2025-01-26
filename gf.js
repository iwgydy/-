import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (username.trim() === "ijehddio55f" && password.trim() === "podsjio-44d6ds4fd/ds4d46a669yh") {
      setIsLoggedIn(true);
      toast.success("🎉 เข้าสู่ระบบสำเร็จ!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      });
    } else {
      toast.error("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`คัดลอก \"${text}\" เรียบร้อยแล้ว!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (showLogo) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-700">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white text-5xl font-extrabold"
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-2xl shadow-2xl">โลโก้ระบบ</div>
        </motion.div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Card className="w-full max-w-md p-6 bg-black text-white shadow-xl rounded-2xl">
          <CardContent>
            <h1 className="text-3xl font-bold mb-6 text-center">เข้าสู่ระบบ</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label className="block text-lg mb-2">ชื่อผู้ใช้</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 text-lg"
                  placeholder="กรอกชื่อผู้ใช้"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg mb-2">รหัสผ่าน</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 text-lg"
                  placeholder="กรอกรหัสผ่าน"
                />
              </div>
              <Button
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-700 hover:opacity-90 text-lg font-bold rounded-lg"
                onClick={handleLogin}
              >
                เข้าสู่ระบบ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">โค้ดเน็ตเวิร์ก</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">เน็ตเวิร์ก {index + 1}</h2>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-600 flex items-center"
                  onClick={() => handleCopy(`โค้ดเน็ตเวิร์ก ${index + 1}`)}
                >
                  คัดลอก <Copy className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-300">รายละเอียดโค้ดเน็ตของคุณ...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
