import React, { useState } from "react";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    designation: "",
    content: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.author) return;

    const newBlog = {
      ...form,
      date: new Date().toLocaleDateString(),
    };

    setBlogs([...blogs, newBlog]);

    // reset
    setForm({
      title: "",
      category: "",
      author: "",
      designation: "",
      content: "",
      email: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Add Blog Post</h2>

          <div className="space-y-4">

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Post Title"
              className="w-full border rounded-lg px-4 py-2"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Category</option>
                <option>Technology</option>
                <option>Design</option>
                <option>Business</option>
              </select>

              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author Name"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="UI Designer / Developer"
              className="w-full border rounded-lg px-4 py-2"
            />

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows="6"
              placeholder="Write your blog content..."
              className="w-full border rounded-lg px-4 py-2 resize-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Author Email"
              className="w-full border rounded-lg px-4 py-2"
            />

            {/* Upload UI unchanged */}
            <div className="border-2 border-dashed border-indigo-400 rounded-lg p-8 text-center text-sm text-gray-500">
              Drag files or{" "}
              <span className="text-indigo-600 cursor-pointer font-medium">
                Click to Browse
              </span>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
            >
              Post Blog
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-6">Manage Blogs</h2>

          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Sl No.</th>
                <th className="p-3">Blog Title</th>
                <th className="p-3">Posting Date</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Email</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-gray-400">
                    No blogs added yet.
                  </td>
                </tr>
              ) : (
                blogs.map((blog, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">{blog.title}</td>
                    <td className="p-3">{blog.date}</td>
                    <td className="p-3">Img</td>
                    <td className="p-3">{blog.email}</td>
                    <td className="p-3 space-x-2">
                      <button className="text-indigo-600">Edit</button>
                      <button className="text-red-500">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default BlogAdmin;
