function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let result = '';
  let words = text.split(' ');

  if (namingConvention == 'Camel Case') {
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      if (index !=  0) {
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
      }
    }
  } else if (namingConvention == 'Pascal Case') {

  } else {
    return document.getElementById('return').textContent = 'Error!';
  }
}