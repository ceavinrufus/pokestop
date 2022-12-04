export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeEachFirstLetter(str, splitter) {
  const arr = str.split(splitter);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");

  return str2;
}
