import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../data/mockData';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id || '', 10);
  const user = users.find(user => user.id === userId);

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-detail">
      <img src={user.image} alt={user.name} className="user-detail-avatar" />
      <h2 className="user-detail-name">{user.name}</h2>
      <p className="user-detail-info">City: {user.city}</p>
      <p className="user-detail-info">Gender: {user.gender}</p>
      <p className="user-detail-info">Username: {user.user}</p>
      <p className="user-detail-info">Email: {user.email}</p>
      <p className="user-detail-info">Tel: {user.phone}</p>
    </div>
  );
};

export default UserDetail;
