import React, { useEffect, useState } from 'react'
import { UserResponse, User } from '../interfaces/User'
import uroApi from '../api/uroApi';

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getUsers();
    getUserAuthenticated()
  },[]);

  const getUserAuthenticated = async () => {
    const res = await uroApi.get<User>(`/auth/user`)
    setUser(res.data)
  }

  const getUsers = async () => {
    // const res = await cancerVejigaDB.get<User>('/user');
    // setAllUsers(res.data.users);
    setIsLoading(false);
  };

  return {
    user,
    allUsers,
    isLoading,
  };
}
