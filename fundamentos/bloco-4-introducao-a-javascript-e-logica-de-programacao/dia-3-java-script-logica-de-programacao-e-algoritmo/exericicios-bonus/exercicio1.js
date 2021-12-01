let n = 5;

let espaço = "";

for (let i = 0; i < n; i += 1) {
  let asterisco = "";
  for (let index = 0; index < n; index += 1) {
    asterisco = asterisco + "*";
  }
  console.log(asterisco);
}
