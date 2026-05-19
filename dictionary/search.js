let words = [];

fetch('words.json')
  .then(response => response.json())
  .then(data => {
    words = data;
    displayResults(words);
  });

const searchBox = document.getElementById('searchBox');
const results = document.getElementById('results');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();

  const filtered = words.filter(word =>
    word.word.toLowerCase().includes(query) ||
    word.meaning.includes(query)
  );

  displayResults(filtered);
});

function displayResults(list) {
  results.innerHTML = '';

  list.forEach(word => {
    const div = document.createElement('div');
    div.className = 'result';

    div.innerHTML = `
      <a href="entry.html?file=${word.file}">
        <h3>${word.word}</h3>
      </a>
      <p>${word.meaning}</p>
      <small>${word.pos}</small>
    `;

    results.appendChild(div);
  });
}
