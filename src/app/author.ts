export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '123 4567890',
    gender: 'male',
    ipAddress: '192.168.1.1'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '987 654 3210',
    gender: 'female',
    ipAddress: '192.168.1.2'
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@example.com',
    phone: '555 123 4567',
    gender: 'female',
    ipAddress: '192.168.1.3'
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob@example.com',
    phone: '555 987 6543',
    gender: 'male',
    ipAddress: '192.168.1.4'
  },
  {
    id: 5,
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie@example.com',
    phone: '555 555 5555',
    gender: 'male',
    ipAddress: '192.168.1.5'
  }
];
