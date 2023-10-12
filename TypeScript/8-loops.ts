let number = 1;

// continue => skip and go for next
// break => go outside of the while
while (number <= 10) {
  console.log(number++);
}

while (number <= 20) {
  if (number % 2 === 0) {
    number++;
    continue;
  }
  console.log(number++);
}
