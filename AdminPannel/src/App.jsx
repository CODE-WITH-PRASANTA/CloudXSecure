import { useState } from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout/AppLayout";

function App() {
  return (
    <>
      <AppLayout>
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-slate-600">Welcome to your Dashboard.</p>
      </AppLayout>
    </>
  );
}

export default App;
