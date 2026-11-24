// =========================================================
// KAMUS TERJEMAHAN ANTARMUKA (BASA SUNDA & ENGLISH)
// =========================================================
const I18N_DATA = {
  su: {
    pageTitle: 'Aksara Sunda ⇄ Aksara Latén',
    pageDesc: 'Alat alih aksara / transliterasi / konversi dua arah antara Aksara Latén sareng Aksara Sunda Baku atanapi Sunda Buhun, dilengkepan ku kibor virtual, pituduh rarangkén, sarta karakter Bindu.',
    langMenuAria: 'Pilih basa antarmuka',
    langBtnTitle: 'Gentos basa antarmuka',
    themeSwitchAria: 'Gentos tema poék atanapi caang',
    themeSwitchTitle: 'Gentos tema tampilan (Caang / Poék)',

    titleLatinToSunda: 'Aksara Latén <span class="arrow">→</span> Aksara Sunda',
    titleSundaToLatin: 'Aksara Sunda <span class="arrow">→</span> Aksara Latén',
    subtitleLatinToSunda: 'Ketik téks basa Sunda nganggo huruf <strong class="notranslate" translate="no">e</strong> (pepet), <strong class="notranslate" translate="no">é</strong> (téléng), sareng <strong class="notranslate" translate="no">eu</strong> (teuleung) anu leres supados hasilna merenah.',
    subtitleSundaToLatin: 'Ketik langsung ku kibor Latén anu téksna otomatis robih janten Aksara Sunda atanapi ketik / témpél Aksara Sunda, teras kaluar hasil Laténna.',

    swapBtn: 'Liron Arah',
    swapBtnFeedback: 'Arah Dilironkeun!',
    swapBtnTitle: 'Liron arah alih aksara',
    fpSwapBtn: 'Liron',
    fpSwapBtnFeedback: 'Diliron!',

    labelLatin: 'Aksara Latén',
    labelSunda: 'Aksara Sunda',
    fpTagLatin: 'Latén',
    fpTagSunda: 'Sunda',

    insertCharTitle: (ch) => `Selapkeun aksara ${ch}`,
    kbBtn: 'Kibor Sunda',
    kbBtnTitle: 'Buka popup kibor Aksara Sunda',
    clearBtn: 'Hapus',
    clearBtnFeedback: 'Dihapus!',
    clearBtnTitle: 'Hapus sadaya téks',
    pasteBtn: 'Témpél',
    pasteBtnFeedback: 'Ditémpél!',
    pasteBtnTitle: 'Témpél téks tina clipboard',
    copyBtn: 'Tiron',
    copyBtnFeedback: 'Ditiron!',
    copyBtnTitle: 'Tiron hasil alih aksara kana clipboard',
    sampleBtn: 'Cobi conto kalimah',
    charCount: (n) => `${n} aksara`,

    buhunStyleTitle: 'Pilih gaya tanda baca naskah Sunda Buhun',
    styleSajarahHtml: 'Gaya Sajarah',
    styleReligiHtml: 'Gaya Religi',
    stylePrasastiHtml: 'Gaya Prasasti',
    styleSajarahShort: 'Gaya Sajarah',
    styleReligiShort: 'Gaya Religi',
    stylePrasastiShort: 'Gaya Prasasti',
    styleSajarahFull: 'Gaya Sajarah',
    styleReligiFull: 'Gaya Religi',
    stylePrasastiFull: 'Gaya Prasasti',

    toggleDetailsLabel: 'Conto & Katerangan',
    toggleDetailsTitle: 'Témbongkeun conto kecap, kalimah, jeung katerangan unggal karakter',
    exampleWordPrefix: 'Conto:',
    exampleSentencePrefix: 'Conto kalimah:',
    soundEquivPrefix: '',
    angkaExampleHtml: '<strong>Conto panulisan angka:</strong> <span class="sunda-inline notranslate" translate="no">|᮱᮹᮳᮳|</span> = <em class="notranslate" translate="no">1933</em> (angka sok diapit ku tanda garis nangtung <code>|...|</code>)',

    buhunToggleTitle: 'Aktifkeun papagon aksara sareng tanda baca Sunda Buhun',
    binduToggle: 'Alih Aksara Simbol Bindu',
    binduToggleTitle: 'Alih aksarakeun simbol Bindu sareng garis prasasti kana tanda baca modéren',

    inputPlaceholderLatin: 'Ketik téks basa Sunda di dieu, pastikeun nganggo huruf e/é/eu anu leres...',
    inputPlaceholderSunda: 'ᮊᮨᮒᮤᮊ᮪ ᮊᮥ ᮃᮊ᮪ᮞᮛ ᮞᮥᮔ᮪ᮓ ᮓᮤ ᮓᮤᮉ...',
    outputPlaceholderSunda: 'ᮠᮞᮤᮜ᮪ᮔ ᮘᮊᮜ᮪ ᮊᮜᮥᮃᮁ ᮓᮤ ᮓᮤᮉ...',
    outputPlaceholderLatin: 'Conto hasil: Wilujeng sumping di Bandung.',

    fpInputPlaceholderLatin: 'Ketik nganggo e/é/eu anu leres...',
    fpInputPlaceholderSunda: 'ᮊᮨᮒᮤᮊ᮪ ᮓᮤ ᮓᮤᮉ...',
    fpOutputPlaceholderSunda: 'ᮠᮞᮤᮜ᮪ ᮃᮜᮤᮂ ᮃᮊ᮪ᮞᮛ...',
    fpOutputPlaceholderLatin: 'Hasil alih aksara...',

    hintBaku: 'Standar Unicode Aksara Sunda Baku',
    hintSajarah: 'Sunda Buhun — Gaya Naskah Sajarah',
    hintReligi: 'Sunda Buhun — Gaya Naskah Religi',
    hintPrasasti: 'Sunda Buhun — Gaya Prasasti Batu',
    hintBinduOn: 'Alih Aksara Latén (Simbol Bindu Dialihaksarakeun)',
    hintBinduOff: 'Alih Aksara Diplomatik (Simbol Bindu Dipertahankeun)',

    guideE: '<span class="notranslate" translate="no">Pepet</span> (<em>seblak, segah</em>)',
    guideEAcute: '<span class="notranslate" translate="no">Téléng</span> (<em>sapédah, kasép</em>)',
    guideEu: '<span class="notranslate" translate="no">Teuleung</span> (<em>Ciumbuleuit, peuyeum</em>)',
    guideQuote: `<strong>Tanda petik</strong>: Upami di tengah kecap janten <em>glottal stop</em> (mis. <em class="notranslate" translate="no">Qur'an</em>) atanapi kanggo misahkeun digraf (mis. <em class="notranslate" translate="no">ad'ja</em>). Upami dina modeu buhun pola <code class="notranslate" translate="no">'a</code> janten <em>avagraha</em> <span class="sunda-inline notranslate" translate="no">ᮺ</span> (mis. <em class="notranslate" translate="no">alun'agung</em>). Upami di awal/tungtung kecap tetep janten tanda kutip biasa.`,

    refTitle: 'Pituduh & Daptar Aksara Sunda',
    refSubtitleDesktop: 'Sorot aksara kanggo ningali kateranganana, atanapi toél kanggo nyelapkeun kana kotak input.',
    refSubtitleTouch: 'Toél aksara kanggo nyelapkeun kana kotak input.',

    catAngka: 'Angka Sunda',
    catSwara: 'Aksara Swara',
    catRarangken: 'Rarangkén (Baku & Buhun)',
    catNgalagena: 'Aksara Ngalagena',
    catBuhunKhusus: 'Aksara Khusus Sunda Buhun',
    catBindu: 'Karakter Bindu (Tanda Baca Naskah Kuna / Sunda Buhun)',
    toggleDescLabel: 'Katerangan',
    toggleDescBuhunTitle: 'Témbongkeun atanapi sumputkeun katerangan unggal aksara',
    toggleDescBinduTitle: 'Témbongkeun atanapi sumputkeun katerangan karakter Bindu sareng papagon struktur naskah',

    pipeLabel: 'garis tegak (pangapit angka / tanda prasasti)',
    pipeTooltip: 'Garis Tegak (|): Pangapit angka Sunda (|᮲᮰᮲᮶|) atanapi tanda koma (|) / titik (||) dina prasasti batu',
    tipNumeral: (n) => `Angka Sunda: ${n}`,
    tipSwara: (v) => `Aksara Swara: ${v}`,
    tipRarangken: (lbl, morph, isBuhun) =>
      `${isBuhun ? 'Rarangkén Sunda Buhun' : 'Rarangkén'}: ${lbl}${morph ? ` ${morph}` : ''}`,
    tipNgalagena: (lbl, isBuhun) =>
      `${isBuhun ? 'Aksara Ngalagena Sunda Buhun' : 'Aksara Ngalagena'}: ${lbl}`,

    buhunKhususItems: [
      {
        s: 'ᮺ',
        label: 'avagraha',
        desc: "Ngaleungitkeun vokal -a saméméhna sarta muka vokal a- (otomatis maké pola <konsonan>'a dina modeu Buhun, mis. alun'agung)."
      },
      {
        s: 'ᮻ',
        label: 'pangreureu',
        sound: '(reu)',
        desc: 'Aksara khusus Sunda Buhun kanggo soanten reu.'
      },
      {
        s: 'ᮼ',
        label: 'pangwilet',
        sound: '(leu)',
        desc: 'Aksara khusus Sunda Buhun kanggo soanten leu.'
      }
    ],

    binduItems: [
      {
        char: '᳃',
        name: 'Bindu Cakra',
        category: 'Jeda & Panutup',
        desc: 'Tanda koma (,) universal kanggo randegan singget di tengah kalimah dina sagala rupi naskah.'
      },
      {
        char: '᳁',
        name: 'Bindu Panglong',
        category: 'Jeda & Panutup',
        desc: 'Tanda jeda sedeng (;) atanapi pamisah antarklausa/baris, khusus dina naskah anu témana kaagamaan.'
      },
      {
        char: '᳂',
        name: 'Bindu Purnama',
        category: 'Jeda & Panutup',
        desc: 'Tanda titik (.) utami dina naskah sajarah, atanapi turun janten titik koma (;) dina naskah kaagamaan.'
      },
      {
        char: '᳀',
        name: 'Bindu Surya',
        category: 'Jeda & Panutup',
        desc: 'Tanda titik panutup akhir (.) anu pangbeuratna, khusus dina naskah anu témana kaagamaan atanapi religius.'
      },
      {
        char: '᳅',
        name: 'Bindu Ka Satanga',
        category: 'Satanga (Struktur)',
        desc: 'Khusus papasangan sareng Bindu Purnama (᳅᳂᳅) kanggo nandakeun naskah anu témana sajarah atanapi kronik; teu dianggo ngapit simbol panonpoé.'
      },
      {
        char: '᳆',
        name: 'Bindu Da Satanga',
        category: 'Satanga (Struktur)',
        desc: 'Khusus papasangan sareng Bindu Surya (᳆᳀᳆) atanapi Bindu Panglong (᳆᳁᳆) kanggo nandakeun naskah anu témana kaagamaan, dua, atanapi piwuruk moral.'
      },
      {
        char: '᳇',
        name: 'Bindu Ba Satanga',
        category: 'Satanga (Struktur)',
        desc: 'Tiasa papasangan sareng dirina nyalira (᳇᳇) tanpa buleudan di tengah kanggo misahkeun bait puisi/paragraf anyar, atanapi nyalira di awal (᳇) salaku tanda butir wincikan.'
      },
      {
        char: '᳄',
        name: 'Bindu Leu Satanga',
        category: 'Satanga (Struktur)',
        desc: 'Dominan salaku ornamén éstétika palapis luar (bingkai hiasan tambihan) dina bagéan pangtungtungna bubuka atanapi panutup utami naskah (conto: ᳄᳆᳀᳆᳄).'
      }
    ],

    binduNotesHtml: `
      <div class="note-card">
        <h4>Pola Struktur Téks (Satanga di Awal)</h4>
        <ul>
          <li><strong>1. Hiji Satanga di Awal (Poin Wincikan Hampang):</strong> Dianggo kanggo daptar atanapi butir papagon supados hémat rohangan dina daun lontar. Conto: <span class="sunda-inline notranslate" translate="no">᳇</span> Poin kahiji <span class="sunda-inline notranslate" translate="no">᳇</span> Poin kadua <em>(dina input Latén tiasa nganggo tanda <code>- </code> di awal baris)</em>.</li>
          <li><strong>2. Dua Satanga Kembar di Awal (Gentosan Bait / Subbab):</strong> Nandakeun gentosan bait pupuh atanapi paragraf/jejer anyar anu langkung ageung (<span class="sunda-inline notranslate" translate="no">᳇᳇</span> di awal bagéan anyar).</li>
          <li><strong>3. Tilu Simbol di Awal (Bubuka Bab Utami):</strong> Susunan hiji buleudan Bindu diapit dua satanga di awal wungkul (<span class="sunda-inline notranslate" translate="no">᳆᳀᳆</span> / <span class="sunda-inline notranslate" translate="no">᳆᳁᳆</span> kanggo religi, <span class="sunda-inline notranslate" translate="no">᳅᳂᳅</span> kanggo sajarah, atanapi ditambih bingkai luar <span class="sunda-inline notranslate" translate="no">᳄᳆᳀᳆᳄</span>).</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Tanda Garis Prasasti (Média Batu)</h4>
        <p>Khusus dina média batu (prasasti) anu sesah dipahat wangun buleud baréka, juru pahat sering ngagentos Bindu ku <strong>hiji garis tegak (<code>|</code>)</strong> kanggo tanda koma (<code>,</code>) sarta <strong>dua garis tegak (<code>||</code>)</strong> kanggo titik panutup akhir (<code>.</code>), tanpa tanda pananya atanapi tanda panyeluk.</p>
      </div>
    `,

    fpAria: 'Pratinjau gancang input sareng output',
    fpSpaceBtn: 'Spasi',
    fpSpaceTitle: 'Selapkeun spasi',
    fpBackspaceTitle: 'Hapus hiji aksara ka tukang',
    fpTopTitle: 'Balik ka luhur (éditor utami)',

    kbDialogAria: 'Kibor Aksara Sunda',
    kbHeaderTitle: 'Séréd kanggo ngalihkeun posisi kibor',
    kbHeaderHtml: '⌨ Kibor Aksara Sunda <small class="hover-only-hint">(sorot kanggo katerangan)</small>',
    kbCloseTitle: 'Tutup kibor',
    popCatAngka: 'Angka',
    popCatSwara: 'Swara',
    popCatRarangken: 'Rarangkén',
    popCatNgalagena: 'Ngalagena',
    popCatBuhun: 'Khusus Buhun',
    popCatBindu: 'Bindu',
    dockBackspaceTip: 'Hapus hiji aksara ka tukang (Backspace)',
    dockSymbolToggleTip: 'Gentos susunan tanda baca sareng simbol',
    dockPunctTip: (sym) => `Selapkeun tanda: ${sym}`,
    dockSymbolTip: (sym) => `Selapkeun simbol: ${sym}`,
    dockSpaceLabel: 'Spasi',
    dockSpaceTip: 'Selapkeun spasi',
    dockEnterTip: 'Baris anyar (Enter)'
  },

  en: {
    pageTitle: 'Sundanese Script ⇄ Latin Script',
    pageDesc: 'Bidirectional transliteration tool between Latin script and Standard or Old Sundanese (Sunda Buhun) script, complete with a virtual keyboard, diacritic guide, and Bindu punctuation.',
    langMenuAria: 'Select interface language',
    langBtnTitle: 'Switch interface language',
    themeSwitchAria: 'Toggle dark or light theme',
    themeSwitchTitle: 'Switch color theme (Light / Dark)',

    titleLatinToSunda: 'Latin Script <span class="arrow">→</span> Sundanese Script',
    titleSundaToLatin: 'Sundanese Script <span class="arrow">→</span> Latin Script',
    subtitleLatinToSunda: 'Type Sundanese text using the proper vowels <strong class="notranslate" translate="no">e</strong> (<span class="notranslate" translate="no">pamepet</span>), <strong class="notranslate" translate="no">é</strong> (<span class="notranslate" translate="no">panéléng</span>), and <strong class="notranslate" translate="no">eu</strong> (<span class="notranslate" translate="no">paneuleung</span>) for accurate results.',
    subtitleSundaToLatin: 'Type directly with a Latin keyboard to auto-convert into Sundanese script, or type / paste Sundanese script to get its Latin transliteration.',

    swapBtn: 'Swap Direction',
    swapBtnFeedback: 'Direction Swapped!',
    swapBtnTitle: 'Swap transliteration direction',
    fpSwapBtn: 'Swap',
    fpSwapBtnFeedback: 'Swapped!',

    labelLatin: 'Latin Script',
    labelSunda: 'Sundanese Script',
    fpTagLatin: 'Latin',
    fpTagSunda: 'Sundanese',

    insertCharTitle: (ch) => `Insert character ${ch}`,
    kbBtn: 'Sundanese Keyboard',
    kbBtnTitle: 'Open Sundanese script popup keyboard',
    clearBtn: 'Clear',
    clearBtnFeedback: 'Cleared!',
    clearBtnTitle: 'Clear all text',
    pasteBtn: 'Paste',
    pasteBtnFeedback: 'Pasted!',
    pasteBtnTitle: 'Paste text from clipboard',
    copyBtn: 'Copy',
    copyBtnFeedback: 'Copied!',
    copyBtnTitle: 'Copy transliteration result to clipboard',
    sampleBtn: 'Try sample sentence',
    charCount: (n) => `${n} ${n === 1 ? 'character' : 'characters'}`,

    buhunStyleTitle: 'Choose Old Sundanese (Sunda Buhun) manuscript punctuation style',
    styleSajarahHtml: 'Historical <span class="opt-style-suffix">Style</span>',
    styleReligiHtml: 'Religious <span class="opt-style-suffix">Style</span>',
    stylePrasastiHtml: 'Inscription <span class="opt-style-suffix">Style</span>',
    styleSajarahShort: 'Historical',
    styleReligiShort: 'Religious',
    stylePrasastiShort: 'Inscription',
    styleSajarahFull: 'Historical Style',
    styleReligiFull: 'Religious Style',
    stylePrasastiFull: 'Inscription Style',

    guideE: 'pepet (schwa) — as in <em>seblak</em> (like <strong>e</strong> in <em>taken</em>, <strong>a</strong> in <em>about</em>)',
    guideEAcute: 'téléng — as in <em>sapédah</em> (like <strong>e</strong> in <em>bed</em>, <strong>é</strong> in <em>fiancé</em>)',
    guideEu: 'teuleung — as in <em>peuyeum</em> (like <strong>ur</strong> in British <em>burn</em>, <strong>er</strong> in British <em>her</em>)',
    guideQuote: `<strong>Quotation mark</strong>: If placed mid-word, it acts as a <em>glottal stop</em> (e.g., <em class="notranslate" translate="no">Qur'an</em>) or splits digraphs (e.g., <em class="notranslate" translate="no">ad'ja</em>). In Buhun mode, the <code class="notranslate" translate="no"><strong>'a</strong></code> pattern becomes <em>avagraha</em> <span class="sunda-inline notranslate" translate="no">ᮺ</span> (e.g., <em class="notranslate" translate="no">alun'agung</em>). If at the start/end of a word, it remains a regular quotation mark.`,
    
    toggleDetailsLabel: 'Examples & Details',
    toggleDetailsTitle: 'Show example words, sentences, and explanations for each character',
    exampleWordPrefix: 'Example:',
    exampleSentencePrefix: 'Example sentence:',
    soundEquivPrefix: 'Sound:',
    angkaExampleHtml: '<strong>Number example:</strong> <span class="sunda-inline notranslate" translate="no">|᮱᮹᮳᮳|</span> = <em class="notranslate" translate="no">1933</em> (numerals are enclosed in vertical bars <code>|...|</code>)',

    buhunToggleTitle: 'Enable Old Sundanese (Sunda Buhun) orthography and punctuation rules',
    binduToggle: 'Transliterate Bindu Symbols',
    binduToggleTitle: 'Convert Bindu symbols and inscription bars into modern punctuation',

    inputPlaceholderLatin: 'Type Sundanese text here, make sure to use e/é/eu accurately...',
    inputPlaceholderSunda: 'ᮊᮨᮒᮤᮊ᮪ ᮊᮥ ᮃᮊ᮪ᮞᮛ ᮞᮥᮔ᮪ᮓ ᮓᮤ ᮓᮤᮉ...',
    outputPlaceholderSunda: 'ᮠᮞᮤᮜ᮪ᮔ ᮘᮊᮜ᮪ ᮊᮜᮥᮃᮁ ᮓᮤ ᮓᮤᮉ...',
    outputPlaceholderLatin: 'Sample output: Wilujeng sumping di Bandung.',

    fpInputPlaceholderLatin: 'Type using accurate e/é/eu...',
    fpInputPlaceholderSunda: 'ᮊᮨᮒᮤᮊ᮪ ᮓᮤ ᮓᮤᮉ...',
    fpOutputPlaceholderSunda: 'ᮠᮞᮤᮜ᮪ ᮃᮜᮤᮂ ᮃᮊ᮪ᮞᮛ...',
    fpOutputPlaceholderLatin: 'Transliteration result...',

    hintBaku: 'Standard Sundanese Unicode Orthography',
    hintSajarah: 'Sunda Buhun — Historical Manuscript Style',
    hintReligi: 'Sunda Buhun — Religious Manuscript Style',
    hintPrasasti: 'Sunda Buhun — Stone Inscription Style',
    hintBinduOn: 'Latin Transliteration (Bindu Symbols Converted)',
    hintBinduOff: 'Diplomatic Transliteration (Bindu Symbols Preserved)',

    refTitle: 'Sundanese Script Guide & Character Chart',
    refSubtitleDesktop: 'Hover over a character to view its description, or click to insert it into the input box.',
    refSubtitleTouch: 'Tap a character to insert it into the input box.',

    catAngka: 'Sundanese Numerals',
    catSwara: 'Aksara Swara (Independent Vowels)',
    catRarangken: 'Aksara Rarangkén (Diacritics)',
    catNgalagena: 'Aksara Ngalagena (Consonants)',
    catBuhunKhusus: 'Aksara Khusus Sunda Buhun (Special Old Sundanese Characters)',
    catBindu: 'Bindu Characters (Historical / Old Sundanese Punctuation)',
    toggleDescLabel: 'Descriptions',
    toggleDescBuhunTitle: 'Show or hide descriptions for each character',
    toggleDescBinduTitle: 'Show or hide Bindu character descriptions and manuscript layout rules',

    pipeLabel: 'vertical bar (numeral delimiter / inscription punctuation)',
    pipeTooltip: 'Vertical Bar (|): Delimits Sundanese numerals (|᮲᮰᮲᮶|) or marks comma (|) / period (||) in stone inscriptions',
    tipNumeral: (n) => `Sundanese Numeral: ${n}`,
    tipSwara: (v) => `Swara Vowel: ${v}`,
    tipRarangken: (lbl, morph, isBuhun) =>
      `${isBuhun ? 'Old Sundanese Rarangkén' : 'Rarangkén'}: ${lbl}${morph ? ` ${morph}` : ''}`,
    tipNgalagena: (lbl, isBuhun) =>
      `${isBuhun ? 'Old Sundanese Ngalagena' : 'Ngalagena'}: ${lbl}`,

    buhunKhususItems: [
      {
        s: 'ᮺ',
        label: 'avagraha',
        desc: "Silences the preceding -a vowel and opens an initial a- vowel (auto-inserted via <consonant>'a in Buhun mode, e.g., alun'agung)."
      },
      {
        s: 'ᮻ',
        label: 'pangreureu',
        sound: '(reu)',
        desc: 'Special Old Sundanese (Sunda Buhun) character representing the syllable reu.'
      },
      {
        s: 'ᮼ',
        label: 'pangwilet',
        sound: '(leu)',
        desc: 'Special Old Sundanese (Sunda Buhun) character representing the syllable leu.'
      }
    ],

    binduItems: [
      {
        char: '᳃',
        name: 'Bindu Cakra',
        category: 'Pause & Closing',
        desc: 'Universal comma (,) mark for brief mid-sentence pauses across all manuscript genres.'
      },
      {
        char: '᳁',
        name: 'Bindu Panglong',
        category: 'Pause & Closing',
        desc: 'Medium pause (;) or clause/line separator, used specifically in religious manuscripts.'
      },
      {
        char: '᳂',
        name: 'Bindu Purnama',
        category: 'Pause & Closing',
        desc: 'Primary period (.) in historical chronicles, or steps down to a semicolon (;) in religious texts.'
      },
      {
        char: '᳀',
        name: 'Bindu Surya',
        category: 'Pause & Closing',
        desc: 'The strongest terminal period (.), reserved specifically for religious or spiritual manuscripts.'
      },
      {
        char: '᳅',
        name: 'Bindu Ka Satanga',
        category: 'Satanga (Structure)',
        desc: 'Pairs exclusively with Bindu Purnama (᳅᳂᳅) to mark historical or chronicle texts; never brackets the sun symbol.'
      },
      {
        char: '᳆',
        name: 'Bindu Da Satanga',
        category: 'Satanga (Structure)',
        desc: 'Pairs exclusively with Bindu Surya (᳆᳀᳆) or Bindu Panglong (᳆᳁᳆) to mark religious, prayer, or moral didactic texts.'
      },
      {
        char: '᳇',
        name: 'Bindu Ba Satanga',
        category: 'Satanga (Structure)',
        desc: 'Pairs with itself (᳇᳇) without a center circle to separate stanzas or major paragraphs, or stands alone (᳇) as a list bullet.'
      },
      {
        char: '᳄',
        name: 'Bindu Leu Satanga',
        category: 'Satanga (Structure)',
        desc: 'Used primarily as an outer decorative frame ornament at the very beginning or closing of a manuscript (e.g., ᳄᳆᳀᳆᳄).'
      }
    ],

    binduNotesHtml: `
      <div class="note-card">
        <h4>Text Structure Patterns (Leading Satanga)</h4>
        <ul>
          <li><strong>1. Single Leading Satanga (Inline List Bullet):</strong> Used for compact item lists to save writing space on palm leaves (<span class="notranslate" translate="no">lontar</span>). Example: <span class="sunda-inline notranslate" translate="no">᳇</span> First item <span class="sunda-inline notranslate" translate="no">᳇</span> Second item <em>(in Latin input, type <code>- </code> at the start of a line)</em>.</li>
          <li><strong>2. Double Leading Satanga (Stanza / Section Break):</strong> Marks a change in poetic stanza (<span class="notranslate" translate="no">pupuh</span>) or a major new paragraph/topic (<span class="sunda-inline notranslate" translate="no">᳇᳇</span> at the start of a new section).</li>
          <li><strong>3. Triple Opening Symbols (Chapter Header):</strong> A circular Bindu flanked by two satanga symbols at the opening only (<span class="sunda-inline notranslate" translate="no">᳆᳀᳆</span> / <span class="sunda-inline notranslate" translate="no">᳆᳁᳆</span> for religious texts, <span class="sunda-inline notranslate" translate="no">᳅᳂᳅</span> for historical texts, or framed as <span class="sunda-inline notranslate" translate="no">᳄᳆᳀᳆᳄</span>).</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Inscription Bar Marks (Stone Medium)</h4>
        <p>Specifically on stone inscriptions (<span class="notranslate" translate="no">prasasti</span>) where intricate circular glyphs were difficult to carve, engravers substituted Bindu marks with a <strong>single vertical bar (<code>|</code>)</strong> for commas (<code>,</code>) and a <strong>double vertical bar (<code>||</code>)</strong> for terminal periods (<code>.</code>), omitting question or exclamation marks.</p>
      </div>
    `,

    fpAria: 'Quick input and output preview',
    fpSpaceBtn: 'Space',
    fpSpaceTitle: 'Insert space',
    fpBackspaceTitle: 'Delete one character backward',
    fpTopTitle: 'Back to top (main editor)',

    kbDialogAria: 'Sundanese Script Keyboard',
    kbHeaderTitle: 'Drag to reposition keyboard',
    kbHeaderHtml: '⌨ Sundanese Keyboard <small class="hover-only-hint">(hover for details)</small>',
    kbCloseTitle: 'Close keyboard',
    popCatAngka: 'Numerals',
    popCatSwara: 'Swara',
    popCatRarangken: 'Rarangkén',
    popCatNgalagena: 'Ngalagena',
    popCatBuhun: 'Buhun Specials',
    popCatBindu: 'Bindu',
    dockBackspaceTip: 'Delete one character backward (Backspace)',
    dockSymbolToggleTip: 'Switch punctuation and symbol sets',
    dockPunctTip: (sym) => `Insert punctuation: ${sym}`,
    dockSymbolTip: (sym) => `Insert symbol: ${sym}`,
    dockSpaceLabel: 'Space',
    dockSpaceTip: 'Insert space',
    dockEnterTip: 'New line (Enter)'
  }
};