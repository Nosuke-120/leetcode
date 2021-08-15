const reverseWords = s => {
  return s
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ")
} 