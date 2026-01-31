import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTrash } from "react-icons/fa";

const TeamAdmin = () => {
  const [members, setMembers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    role: "",
    bio: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    image: null,
    preview: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE UPLOAD
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      ...form,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMembers([
      ...members,
      {
        ...form,
        id: Date.now(),
      },
    ]);

    setForm({
      name: "",
      role: "",
      bio: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      image: null,
      preview: "",
    });
  };

  const removeMember = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-2 gap-10">

      {/* ================= LEFT : ADD TEAM ================= */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">Team Admin Panel</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-3 rounded w-full"
            required
          />

          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Designation"
            className="border p-3 rounded w-full"
            required
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short Bio"
            className="border p-3 rounded w-full"
          />

          {/* IMAGE PICKER */}
          <label className="border-2 border-dashed rounded p-6 block text-center cursor-pointer">
            {form.preview ? (
              <img
                src={form.preview}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
            ) : (
              <p className="text-gray-500">Click to choose image</p>
            )}

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </label>

          <input
            name="facebook"
            value={form.facebook}
            onChange={handleChange}
            placeholder="Facebook URL"
            className="border p-3 rounded w-full"
          />

          <input
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram URL"
            className="border p-3 rounded w-full"
          />

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="border p-3 rounded w-full"
          />

          <button className="bg-blue-600 text-white py-3 rounded w-full hover:bg-blue-700">
            Add Team Member
          </button>
        </form>
      </div>

      {/* ================= RIGHT : MANAGE TEAM ================= */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-semibold mb-6">Manage Team Members</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Photo</th>
                <th>Name</th>
                <th>Bio</th>
                <th>Social</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {members.map((m) => (
                <tr key={m.id} className="border-b">

                  {/* IMAGE */}
                  <td className="p-3">
                    <img
                      src={m.preview || "https://via.placeholder.com/100"}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>

                  {/* NAME */}
                  <td>
                    <p className="font-semibold">{m.name}</p>
                    <span className="text-xs text-gray-500">{m.role}</span>
                  </td>

                  {/* BIO */}
                  <td className="max-w-xs text-gray-600 text-xs">
                    {m.bio}
                  </td>

                  {/* SOCIAL */}
                  <td>
                    <div className="flex gap-3 text-blue-600">
                      <a href={m.facebook} target="_blank"><FaFacebookF /></a>
                      <a href={m.instagram} target="_blank"><FaInstagram /></a>
                      <a href={m.linkedin} target="_blank"><FaLinkedinIn /></a>
                    </div>
                  </td>

                  {/* ACTION */}
                  <td>
                    <button
                      onClick={() => removeMember(m.id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!members.length && (
            <p className="text-gray-400 text-center mt-6">
              No team members added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamAdmin;
