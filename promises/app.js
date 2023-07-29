function checkNumber(n, delay = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        resolve(`${n} is Even`);
      } else {
        reject(`${n} is not even`);
      }
    }, delay);
  });
}

checkNumber(3000)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
