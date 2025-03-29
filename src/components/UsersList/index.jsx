

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import UserCard from "../UserCard";
// import "./index.css"; // Custom styles, if needed
// import EmptyResults from "../EmptyResults";
// import { UserContext } from "../../context";

// const UsersList = () => {
//   const navigate = useNavigate();
//   const [pageStatus, setPageStatus] = useState('LOADING')// for handling errors, loding while fetching
//   // Use global state from UserContext
//   const {
//     users,
//     setUsers,
//     filteredUsers,
//     setFilteredUsers,
//     page,
//     setPage,
//     searchQuery,
//     setSearchQuery,
//   } = useContext(UserContext);
//   console.log(users)
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           `https://reqres.in/api/users?page=${page}`
//         );
//         if (response.status === 200) {
//           setUsers(response.data.data); // Save users to global state
//           setFilteredUsers(response.data.data); // Default filtered users
//           setPageStatus('SUCCESS')
//         }
//         else {
//           setPageStatus('ERROR')
//         }
//       } catch (err) {
//         setPageStatus('ERROR')
//       }
//     };
//     fetchUsers();
//   }, [page]);

//   const handleEdit = (id) => {
//     navigate(`/edit-user/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://reqres.in/api/users/${id}`);
//       setUsers(users.filter((user) => user.id !== id));
//       setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
//       alert("User successfully deleted!");
//     } catch (err) {
//       console.error("Error deleting user:", err);
//     }
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = users.filter(
//       (user) =>
//         user.first_name.toLowerCase().includes(query) ||
//         user.last_name.toLowerCase().includes(query) ||
//         user.email.toLowerCase().includes(query)
//     );
//     setFilteredUsers(filtered);
//   };

//   return (
//     <div className="users-container p-5">
//       <h2 className="text-center mb-4">Users List</h2>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search users by name or email..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* User Cards Grid */}
//       <div className="row g-4">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <UserCard
//               key={user.id}
//               user={user}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//             />
//           ))
//         ) : (
//           <EmptyResults />
//         )}
//       </div>

//       {/* Pagination Controls */}
//       <div className="d-flex justify-content-between mt-4">
//         <button
//           className="btn btn-secondary"
//           onClick={() => setPage(page - 1)}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UsersList;

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import UserCard from "../UserCard";
// import "./index.css"; // Custom styles
// import EmptyResults from "../EmptyResults";
// import { UserContext } from "../../context"; // Import global context

// const UsersList = () => {
//   const navigate = useNavigate();

//   // State for tracking the loading and error status
//   const [pageStatus, setPageStatus] = useState("LOADING");

//   // Global state from UserContext
//   const {
//     users,
//     setUsers,
//     filteredUsers,
//     setFilteredUsers,
//     page,
//     setPage,
//     searchQuery,
//     setSearchQuery,
//   } = useContext(UserContext);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setPageStatus("LOADING"); // Set loading state before fetching
//         const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
//         if (response.status === 200) {
//           setUsers(response.data.data); // Update global users state
//           setFilteredUsers(response.data.data); // Default filtered users
//           setPageStatus("ERROR"); // Fetch successful
//         } else {
//           setPageStatus("ERROR"); // Handle unexpected status codes
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setPageStatus("ERROR"); // Set error state on failure
//       }
//     };
//     fetchUsers();
//   }, [page, setUsers, setFilteredUsers]);

//   const handleEdit = (id) => {
//     navigate(`/edit-user/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://reqres.in/api/users/${id}`);
//       setUsers(users.filter((user) => user.id !== id));
//       setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
//       alert("User successfully deleted!");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       alert("Failed to delete the user. Please try again.");
//     }
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = users.filter(
//       (user) =>
//         user.first_name.toLowerCase().includes(query) ||
//         user.last_name.toLowerCase().includes(query) ||
//         user.email.toLowerCase().includes(query)
//     );
//     setFilteredUsers(filtered);
//   };

//   return (
//     <div className="users-container p-5">
//       <h2 className="text-center mb-4">Users List</h2>

//       {/* Display loading or error states */}
//       {pageStatus === "LOADING" && (
//         <Loading/>
//       )}
//       {pageStatus === "ERROR" && (
//         <Error/>
//       )}

//       {/* Render content only on success */}
//       {pageStatus === "SUCCESS" && (
//         <>
//           <div className="mb-4">
//             {/* Search Bar */}
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search users by name or email..."
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </div>

//           {/* User Cards Grid */}
//           <div className="row g-4">
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => (
//                 <UserCard
//                   key={user.id}
//                   user={user}
//                   onEdit={handleEdit}
//                   onDelete={handleDelete}
//                 />
//               ))
//             ) : (
//               <EmptyResults />
//             )}
//           </div>

//           {/* Pagination Controls */}
//           <div className="d-flex justify-content-between mt-4">
//             <button
//               className="btn btn-secondary"
//               onClick={() => setPage(page - 1)}
//               disabled={page === 1}
//             >
//               Previous
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setPage(page + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default UsersList;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Loading from '../Loading'
import Error from '../Error'
import Success from "../Success";
import { UserContext } from "../../context";

const UsersList = () => {
  const navigate = useNavigate();

  // State for handling errors and loading
  const [pageStatus, setPageStatus] = useState("LOADING");

  // Use global state from UserContext
  const {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    page,
    setPage,
    searchQuery,
    setSearchQuery,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setPageStatus("LOADING");
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        if (response.status === 200) {
          setUsers(response.data.data);
          setFilteredUsers(response.data.data);
          setPageStatus("SUCCESS");
        } else {
          setPageStatus("ERROR");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setPageStatus("ERROR");
      }
    };
    fetchUsers();
  }, [page, setUsers, setFilteredUsers]);

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
      alert("User successfully deleted!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete the user. Please try again.");
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="users-container p-5">
      <h2 className="text-center mb-4">Users List</h2>

      {/* Display loading, error, or success */}
      {pageStatus === "LOADING" && <Loading />}
      {pageStatus === "ERROR" && <Error/>}
      {pageStatus === "SUCCESS" && (
        <Success
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          filteredUsers={filteredUsers}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
};

export default UsersList;