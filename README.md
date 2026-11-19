# Aksara Sunda ⇄ Aksara Latén

A zero-dependency, bidirectional web transliteration tool between **Latin script** and **Sundanese script** (*Aksara Sunda*), supporting both the modern **Aksara Sunda Baku** Unicode standard and classical **Sunda Buhun** manuscript conventions.

---

## Features

### 1. Bidirectional Transliteration (*Liron Arah*)
- **Latin → Sundanese (`Aksara Latén → Aksara Sunda`):**
  - Real-time conversion handling Sundanese vowel distinctions: `e` (*pamepet* — e.g., *seblak, segah*), `é` (*panéléng* — e.g., *sapédah, kasép*), and `eu` (*paneuleung* — e.g., *Ciumbuleuit, peuyeum*).
  - **Orthographic Normalization:** Automatically normalizes legacy spelling (such as *oe*, *tj*, *dj*, *ch*, *ñ*) and loanword consonants (*sh/sy*, *dh*, *th*, *gh*, *ph/fh*, etc.) as well as common localized words (*solat*, *sabar*, *sidekah*, *naséhat*) into accurate Sundanese phonetic mappings.
  - **Sundanese Numerals:** Automatically wraps numbers in traditional pipe delimiters (e.g., `2026` → `|᮲᮰᮲᮶|`).
- **Sundanese → Latin (`Aksara Sunda → Aksara Latén`):**
  - Supports pasting raw Unicode Sundanese text or typing directly with a Latin keyboard via the built-in **Live IME** engine, which converts syllables on the fly while preserving cursor position.
  - Automatic sentence-initial capitalization in Latin output.

### 2. Sunda Buhun Mode & Manuscript Styles
Toggle **Sunda Buhun** to enable classical manuscript characters, diacritics, and punctuation rules:
- **Archaic Characters & *Rarangkén*:** Supports `ᮽ` (*bha*), `ᮺ` (*avagraha* via `'`), `ᮻ` (*pangreureu* / standalone *reu*), `ᮼ` (*pangwilet* / standalone *leu*), medial *papasangan* (`-wa` `◌ᮭ`, `-ma` `◌ᮬ`), and final consonants (`-k` `ᮾ`, `-m` `ᮿ`).
- **Historical Punctuation Styles:**
  - **Naskah Sajarah:** Maps `,` → `᳃` (*Bindu Cakra*), `;` → `᳁` (*Bindu Panglong*), and `.` → `᳂` (*Bindu Purnama*).
  - **Naskah Religi:** Maps `,` → `᳃` (*Bindu Cakra*), `;` → `᳂` (*Bindu Purnama*), and `.` → `᳀` (*Bindu Surya*).
  - **Gaya Prasasti:** Maps `,` → `|` and sentence-ending punctuation (`.`, `;`, `!`, `?`) → `||` for stone inscription conventions.
- **Structural Formatting (*Satanga*):** Converts double line breaks into stanza dividers (`᳇᳇`) and list markers (`- `) into bullet markers (`᳇`) in historical/religious manuscript styles.
- **Diplomatic vs. Translated Output (*Tarjamahkeun Bindu*):** In Sundanese → Latin mode, switch between preserving raw *Bindu* / inscription markers or translating them into modern punctuation.

### 3. Interactive Reference & Draggable Virtual Keyboard (*Kibor Sunda*)
- **Always-Visible Character Guide:** Categorized reference grid (*Angka Sunda*, *Aksara Swara*, *Rarangkén*, *Aksara Ngalagena*, *Aksara Khusus Sunda Buhun*, and *Karakter Bindu*) with hover tooltips, click-to-insert functionality, and expandable descriptions (*Katerangan*).
- **Floating Draggable Keyboard:** Available in Sundanese → Latin mode via **⌨ Kibor Sunda**, featuring a 12-column character layout and a fixed bottom dock with space, backspace, newline, and a 3-state symbol switcher (`=\<`).

### 4. Context-Aware Sample Sentences (*Cobi Conto Kalimah*)
- Cycles through curated Sundanese sentences spanning historical, religious, and epigraphic contexts while automatically synchronizing the *Sunda Buhun* manuscript style dropdown.

---

## Project Structure

```text
├── index.html        # Main UI layout, interactive character reference, and floating keyboard markup
├── style.css         # Responsive layout, theme styling, and Noto Sans Sundanese typography rules
└── transliterate.js  # Bidirectional transliteration engine, Live IME, normalizer, and UI state logic