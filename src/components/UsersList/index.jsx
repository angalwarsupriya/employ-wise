import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../../services/apiService";
import "./index.css";
import Loading from '../Loading';
import Error from '../Error';
import Success from "../Success";
import { UserContext } from "../../context";

const UsersList = () => {
  const navigate = useNavigate();
  const [pageStatus, setPageStatus] = useState("LOADING");
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
    const loadUsers = async () => {
      try {
        setPageStatus("LOADING");
        const response = await fetchUsers(page);
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
        setPageStatus("SUCCESS");
      } catch (err) {
        setPageStatus("ERROR");
      }
    };

    loadUsers();
  }, [page]);

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
      alert("User successfully deleted!");
    } catch {
      alert("Failed to delete user.");
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(users.filter((user) =>
      [user.first_name, user.last_name, user.email].some(field =>
        field.toLowerCase().includes(query)
      )
    ));
  };

  return (
    <main className="users-container p-5">
      <h2 className="text-center mb-4">Users List</h2>
      {pageStatus === "LOADING" && <Loading />}
      {pageStatus === "ERROR" && <Error msg="Failed fetching, Try again!" />}
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
    </main>
  );
};

export default UsersList;