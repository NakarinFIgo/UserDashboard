import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  city: string;
  gender: string;
  image: string;
  user: string;
  email: string;
  id: number;
  lorem: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: "ascending" | "descending";
  } | null>(null);
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return filteredUsers;

    const sortedArray = [...filteredUsers].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === "string" && typeof bValue === "string") {
        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "ascending"
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });

    return sortedArray;
  }, [filteredUsers, sortConfig]);

  const handleSort = (key: keyof User) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className="table">
        <thead>
          <tr>
          <th onClick={() => handleSort("id")}>
              ID
              <span className="sort-icon">
                {sortConfig?.key === "id" &&
                  (sortConfig.direction === "ascending" ? (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 10l6 6 6-6H6z" />
                    </svg> 
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 14l6-6 6 6H6z" />
                    </svg> 
                  ))}
              </span>
            </th>
            <th onClick={() => handleSort("name")}>
              Name
              <span className="sort-icon">
                {sortConfig?.key === "name" &&
                  (sortConfig.direction === "ascending" ? (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 10l6 6 6-6H6z" />
                    </svg> 
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 14l6-6 6 6H6z" />
                    </svg> 
                  ))}
              </span>
            </th>
            <th onClick={() => handleSort("user")}>
              Username
              <span className="sort-icon">
                {sortConfig?.key === "user" &&
                  (sortConfig.direction === "ascending" ? (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 10l6 6 6-6H6z" />
                    </svg> 
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 14l6-6 6 6H6z" />
                    </svg> 
                  ))}
              </span>
            </th>
            <th onClick={() => handleSort("email")}>
              Email
              <span className="sort-icon">
                {sortConfig?.key === "email" &&
                  (sortConfig.direction === "ascending" ? (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 10l6 6 6-6H6z" />
                    </svg> 
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 14l6-6 6 6H6z" />
                    </svg> 
                  ))}
              </span>
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} onClick={() => handleRowClick(user.id)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.user}</td>
              <td>{user.email}</td>
              <td>{user.lorem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
