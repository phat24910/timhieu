export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    gender: 'male',
    ipAddress: '192.168.1.1'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    gender: 'female',
    ipAddress: '192.168.1.2'
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@example.com',
    gender: 'female',
    ipAddress: '192.168.1.3'
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob@example.com',
    gender: 'male',
    ipAddress: '192.168.1.4'
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie@example.com',
    gender: 'male',
    ipAddress: '192.168.1.5'
  }
];
