




export type TUser = {
  _id: string;
  id: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  password: string;
  createdAt: string;
  status: 'in-progress' | 'blocked';
  updatedAt: string;
  isDeleted: boolean;
};
