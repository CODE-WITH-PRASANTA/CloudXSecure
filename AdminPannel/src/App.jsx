import { Routes, Route } from "react-router-dom";
import "./App.css";
import BlogPost from "./Component/BlogPost/BlogPost";
import BlogView from "./Component/BlogView/BlogView";
import TeamPost from "./Component/TeamPost/TeamPost";

function App() {
  return (
    <>
      <Routes>
        app
        <Route path="/blog/post" element={<BlogPost />} />
        <Route path="/blog/view" element={<BlogView/>} />
        <Route path="/team/post" element={<TeamPost/>} />
      </Routes>
    </>
  );
}

export default App;
