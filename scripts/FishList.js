/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft")
  const fishArray = useFish()
  console.log("FishList: fishes", fishArray)

  let fishHTMLRepresentation = ""
  for (const fishObj of fishArray) {
    /*
        Invoke the Fish component function
        and pass the current fish object as an argument.
        Each time, add the return value to the
        fishHTMLRepresentations variable with `+=`
    */
    fishHTMLRepresentation += Fish(fishObj)
    console.log(fishHTMLRepresentation)
  }


  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${fishHTMLRepresentation}
      </article>
  `
}
