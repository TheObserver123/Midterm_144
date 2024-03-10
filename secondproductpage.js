fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const cardsContainer = document.getElementById('cardsContainer');
    products.slice(3, 6).forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span>${product.price}</span>
      `;
      cardsContainer.appendChild(card);
    });
  });