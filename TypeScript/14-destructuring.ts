type Car = {
  name: string;
  price: number;
  options: {
    color: string;
    speed: number;
  };
};

const car: Car = {
  name: "peykan",
  price: 200,
  options: {
    color: "red",
    speed: 200,
  },
};

const getCarSpeed = ({ options }: Car) => {
  return options.speed;
};
console.log(getCarSpeed(car));

const {
  options: { color, speed },
  ...theRestInfo
} = car;
console.log(color);
console.log(speed);
