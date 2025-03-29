import React from "react";
import "./index.css";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <article className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card shadow user-card p-4">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">
            {user.first_name} {user.last_name}
          </h3>
          <p className="card-text">{user.email}</p>
          <button
            className="btn btn-primary me-2"
            onClick={() => onEdit(user.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;