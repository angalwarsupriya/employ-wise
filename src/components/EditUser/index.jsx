import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers, updateUser } from "../../services/apiService";
import { UserContext } from "../../context";
import Loading from "../Loading";
import Error from "../Error";
import "./index.css";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [pageStatus, setPageStatus] = useState("LOADING");

  useEffect(() => {
    const fetchAndSetUser = async () => {
      try {
        let user = users.find((u) => u.id === parseInt(id));
        if (!user) {
          // If user is not in the context, fetch from API
          const response = await fetchUsers(1); // Assuming page 1 includes the user
          user = response.data.data.find((u) => u.id === parseInt(id));
          setUsers((prev) => [...prev, ...response.data.data]); // Update context
        }
        if (user) {
          setUpdatedUser(user);
          setPageStatus("SUCCESS");
        } else {
          setPageStatus("ERROR");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setPageStatus("ERROR");
      }
    };

    fetchAndSetUser();
  }, [id, users, setUsers]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, updatedUser);
      setUsers((prev) =>
        prev.map((user) =>
          user.id === parseInt(id) ? { ...user, ...updatedUser } : user
        )
      );
      alert("User updated successfully!");
      navigate("/users");
    } catch {
      alert("Failed to update user.");
    }
  };

  return (
    <main className="edit-user-container pt-5 d-flex flex-column align-items-center">
      <h2>Edit User</h2>
      {pageStatus === "LOADING" && <Loading />}
      {pageStatus === "ERROR" && (
        <Error msg="Failed to load user details. Please try again." />
      )}
      {pageStatus === "SUCCESS" && (
        <form onSubmit={handleUpdate} className="form mt-5">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              className="form-control"
              value={updatedUser.first_name}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, first_name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              className="form-control"
              value={updatedUser.last_name}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, last_name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={updatedUser.email}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, email: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-primary save-btn">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-3"
            onClick={() => navigate("/users")}
          >
            Cancel
          </button>
        </form>
      )}
    </main>
  );
};

export default EditUser;