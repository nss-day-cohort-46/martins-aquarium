/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { Fish } from "./Fish.js"
import { mostHolyFish, nonHolyFish, soldierFish } from "./FishDataProvider.js"

const buildFishListHTML = (arrayOfFish, heading) => {

  let fishHTMLRepresentation = `<h3>${heading}</h3>`
  for (const fishObj of arrayOfFish) {

    fishHTMLRepresentation += Fish(fishObj)
    console.log(fishHTMLRepresentation)
  }

  return fishHTMLRepresentation

}

export const FishList = () => {
  // debugger
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft")
  
  const holyFishArray = mostHolyFish()
  // console.log("holyFish", holyFishArray)
  const holyFishHTMLRepresentation = buildFishListHTML(holyFishArray, "Holy Fish")

  const soldierFishArray = soldierFish()
  // console.log("soldierFish", soldierFishArray)
  const soldierFishHTMLRepresentation = buildFishListHTML(soldierFishArray, "Soldier Fish")
  
  const regularFishArray = nonHolyFish()
  // console.log("regularFish", regularFishArray)
  const regularFishHTMLRepresentation = buildFishListHTML(regularFishArray, "Regular Fish")

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${holyFishHTMLRepresentation}
          ${soldierFishHTMLRepresentation}
          ${regularFishHTMLRepresentation}
      </article>
  `
}
