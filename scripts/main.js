console.log("Hello and welcome to Martin's Aquarium")

import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

console.log("array of fish objects", allTheFish)

for (const fish of allTheFish) {
  console.log(fish)
}
