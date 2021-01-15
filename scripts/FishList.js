/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { Fish } from "./Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"

export const FishList = () => {
  // debugger
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft")
  
  const holyFishArray = mostHolyFish()
  // console.log("holyFish", holyFishArray)

  const soldierFishArray = soldierFish()
  // console.log("soldierFish", soldierFishArray)

  const regularFishArray = nonHolyFish()
  // console.log("soldierFish", regularFishArray)

  let holyFishHTMLRepresentation = "<h3>Holy Fish</h3>"
  for (const fishObj of holyFishArray) {

    holyFishHTMLRepresentation += Fish(fishObj)
    console.log(holyFishHTMLRepresentation)
  }

  let soldierFishHTMLRepresentation = "<h3>Solider Fish</h3>"
  for (const fishObj of soldierFishArray) {

    soldierFishHTMLRepresentation += Fish(fishObj)
    console.log(soldierFishHTMLRepresentation)
  }

  let regularFishHTMLRepresentation = "<h3>Regular Fish</h3>"
  for (const fishObj of soldierFishArray) {

    regularFishHTMLRepresentation += Fish(fishObj)
    console.log(regularFishHTMLRepresentation)
  }




  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${holyFishHTMLRepresentation}
          ${soldierFishHTMLRepresentation}
          ${regularFishHTMLRepresentation}
      </article>
  `
}
