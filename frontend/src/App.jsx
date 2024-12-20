import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./utils/ProtectedRoute";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Sidebar />
              <Layout style={{ marginLeft: 0, display: "flex" }}>
                <Navbar />
                <Content
                  style={{
                    width: "100%",
                    padding: "20px",
                    height: "100%",
                    overflow: "auto",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/employees" element={<Employees />} />
                  </Routes>
                </Content>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
