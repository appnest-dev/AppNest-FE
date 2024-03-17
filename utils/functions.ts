export function toCamelCase(string: string) {
  const STRING = string.trim();

  return STRING.split(" ").length == 1
    ? `${STRING[0].toLowerCase()}${STRING.slice(1)}`
    : `${STRING[0].toLowerCase()}${STRING.split(" ")
        .map((str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`)
        .join("")
        .slice(1)}`;
}

export function removeMark(string: string) {
  return string.trim()[string.length - 1] == "?"
    ? string.trim().slice(0, string.length - 1)
    : string.trim();
}
