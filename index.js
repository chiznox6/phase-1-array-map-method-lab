const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const specialWords = {
    "api": "API",
    "oo": "OO",
    "jsonp": "JSONP",
    "nan": "NaN",
    "constructor": "Constructor",
    "preventdefault": "PreventDefault",
    "stoppropagation": "StopPropagation"
  };

  return tutorials.map(tutorial => {
    return tutorial
      .split(" ")
      .map(word => {
        const lower = word.toLowerCase();
        return specialWords[lower] || (word[0].toUpperCase() + word.slice(1).toLowerCase());
      })
      .join(" ");
  });
}
