function localStorageSet(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function localStorageGet(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
