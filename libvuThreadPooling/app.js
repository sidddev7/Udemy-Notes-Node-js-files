const crypto = require("node:crypto");

// const hash = crypto.pbkdf2Sync("Hello", "salt", 100000, 512, "sha512");
process.env.UV_THREADPOOL_SIZE = 4;
const MAX_CALLS = 4;
for (let index = 0; index < MAX_CALLS; index++) {
  const start = Date.now();
  console.log("Started", index);
  crypto.pbkdf2(
    `Siddhraj${index}`,
    "salt",
    10000,
    512,
    "sha512",
    (err, key) => {
      console.log(`Timetaken for ${index}`, Date.now() - start);
    }
  );
}
