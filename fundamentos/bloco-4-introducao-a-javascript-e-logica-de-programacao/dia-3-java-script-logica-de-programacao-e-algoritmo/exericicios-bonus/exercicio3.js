let n = 5;

for (let i = 1; i <= n; i += 1) {
  let asterisco = "";
  for (let index = 0; index < n; index += 1) {
    const aux = n - i;
    if (index < aux){
      asterisco = asterisco + " ";
    } else {
      asterisco = asterisco + "*";
    }
  }
  console.log(asterisco);
}
