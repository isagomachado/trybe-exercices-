let maxNumbers = 50
let takenumber = 0


for (let index = 0; index < maxNumbers; index += 1){
  console.log(index % index !== 0)
  if (index % index !== 0){
    takenumber = index
  }
}

console.log(takenumber)