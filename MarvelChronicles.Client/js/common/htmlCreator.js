export const returnCard = (imageURL, title, description, labelText) => {
    return `
        <div class="card">
            <div class="card__header">
            <img src=${imageURL} 
          alt="card__image" class="card__image" width="600" height="300">
</div>
<div class="card__body">
  <span class="tag tag-blue">${labelText}</span>
  <h4>${title}</h4>
  <p>${!description ? 'No description available.' : description}</p>
</div>
</div>
</div>`;
};