import { getUsers } from '../services/users';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from '../types';

export const fetchUsers = createAsyncThunk<IUser[]>('USERS_FETCH', async () => {
  const res = await getUsers();
  console.log({res});
  return res;  
});