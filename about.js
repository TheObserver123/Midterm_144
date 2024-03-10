fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const authors = data.authors;
    const cardsContainer = document.getElementById('cardsContainer');
    authors.forEach(author => {
      const card = document.createElement('div');
      card.classList.add('aboutcard');
      card.innerHTML = `
        <img src="${author.image}" alt="${author.name}">
        <h2>${author.name}</h2>
        <p><strong>Email</strong>: ${author.email}</p>
      `;
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching authors:', error));