// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "./index.css";

// const EditUser = () => {
//   const { id } = useParams(); // Get user ID from the URL
//   const [user, setUser] = useState({});
//   const [updatedUser, setUpdatedUser] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the user data by ID
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`https://reqres.in/api/users/${id}`);
//         setUser(response.data.data);
//         setUpdatedUser({
//           first_name: response.data.data.first_name,
//           last_name: response.data.data.last_name,
//           email: response.data.data.email,
//         });
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };
//     fetchUser();
//   }, [id]);

//     const handleUpdate = async (e) => {
//       console.log(updatedUser)
//     e.preventDefault();
//     try {
//       await axios.put(`https://reqres.in/api/users/${id}`, updatedUser);
//       alert("User successfully updated!");
//       navigate("/users"); // Redirect back to Users List
//     } catch (err) {
//       console.error("Error updating user:", err);
//       alert("Failed to update the user. Please try again.");
//     }
//   };

//   return (
//     <div className="edit-user-container pt-5 d-flex flex-column align-items-center">
//       <h2 className="text-center mb-4">Edit User</h2>
//       <form onSubmit={handleUpdate} className="form mt-5">
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={updatedUser.first_name}
//             onChange={(e) =>
//               setUpdatedUser({ ...updatedUser, first_name: e.target.value })
//             }
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label>Last Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={updatedUser.last_name}
//             onChange={(e) =>
//               setUpdatedUser({ ...updatedUser, last_name: e.target.value })
//             }
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={updatedUser.email}
//             onChange={(e) =>
//               setUpdatedUser({ ...updatedUser, email: e.target.value })
//             }
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary save-btn mt-4">
//           Save Changes
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary mt-4 ms-3"
//           onClick={() => navigate("/users")}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditUser;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../context"; // Import UserContext
import "./index.css";

const EditUser = () => {
  const { id } = useParams(); // Extract user ID from URL
  const navigate = useNavigate();

  // Consume global state from UserContext
  const { users, setUsers } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    // Find user by ID from the global state
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      setUpdatedUser({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
    }
  }, [id, users]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, updatedUser);
      // Update global users state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === parseInt(id) ? { ...user, ...updatedUser } : user
        )
      );
      alert("User successfully updated!");
      navigate("/users"); // Redirect to Users List
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update the user. Please try again.");
    }
  };

  return (
    <div className="edit-user-container pt-5 d-flex flex-column align-items-center">
      <h2 className="text-center mb-4">Edit User</h2>
      <form onSubmit={handleUpdate} className="form mt-5">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={updatedUser.first_name}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, first_name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={updatedUser.last_name}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, last_name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={updatedUser.email}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, email: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary save-btn mt-4">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary mt-4 ms-3"
          onClick={() => navigate("/users")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;