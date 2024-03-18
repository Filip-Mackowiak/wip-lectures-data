const cities = [
  { id: 1, name: 'New York', age: 397 },
  { id: 2, name: 'Los Angeles', age: 240 },
  { id: 3, name: 'Chicago', age: 184 },
  { id: 4, name: 'San Francisco', age: 245 },
  { id: 5, name: 'Miami', age: 125 },
  { id: 6, name: 'Houston', age: 184 },
  { id: 7, name: 'Seattle', age: 152 },
  { id: 8, name: 'Boston', age: 391 },
  { id: 9, name: 'Austin', age: 182 },
  { id: 10, name: 'Denver', age: 163 },
  { id: 11, name: 'Las Vegas', age: 110 },
  { id: 12, name: 'Philadelphia', age: 339 },
  { id: 13, name: 'Phoenix', age: 140 },
  { id: 14, name: 'Portland', age: 170 },
  { id: 15, name: 'Atlanta', age: 174 }
];

const people = [
  {
    'name': 'John Smith',
    'age': 30,
    'gender': 'male',
    'occupation': 'Engineer',
    'cityId': 1
  },
  {
    'name': 'Emily Johnson',
    'age': 28,
    'gender': 'female',
    'occupation': 'Doctor',
    'cityId': 1
  },
  {
    'name': 'Michael Brown',
    'age': 35,
    'gender': 'male',
    'occupation': 'Teacher',
    'cityId': 1
  },
  {
    'name': 'Jessica Lee',
    'age': 25,
    'gender': 'female',
    'occupation': 'Software Developer',
    'cityId': 4
  },
  {
    'name': 'David Rodriguez',
    'age': 40,
    'gender': 'male',
    'occupation': 'Lawyer',
    'cityId': 3
  },
  {
    'name': 'Sarah Martinez',
    'age': 32,
    'gender': 'female',
    'occupation': 'Accountant',
    'cityId': 3
  },
  {
    'name': 'Christopher Wilson',
    'age': 45,
    'gender': 'male',
    'occupation': 'Architect',
    'cityId': 7
  },
  {
    'name': 'Olivia Taylor',
    'age': 29,
    'gender': 'female',
    'occupation': 'Graphic Designer',
    'cityId': 9
  },
  {
    'name': 'Daniel Thomas',
    'age': 33,
    'gender': 'male',
    'occupation': 'Entrepreneur',
    'cityId': 9
  },
  {
    'name': 'Ava Garcia',
    'age': 27,
    'gender': 'female',
    'occupation': 'Marketing Manager',
    'cityId': 12
  },
  {
    'name': 'James Clark',
    'age': 38,
    'gender': 'male',
    'occupation': 'Chef',
    'cityId': 12
  },
  {
    'name': 'Sophia Hernandez',
    'age': 31,
    'gender': 'female',
    'occupation': 'Engineer',
    'cityId': 12
  },
  {
    'name': 'Matthew White',
    'age': 36,
    'gender': 'male',
    'occupation': 'Architect',
    'cityId': 13
  },
  {
    'name': 'Emma Anderson',
    'age': 26,
    'gender': 'female',
    'occupation': 'Writer',
    'cityId': 14
  },
  {
    'name': 'William Martin',
    'age': 34,
    'gender': 'male',
    'occupation': 'Software Engineer',
    'cityId': 15
  }
];

// CommonJS modules are the original way to package JavaScript code for Node.js. Each file is treated as a separate module
module.exports = {
  people,
  cities
};
