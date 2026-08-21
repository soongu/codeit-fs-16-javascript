// ~/js-study/mix-error.js
const nickname = null;

const displayName = (nickname ?? "손님") || "익명";

console.log(displayName);