const mynums: number[] = [1, 2, 3];

for (const number of mynums) {
  console.log(number);
}

type Args = {
  searchValue: any;
  arrayTosearch: any[];
};

function containes({ searchValue, arrayTosearch }: Args): boolean {
  for (const value of arrayTosearch) {
    if (value === searchValue) return true;
  }
  return false;
}

console.log(containes({ searchValue: 5, arrayTosearch: [1, 2, 5] }));

type Student = {
  name: string;
  lastName: string;
  age: number;
};

type NewStudent = {
  name: string;
  lastName: string;
  isAdult: boolean;
};

const students: Student[] = [{ name: "heisam", lastName: "Alali", age: 32 }];

// the map method will return new array so it will not change the main arrary
const resultOfNewStudents: NewStudent[] = students.map(({ age, ...rest }) => {
  return {
    ...rest,
    isAdult: age > 18 ? true : false,
  };
});

console.log(resultOfNewStudents);

// the find method will return the first element that satisfy the condition
console.log(resultOfNewStudents.find((student) => student.isAdult));

// the filter method remove items that condition will be false and for condition true the element will be kept
console.log(resultOfNewStudents.filter((student) => student.isAdult));

// the every method is like the all method in c# it will check all element satisfy the condition
console.log(resultOfNewStudents.every((student) => student.isAdult));

// the some method is like any in c#
console.log(resultOfNewStudents.some((student) => student.isAdult));

// the reduce method will give us the ability to iterate between previous value and current value
// this will add the age of all students
console.log(
  students.reduce((accumulator, currentstudent) => {
    return accumulator + currentstudent.age;
  }, 0)
);

const words = ["a", "ab", "abc", "abcd", "b", "c"];
const longestword = words.reduce((prev, next) => {
  return prev.length > next.length ? prev : next;
});
console.log(longestword);
