const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const charNoSpaceCount = document.getElementById("char-no-space-count");
const wordCount = document.getElementById("word-count");
const sentenceCount = document.getElementById("sentence-count");
const clearBtn = document.getElementById("clear-btn");

function updateCounts() {
  const text = textInput.value;
  const trimmed = text.trim();

  // Characters (everything typed) and characters without any whitespace
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  // Words: trim first, then split on one or more whitespace characters.
  // The empty-string check avoids the "".split() -> [""] trap (length 1).
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;

  // Sentences: split on . ! ? (handles "..." and "?!") and ignore empty pieces
  const sentences = trimmed === ""
    ? 0
    : trimmed.split(/[.!?]+/).filter(part => part.trim() !== "").length;

  charCount.textContent = characters;
  charNoSpaceCount.textContent = charactersNoSpaces;
  wordCount.textContent = words;
  sentenceCount.textContent = sentences;
}

textInput.addEventListener("input", updateCounts);

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  updateCounts();
  textInput.focus();
});

updateCounts();