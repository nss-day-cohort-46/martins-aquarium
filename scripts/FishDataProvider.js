/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
  {
    name: "Nemo",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: 3,
    image: "https://pixy.org/src/428/4287617.jpeg"
  },
  {
    name: "Marlin",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: 15,
    image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
  },
  {
    name: "Barry",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: 7,
    image: "https://miro.medium.com/max/10216/1*Tp9sUfKtPSZX6EPgkdFi2Q.jpeg"
  },
  {
    name: "Bob",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: 21,
    image: "https://www.popsci.com/resizer/_qfajg4kdsuGsvZ8URjo3iW0Nxg=/1200x628/smart/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4DTKWWI33BGEXA3JNUCPECXGOA.jpg"
  }
]

export const useFish = () => {
  return fishCollection.slice()
}

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = []

  for (const fishObject of fishCollection) {
    if (fishObject.length % 3 === 0) {
      holyFish.push(fishObject)
    }
  }
  // console.log("array of holy fish", holyFish)
  
  return holyFish
}

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish

  const soldiers = []

  for (const fishObject of fishCollection) {
    if (fishObject.length % 5 === 0) {
      soldiers.push(fishObject)
    }
  }
  // console.log("array of soldier fish", soldiers)

  return soldiers
}

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = []

  for (const fishObject of fishCollection) {
    if (fishObject.length % 5 !== 0 && fishObject.length % 3 !== 0) {
      regularFish.push(fishObject)
    }
  }
  // console.log("array of regular fish", regularFish)
  return regularFish
}
