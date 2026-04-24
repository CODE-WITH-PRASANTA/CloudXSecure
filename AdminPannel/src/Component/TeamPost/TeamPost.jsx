import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTrash,
  FaUpload,
} from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";
import "./TeamPost.css";

const TeamPost = () => {
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

  /* ================= FETCH TEAM ================= */
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/team");
      setMembers(res.data.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      ...form,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  /* ================= ADD MEMBER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("bio", form.bio);
      formData.append("facebook", form.facebook);
      formData.append("instagram", form.instagram);
      formData.append("linkedin", form.linkedin);

      if (form.image) {
        formData.append("image", form.image);
      }

      await API.post("/team", formData);
      fetchMembers();

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
    } catch (err) {
      console.error("ADD ERROR:", err);
    }
  };

  /* ================= DELETE MEMBER ================= */
  const removeMember = async (id) => {
    try {
      await API.delete(`/team/${id}`);
      fetchMembers();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div className="teamAdmin">
      <div className="teamAdmin__container">

        {/* ================= LEFT FORM ================= */}
        <div className="teamAdmin__formCard">
          <h2>Team Management</h2>

          <form onSubmit={handleSubmit} className="teamAdmin__form">

            <div className="teamAdmin__grid">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />

              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Designation"
                required
              />
            </div>

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Short Bio"
            />

            {/* IMAGE UPLOAD */}
            <label className="teamAdmin__upload">
              {form.preview ? (
                <img src={form.preview} alt="preview" />
              ) : (
                <div>
                  <FaUpload />
                  <p>Upload Profile Image</p>
                </div>
              )}
              <input type="file" hidden onChange={handleImage} />
            </label>

            <div className="teamAdmin__grid">
              <input
                name="facebook"
                value={form.facebook}
                onChange={handleChange}
                placeholder="Facebook URL"
              />
              <input
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
              />
            </div>

            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn URL"
            />

            <button className="teamAdmin__submit">
              Add Member
            </button>

          </form>
        </div>

        {/* ================= RIGHT LIST ================= */}
        <div className="teamAdmin__listCard">
          <h2>Team Members</h2>

          <div className="teamAdmin__list">
            {members.map((m) => (
              <div key={m._id} className="teamAdmin__item">

                <div className="teamAdmin__left">
                  <img
                    src={
                      m.image
                        ? `${IMAGE_URL}${m.image}`
                        : "https://i.pravatar.cc/100"
                    }
                  />
                  <div>
                    <h4>{m.name}</h4>
                    <span>{m.role}</span>
                  </div>
                </div>

                <p className="teamAdmin__bio">{m.bio}</p>

                <div className="teamAdmin__right">
                  <div className="teamAdmin__social">
                    <a href={m.facebook}><FaFacebookF /></a>
                    <a href={m.instagram}><FaInstagram /></a>
                    <a href={m.linkedin}><FaLinkedinIn /></a>
                  </div>

                  <button onClick={() => removeMember(m._id)}>
                    <FaTrash />
                  </button>
                </div>

              </div>
            ))}

            {!members.length && (
              <p className="teamAdmin__empty">No team members yet.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamPost;