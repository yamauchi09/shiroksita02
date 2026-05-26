let dictionary = [];

fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    dictionary = data;
    console.log('辞書読み込み成功', dictionary);
  })
  .catch(error => {
    console.error('JSON読み込み失敗', error);
  });

function searchWord() {
  const input = document.getElementById('searchBox').value;

  const result = dictionary.find(
    item => item.word === input
  );

  const output = document.getElementById('result');

  if (result) {
    output.textContent = result.meaning;
  } else {
    output.textContent = '見つかりません';
  }
}
