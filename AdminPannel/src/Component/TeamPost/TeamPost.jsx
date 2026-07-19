import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTrash,
  FaUpload,
  FaEdit,
} from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";
import "./TeamPost.css";

const TeamPost = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fileRef = useRef(null);

  const itemsPerPage = 5;

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

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/team");
      setMembers(res.data.data || []);
    } catch (err) {
      console.error(err);
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

  const handleUploadClick = () => {
    fileRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) formData.append(key, form[key]);
      });

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
      console.error(err);
    }
  };

  const removeMember = async (id) => {
    await API.delete(`/team/${id}`);
    fetchMembers();
  };

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentMembers = members.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(members.length / itemsPerPage);

  return (
    <div className="teamAdmin">
      <div className="teamAdmin__container">

        {/* FORM */}
        <div className="teamAdmin__formCard">
          <div className="cardHeader">Team Management</div>

          <form onSubmit={handleSubmit} className="teamAdmin__form">

            <div className="teamAdmin__grid">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
              <input name="role" value={form.role} onChange={handleChange} placeholder="Designation" required />
            </div>

            <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio" />

            {/* ✅ FIXED UPLOAD */}
            <div className="teamAdmin__upload" onClick={handleUploadClick}>
              {form.preview ? (
                <img src={form.preview} alt="preview" />
              ) : (
                <div className="uploadContent">
                  <FaUpload />
                  <p>Upload Profile Image</p>
                </div>
              )}
              <input
                type="file"
                ref={fileRef}
                onChange={handleImage}
                className="hiddenFileInput"
              />
            </div>

            <div className="teamAdmin__grid">
              <input name="facebook" value={form.facebook} onChange={handleChange} placeholder="Facebook URL" />
              <input name="instagram" value={form.instagram} onChange={handleChange} placeholder="Instagram URL" />
            </div>

            <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn URL" />

            <button className="teamAdmin__submit">Add Member</button>
          </form>
        </div>

        {/* TABLE */}
        <div className="teamAdmin__listCard">
          <div className="cardHeader">Team Members</div>

          <div className="tableWrapper">
            <table className="teamTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Bio</th>
                  <th>Social</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentMembers.map((m) => (
                  <tr key={m._id}>
                    <td>
                      <img
                        src={m.image ? `${IMAGE_URL}${m.image}` : "https://i.pravatar.cc/100"}
                        className="tableImg"
                        alt=""
                      />
                    </td>
                    <td>{m.name}</td>
                    <td>{m.role}</td>
                    <td className="bioCell">{m.bio}</td>

                    <td>
                      <div className="socialIcons">
                        <a href={m.facebook}><FaFacebookF /></a>
                        <a href={m.instagram}><FaInstagram /></a>
                        <a href={m.linkedin}><FaLinkedinIn /></a>
                      </div>
                    </td>

                    <td>
                      <button className="editBtn"><FaEdit /></button>
                      <button className="deleteBtn" onClick={() => removeMember(m._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeamPost;