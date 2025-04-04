import React from "react";
import UserCard from './UserCard'
import EmptyResults from "./EmptyResults";

const Success = ({
  searchQuery,
  handleSearch,
  filteredUsers,
  handleEdit,
  handleDelete,
  setPage,
  page,
}) => {
  return (
    <section>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search users by name or email..."
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search users"
        />
      </div>

      {/* User Cards Grid */}
      <div className="row g-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <EmptyResults />
        )}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          aria-label="Previous Page"
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page + 1)}
          disabled={page === 2}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Success;