let words = [];

fetch('words.json')
  .then(response => response.json())
  .then(data => {
    words = data;
  });

const searchBox = document.getElementById('searchBox');
const results = document.getElementById('results');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();

  results.innerHTML = '';

  const filtered = words.filter(word =>
    word.word.toLowerCase().includes(query) ||
    word.meaning.includes(query)
  );

  filtered.forEach(word => {
    const div = document.createElement('div');
    div.className = 'result';

    div.innerHTML = `
      <h3>${word.word}</h3>
      <p>${word.meaning}</p>
      <small>${word.pos}</small>
    `;

    results.appendChild(div);
  });
});
