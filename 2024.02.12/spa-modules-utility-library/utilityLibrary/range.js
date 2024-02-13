function range(num1, num2) {
  let result = [];
  for (let i = num1; i <= num2; i++) result.push(i);
  return result;
}

export { range }; // named export
