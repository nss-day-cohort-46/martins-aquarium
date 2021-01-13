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
    length: "couple inches",
    image: "https://pixy.org/src/428/4287617.jpeg"
  },
  {
    name: "Marlin",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: "couple inches + 2",
    image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg"
  },
  {
    name: "Barry",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: "couple inches",
    image: "https://miro.medium.com/max/10216/1*Tp9sUfKtPSZX6EPgkdFi2Q.jpeg"
  },
  {
    name: "Bob",
    diet: "seafood",
    species: "Amphiprioninae",
    location: "Great Barrier Reef, Australia",
    length: "couple inches",
    image: "https://www.popsci.com/resizer/_qfajg4kdsuGsvZ8URjo3iW0Nxg=/1200x628/smart/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/4DTKWWI33BGEXA3JNUCPECXGOA.jpg"
  }
]

export const useFish = () => {
  return fishCollection.slice()
}
