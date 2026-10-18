# Character and Word Counter

A simple text-area tool that counts characters, words, and sentences live as the user types.

Built as **Task 18** (Level 1, Day 18) of the Veda Technology Web Development internship.

## Features

- Live character count
- Live character count without spaces
- Live word count
- Live sentence count (optional deliverable)
- "Clear text" button
- Responsive layout for desktop and mobile

## Tools Used

- HTML5
- CSS3
- JavaScript

## Project Structure

```
character-word-counter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in any web browser.
4. Start typing in the text area and watch the counts update.

## How It Works

- **Input event:** the `input` event on the textarea runs `updateCounts()` every time the text changes.
- **Characters:** `text.length` counts everything typed. Removing whitespace with `replace(/\s/g, "")` gives the count without spaces.
- **Words:** the text is trimmed first, then split on whitespace using `split(/\s+/)`. Trimming and the empty-string check make sure an empty box shows 0 words, and the `\s+` pattern means multiple spaces between words are treated as one separator.
- **Sentences:** the text is split on `.`, `!` and `?`, and empty pieces are ignored.
- **Live DOM updates:** the results are written to the page with `textContent`.


## Author

Anna Makgabo Thantsha# character-and-word-counter
