import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  name: string;
  city: string;
  gender: string;
  image: string;
  user: string;
  email: string;
  id: number;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="user-list-items">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-list-item">
            <Link to={`/user/${user.id}`} className="user-link">
              <img src={user.image} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
