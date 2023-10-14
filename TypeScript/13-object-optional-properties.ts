type User = {
  name: string;
  family: string;
  phoneNumber?: string;
};

const myUser: User = {
  name: "Heisam",
  family: "Aleali",
  phoneNumber: "09027102926",
};

// we can only delete optional user
delete myUser.phoneNumber;

// remember that objects are reference type
