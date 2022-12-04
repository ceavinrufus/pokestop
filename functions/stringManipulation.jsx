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

export function meterToFeet(meter) {
  let m1 = meter * 3.2808;
  let s1 = Math.floor(m1);
  let s2 = Math.round(12 * (m1 - s1), 2);
  return s1 + "'" + s2 + '"';
}
