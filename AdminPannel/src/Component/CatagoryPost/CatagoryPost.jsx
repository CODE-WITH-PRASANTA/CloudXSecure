import React, { useState, useEffect } from "react";
import "./CatagoryPost.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import API from "../../api/axios";

const CatagoryPost = () => {
  const [catagory, setCatagory] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");
      setData(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!catagory.trim()) return;

    try {
      if (editIndex !== null) {
        const id = data[editIndex]._id;

        await API.put(`/categories/${id}`, {
          name: catagory,
        });

        setEditIndex(null);
      } else {
        await API.post("/categories", {
          name: catagory,
        });
      }

      setCatagory("");
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (index) => {
    setCatagory(data[index].name);
    setEditIndex(index);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (index) => {
    try {
      const id = data[index]._id;

      await API.delete(`/categories/${id}`);

      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="catagoryPost">
      {/* LEFT */}
      <div className="catagoryPost-formCard">
        <h2 className="catagoryPost-title">Create Category</h2>

        <form onSubmit={handleSubmit} className="catagoryPost-form">
          <div className="catagoryPost-field">
            <label className="catagoryPost-label">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Enter category name"
              className="catagoryPost-input"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            />
          </div>

          <button className="catagoryPost-btn">
            {editIndex !== null ? "Update Category" : "Add Category"}
          </button>
        </form>
      </div>

      {/* RIGHT */}
      <div className="catagoryPost-tableCard">
        <h2 className="catagoryPost-title">Category List</h2>

        <div className="catagoryPost-tableWrapper">
          <table className="catagoryPost-table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 && (
                <tr>
                  <td colSpan="3" className="catagoryPost-empty">
                    No Categories Added
                  </td>
                </tr>
              )}

              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td className="catagoryPost-actions">
                    <button
                      className="catagoryPost-edit"
                      onClick={() => handleEdit(index)}
                    >
                      <FiEdit />
                    </button>

                    <button
                      className="catagoryPost-delete"
                      onClick={() => handleDelete(index)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default CatagoryPost;