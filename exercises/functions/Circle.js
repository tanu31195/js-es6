const circle = {
  radius: 2,
  get area() {
      return Math.PI * this.radius * this.radius;
  } ,
  // set rad(rad) {
  //     this.radius = rad;
  // }
};

console.log(circle.area);
circle.radius = 1;
console.log(circle.area);
