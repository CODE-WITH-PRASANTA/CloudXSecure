import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout/AppLayout";

function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<AppLayout />}>

        {/* Default route */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<div>Dashboard</div>} />

        <Route path="blog">
          <Route path="add" element={<div>Add Blog</div>} />
          <Route path="list" element={<div>Blog List</div>} />
        </Route>

        <Route path="team" element={<div>Team</div>} />
        <Route path="categories" element={<div>Categories</div>} />

        <Route path="pricing">
          <Route path="post" element={<div>Post Plan</div>} />
          <Route path="list" element={<div>View Plan</div>} />
        </Route>

        <Route path="contacts" element={<div>Contacts</div>} />
        <Route path="testimonials" element={<div>Testimonials</div>} />

      </Route>
    </Routes>
  );
}

export default App;
