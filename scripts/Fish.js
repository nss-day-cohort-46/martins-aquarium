/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (burrito) => {
  return `
      <div class="fishCard">
      <p class="fishCard__name">${burrito.name}</p>
      <p class="fishCard__species">${burrito.species}</p>
      <p class="fishCard__location">${burrito.location}</p>
      <p class="fishCard__length">${burrito.length}</p>
      <p class="fishCard__diet">${burrito.diet}</p>
      <img src="${burrito.image}" alt="fish image" class="fishCard__img">
    </div>
  `
}
