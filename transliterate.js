const SWARA = {
  'a': 'ᮃ', 'i': 'ᮄ', 'u': 'ᮅ', 'é': 'ᮆ', 'o': 'ᮇ', 'e': 'ᮈ', 'eu': 'ᮉ'
};

const NGALAGENA_BAKU = {
  'k': 'ᮊ', 'g': 'ᮌ', 'ng': 'ᮍ',
  'c': 'ᮎ', 'j': 'ᮏ', 'ny': 'ᮑ',
  't': 'ᮒ', 'd': 'ᮓ', 'n': 'ᮔ',
  'p': 'ᮕ', 'b': 'ᮘ', 'm': 'ᮙ',
  'y': 'ᮚ', 'r': 'ᮛ', 'l': 'ᮜ', 'w': 'ᮝ',
  's': 'ᮞ', 'h': 'ᮠ',
  'q': 'ᮋ', 'z': 'ᮐ', 'f': 'ᮖ', 'v': 'ᮗ', 'x': 'ᮟ',
  'kh': 'ᮮ', 'sy': 'ᮯ'
};

const NGALAGENA_ALL = {
  ...NGALAGENA_BAKU,
  'bha': 'ᮽ',
  'bh': 'ᮽ'
};

const RARANGKEN_VOKAL = {
  'a': '',
  'i': 'ᮤ',   // panghulu
  'u': 'ᮥ',   // panyuku
  'é': 'ᮦ',   // panéléng
  'o': 'ᮧ',   // panolong
  'e': 'ᮨ',   // pamepet
  'eu': 'ᮩ'   // paneuleung
};

const RARANGKEN_AKHIR_BAKU = {
  'ng': 'ᮀ',  // panyecek
  'r': 'ᮁ',   // panglayar
  'h': 'ᮂ'    // pangwisad
};

const RARANGKEN_AKHIR_BUHUN = {
  ...RARANGKEN_AKHIR_BAKU,
  'k': 'ᮾ',   // akhiran -k
  'm': 'ᮿ'    // akhiran -m
};

const SISIPAN_BAKU = {
  'y': 'ᮡ',   // pamingkal (-y-)
  'r': 'ᮢ',   // panyakra (-r-)
  'l': 'ᮣ'    // panyiku (-l-)
};

const SISIPAN_BUHUN = {
  ...SISIPAN_BAKU,
  'w': 'ᮭ',   // papasangan -wa (buhun)
  'm': 'ᮬ'    // papasangan -ma (buhun)
};

const ANGKA_ORDERED = [
  ['1', '᮱'], ['2', '᮲'], ['3', '᮳'], ['4', '᮴'], ['5', '᮵'],
  ['6', '᮶'], ['7', '᮷'], ['8', '᮸'], ['9', '᮹'], ['0', '᮰']
];
const ANGKA = Object.fromEntries(ANGKA_ORDERED);

const PAMAEH = '᮪';
const AVAGRAHA = 'ᮺ';
const PANGREUREU = 'ᮻ'; // reu
const PANGWILET = 'ᮼ';  // leu

const BUHUN_KHUSUS_LIST = [
  {
    s: 'ᮺ',
    label: 'avagraha',
    desc: 'Pananda yén huruf vokal awal dina kecap kadua parantos lebur atanapi ical alatan papagon panyambungan kecap (sandi dina basa Sanskerta sareng Jawa Kuna/Kawi).'
  },
  {
    s: 'ᮻ',
    label: 'pangreureu (reu)',
    desc: 'Aksara khusus Sunda Buhun kanggo soanten reu.'
  },
  {
    s: 'ᮼ',
    label: 'pangwilet (leu)',
    desc: 'Aksara khusus Sunda Buhun kanggo soanten leu.'
  }
];

const BINDU_LIST = [
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
];

// Conto kalimah Latén
const LATIN_SAMPLES = [
  {
    style: 'sajarah',
    text: 'Wilujeng sumping di Tatar Sunda taun 2026! Hayu urang ngamumulé basa sareng aksara Sunda.'
  },
  {
    style: 'sajarah',
    text: 'Cikaracak ninggang batu laun-laun jadi legok, sing getol diajar supados pinter.'
  },
  {
    style: 'sajarah',
    text: 'Sapédah anyar parkir di payuneun gedong pakarangan sakola tabuh 7 énjing.'
  },
  {
    style: 'sajarah',
    text: 'Peuyeum Bandung sareng seblak haneut raos pisan dituang waktos hujan.'
  },
  {
    style: 'sajarah',
    text: 'Bha reu leu sakti mandraguna, catetan taun 2026.\n- Ngamumulé budaya karuhun;\n- Ngaraksa lemah cai.'
  },
  {
    style: 'sajarah',
    text: 'Kala harita karajaan Sunda nanjung gemah ripah loh jinawi, rahayatna sauyunan.\n\nCatetan lalakon karuhun ti pakuan pajajaran dugi ka tatar priangan.'
  },
  {
    style: 'religi',
    text: 'Ulah hilap solat lima waktu, sabar dina mayunan ujian, sarta sidekah ka sasami.'
  },
  {
    style: 'religi',
    text: 'Sora dharma sanghyang siksa, ngajaga ucap lampah.\n- Ulah cidra kana jangji;\n- Kudu asih ka sasami.'
  },
  {
    style: 'religi',
    text: 'Naséhat sesepuh kapungkur ngeunaan solat, sodakoh, sarta kasabar dina kahirupan.\n\nMugia rahayu sagung dumadi, tebih tina balai caket kana kasalamet.'
  },
  {
    style: 'prasasti',
    text: 'Sakakala rahyang niskala wastu kancana, taun 1333.'
  },
  {
    style: 'prasasti',
    text: 'Ieu tanda pangéling-ngéling ti dayeuh kawali, mugia rahayat salamet salawasna.'
  },
  {
    style: 'prasasti',
    text: 'Panyerat batu prasasti nyatet wates lemah karajaan dina taun 1482.'
  }
];

const SUNDA_SAMPLES = [
  '᳄᳆᳀᳆᳄ ᮝᮤᮜᮥᮏᮨᮀ ᮞᮥᮙ᮪ᮕᮤᮀ ᮓᮤ ᮒᮒᮁ ᮞᮥᮔ᮪ᮓ ᮒᮅᮔ᮪ |᮲᮰᮲᮶| ᳃ ᮠᮚᮥ ᮅᮛᮀ ᮍᮙᮥᮙᮥᮜᮦ ᮘᮞ ᮞᮛᮨᮀ ᮃᮊ᮪ᮞᮛ ᮞᮥᮔ᮪ᮓ ᳀\n᳇᳇ ᮃᮒᮥᮛᮔ᮪ ᮔᮞ᮪ᮊᮂ ᳁\n᳇ ᮍᮏᮌ ᮅᮎᮕ᮪ ᮜᮙ᮪ᮕᮂ ᳃\n᳇ ᮃᮞᮤᮂ ᮊ ᮞᮞᮙᮤ ᳀',
  '᳅᳂᳅ ᮎᮒᮨᮒᮔ᮪ ᮞᮏᮛᮂ ᮊᮛᮏᮃᮔ᮪ ᮞᮥᮔ᮪ᮓ ᮓᮤᮔ ᮒᮅᮔ᮪ |᮱᮳᮳᮳| ᳃ ᮛᮠᮚᮒ᮪ᮔ ᮠᮤᮛᮥᮕ᮪ ᮒᮨᮔ᮪ᮒᮢᮨᮙ᮪ ᮞᮁᮒ ᮞᮅᮚᮥᮔᮔ᮪ ᳂',
  'ᮎᮤᮊᮛᮎᮊ᮪ ᮔᮤᮀᮌᮀ ᮘᮒᮥ ᮜᮅᮔ᮪-ᮜᮅᮔ᮪ ᮏᮓᮤ ᮜᮨᮌᮧᮊ᮪ | ᮞᮤᮀ ᮌᮨᮒᮧᮜ᮪ ᮓᮤᮃᮏᮁ ᮞᮥᮕᮓᮧᮞ᮪ ᮕᮤᮔ᮪ᮒᮨᮁ ||',
  '᳆᳁᳆ ᮕᮤᮒᮥᮓᮥᮂ ᮊᮛᮥᮠᮥᮔ᮪ ᮊᮀᮌᮧ ᮠᮤᮛᮥᮕ᮪ ᮞᮅᮚᮥᮔᮔ᮪ ᳁\n᳇ ᮞᮧᮜᮒ᮪ ᮜᮤᮙ ᮝᮊ᮪ᮒᮥ ᳃\n᳇ ᮞᮘᮁ ᮓᮤᮔ ᮍᮏᮜᮔᮔ᮪ ᮅᮏᮤᮃᮔ᮪ ᳃\n᳇ ᮞᮤᮓᮨᮊᮂ ᮊ ᮃᮔᮥ ᮙᮤᮘᮥᮒᮥᮂᮊᮩᮔ᮪ ᳀'
];

// Pametaan balik (Aksara Sunda -> Latén)
const REV_SWARA = Object.fromEntries(Object.entries(SWARA).map(([k, v]) => [v, k]));
const REV_NGALAGENA = {
  ...Object.fromEntries(Object.entries(NGALAGENA_BAKU).map(([k, v]) => [v, k])),
  'ᮽ': 'bh'
};
const REV_RARANGKEN_VOKAL = {
  'ᮤ': 'i', 'ᮥ': 'u', 'ᮦ': 'é', 'ᮧ': 'o', 'ᮨ': 'e', 'ᮩ': 'eu'
};
const REV_RARANGKEN_AKHIR = {
  'ᮀ': 'ng',
  'ᮁ': 'r',
  'ᮂ': 'h',
  'ᮾ': 'k',
  'ᮿ': 'm'
};
const REV_ANGKA = Object.fromEntries(ANGKA_ORDERED.map(([k, v]) => [v, k]));
const REV_SISIPAN = {
  'ᮡ': 'y',
  'ᮢ': 'r',
  'ᮣ': 'l',
  'ᮭ': 'w',
  'ᮬ': 'm'
};

// =========================================================
// NORMALISASI AKSARA LATÉN
// =========================================================
const SH_TO_S_EXCEPTIONS = [
  'sholat', 'shalat',
  'sholeh', 'sholih', 'shalah', 'shaleh', 'shalih',
  'shobar', 'shabr', 'shabar',
  'shodaqoh', 'shadaqah',
  'shohih', 'shahih',
  'shohabat', 'sahabat', 'shohabah', 'sahabah',
  'shuf', 'shof', 'shaf',
  'musholla', 'mushalla', 'mushola', 'mushala',
  'nashihat', 'nashihah'
];

const SH_EXCEPTION_REGEX = new RegExp(
  `([a-zé]*)(${SH_TO_S_EXCEPTIONS.join('|')})([a-zé]*)`,
  'g'
);

function normalizeLatin(text, isBuhun = false) {
  let s = text.toLowerCase();

  s = s.replace(SH_EXCEPTION_REGEX, (match, prefix, root, suffix) => {
    return prefix + root.replace(/^mush/, 'mus').replace(/^nash/, 'nas').replace(/^sh/, 's') + suffix;
  });

  if (!isBuhun) {
    s = s.replace(/bh/g, 'b');
  }

  s = s
    .replace(/sh/g, 'sy')
    .replace(/(nh|ñ)/g, 'ny')
    .replace(/(ph|fh)/g, 'f')
    .replace(/(tj|ch)/g, 'c')
    .replace(/(dj|zh|jh)/g, 'j')
    .replace(/(dh|dz)/g, 'd')
    .replace(/th/g, 's')
    .replace(/gh/g, 'g')
    // .replace(/rh/g, 'r')
    // .replace(/(lh|ll)/g, 'l')
    // .replace(/wh/g, 'w')
    // .replace(/mh/g, 'm')
    .replace(/oe/g, 'u');

  return s;
}

// =========================================================
// LATÉN -> AKSARA SUNDA
// =========================================================
function latinToSunda(text, isBuhun = false, buhunStyle = 'sajarah') {
  let processed = normalizeLatin(text, isBuhun);

  if (isBuhun && (buhunStyle === 'sajarah' || buhunStyle === 'religi')) {
    processed = processed.replace(/\n{2,}/g, '\n\n᳇᳇ ');
    processed = processed.replace(/(^|\n)[ \t]*[-•][ \t]+/g, '$1᳇ ');
  }

  if (isBuhun) {
    const buhunPattern = /(^|[^a-zé])(reu|leu)(?![a-zé])|(^|[^a-zé])'(?=[a-zé])|(bh|ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])([yrlwm])?(eu|[aiuéoe])((?:ng|[rhkm])(?![aiuéoe]))?|(eu|[aiuéoe])((?:ng|[rhkm])(?![aiuéoe]))?|(bh|ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])|([0-9]+)|([.,;!?])|([^a-zé0-9.,;!?]+)/g;

    return processed.replace(buhunPattern, (
      match,
      prefixSpecial, specialSyllable,
      prefixAvagraha,
      cons, medial, vowelAfterCons, codaAfterCons,
      standaloneVowel, codaAfterSwara,
      deadCons,
      digits,
      punct,
      other
    ) => {
      if (specialSyllable) {
        return (prefixSpecial || '') + (specialSyllable === 'reu' ? PANGREUREU : PANGWILET);
      }
      if (prefixAvagraha !== undefined) {
        return prefixAvagraha + AVAGRAHA;
      }
      if (cons && vowelAfterCons) {
        const baseCons = NGALAGENA_ALL[cons] || '';
        const medialSign = medial ? (SISIPAN_BUHUN[medial] || '') : '';
        const vowelSign = RARANGKEN_VOKAL[vowelAfterCons];
        const codaSign = codaAfterCons ? (RARANGKEN_AKHIR_BUHUN[codaAfterCons] || '') : '';
        return baseCons + medialSign + vowelSign + codaSign;
      }
      if (standaloneVowel) {
        const codaSign = codaAfterSwara ? (RARANGKEN_AKHIR_BUHUN[codaAfterSwara] || '') : '';
        return SWARA[standaloneVowel] + codaSign;
      }
      if (deadCons) {
        return (NGALAGENA_ALL[deadCons] || '') + PAMAEH;
      }
      if (digits) {
        const sundaDigits = digits.split('').map(d => ANGKA[d]).join('');
        return `|${sundaDigits}|`;
      }
      if (punct) {
        if (buhunStyle === 'sajarah') {
          if (punct === ',') return '᳃';
          if (punct === ';') return '᳁';
          if (punct === '.') return '᳂';
          return punct;
        }
        if (buhunStyle === 'religi') {
          if (punct === ',') return '᳃';
          if (punct === ';') return '᳂';
          if (punct === '.') return '᳀';
          return punct;
        }
        if (buhunStyle === 'prasasti') {
          if (punct === ',') return '|';
          if (punct === '.' || punct === ';' || punct === '!' || punct === '?') return '||';
          return punct;
        }
      }
      return other;
    });
  }

  const bakuPattern = /(ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])([yrl])?(eu|[aiuéoe])((?:ng|[rh])(?![aiuéoe]))?|(eu|[aiuéoe])((?:ng|[rh])(?![aiuéoe]))?|(ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])|([0-9]+)|([^a-zé0-9]+)/g;

  return processed.replace(bakuPattern, (
    match,
    cons, medial, vowelAfterCons, codaAfterCons,
    standaloneVowel, codaAfterSwara,
    deadCons,
    digits,
    other
  ) => {
    if (cons && vowelAfterCons) {
      const baseCons = NGALAGENA_BAKU[cons] || '';
      const medialSign = medial ? (SISIPAN_BAKU[medial] || '') : '';
      const vowelSign = RARANGKEN_VOKAL[vowelAfterCons];
      const codaSign = codaAfterCons ? (RARANGKEN_AKHIR_BAKU[codaAfterCons] || '') : '';
      return baseCons + medialSign + vowelSign + codaSign;
    }
    if (standaloneVowel) {
      const codaSign = codaAfterSwara ? (RARANGKEN_AKHIR_BAKU[codaAfterSwara] || '') : '';
      return SWARA[standaloneVowel] + codaSign;
    }
    if (deadCons) {
      return (NGALAGENA_BAKU[deadCons] || '') + PAMAEH;
    }
    if (digits) {
      const sundaDigits = digits.split('').map(d => ANGKA[d]).join('');
      return `|${sundaDigits}|`;
    }
    return other;
  });
}

// =========================================================
// LIVE IME INPUT AKSARA SUNDA (MENGGUNAKAN latinToSunda BAKU)
// =========================================================
function liveConvertInputToSunda(rawText, cursorPos) {
  const before = rawText.slice(0, cursorPos);
  const after = rawText.slice(cursorPos);

  function convertChunk(chunk) {
    const contextPattern = /((?:[ᮊ-ᮠᮮᮯ]᮪)?(?:[ᮊ-ᮠᮮᮯ][ᮡ-ᮣ]?[ᮤ-ᮩ]?|[ᮃ-ᮉ])?(?:[ᮊ-ᮠᮮᮯ][ᮡ-ᮣ]?[᮪ᮤ-ᮩ]?[ᮀ-ᮂ]?|[ᮃ-ᮉ][ᮀ-ᮂ]?))([a-zA-ZéÉñÑ']+)/g;

    let merged = chunk.replace(contextPattern, (_, sundaPart, latinTail) => {
      return sundaToLatin(sundaPart, false, false) + latinTail;
    });

    merged = merged.replace(/[a-zA-ZéÉñÑ]+/g, (latinWord) => {
      return latinToSunda(latinWord, false);
    });

    merged = merged.replace(/\|([᮰-᮹]+)\|([0-9]+)|(\|[᮰-᮹]+\|)|([0-9]+)/g, (
      match,
      prevSundaDigits, appendedDigits,
      existingPiped,
      standaloneDigits
    ) => {
      if (prevSundaDigits && appendedDigits) {
        const extraSunda = appendedDigits.split('').map(d => ANGKA[d]).join('');
        return `|${prevSundaDigits}${extraSunda}|`;
      }
      if (existingPiped) return existingPiped;
      return latinToSunda(standaloneDigits, false);
    });

    return merged;
  }

  const convertedBefore = convertChunk(before);
  const convertedAfter = convertChunk(after);

  return {
    text: convertedBefore + convertedAfter,
    cursor: convertedBefore.length
  };
}

// =========================================================
// AKSARA SUNDA -> LATÉN
// =========================================================
function applyLatinCapitalization(text) {
  let out = text.replace(/(^|\n)([^a-zéA-ZÉ\n]*)([a-zé])/g, (m, lineStart, prefix, firstLetter) => {
    return lineStart + prefix + firstLetter.toUpperCase();
  });

  out = out.replace(/([.!?᳀᳂]|\|\|)([^a-zéA-ZÉ\n]*)([a-zé])/g, (m, punct, gap, firstLetter) => {
    return punct + gap + firstLetter.toUpperCase();
  });

  return out;
}

function sundaToLatin(text, translateBindu = false, capitalize = true) {
  let workingText = text;

  if (translateBindu) {
    workingText = workingText.replace(/[᳄᳅᳆᳇]?[᳅᳆][᳀᳁᳂][᳅᳆][᳄᳅᳆᳇]?\s*/g, '');
    workingText = workingText.replace(/᳇᳇\s*/g, '\n\n');
    workingText = workingText.replace(/(^|\n|\s)᳇\s*/g, '$1• ');
    workingText = workingText.replace(/[᳄᳅᳆]/g, '');
  }

  const pattern = /([ᮊ-ᮠᮮᮯᮽ])([ᮡ-ᮣᮬᮭ])?([᮪ᮤ-ᮩ])?|([ᮀ-ᮂᮾᮿ])|([ᮃ-ᮉ])|(ᮺ)|(ᮻ)|(ᮼ)|\|([᮰-᮹]+)\||([᮰-᮹])|(\|\|)|(\|)|([᳀-᳇])/g;

  let result = workingText.replace(pattern, (
    match,
    ngalagena, sisipan, modifier,
    akhir,
    swara,
    avagraha,
    pangreureu,
    pangwilet,
    pipedAngka,
    singleAngka,
    doublePipe,
    singlePipe,
    bindu
  ) => {
    if (ngalagena) {
      let base = REV_NGALAGENA[ngalagena] || '';
      if (sisipan) {
        base += REV_SISIPAN[sisipan] || '';
      }
      if (modifier === PAMAEH) {
        return base;
      }
      if (modifier && REV_RARANGKEN_VOKAL[modifier]) {
        return base + REV_RARANGKEN_VOKAL[modifier];
      }
      return base + 'a';
    }
    if (akhir) {
      return REV_RARANGKEN_AKHIR[akhir] || '';
    }
    if (swara) {
      return REV_SWARA[swara] || '';
    }
    if (avagraha) {
      return "'";
    }
    if (pangreureu) {
      return 'reu';
    }
    if (pangwilet) {
      return 'leu';
    }
    if (pipedAngka) {
      return pipedAngka.split('').map(d => REV_ANGKA[d] || d).join('');
    }
    if (singleAngka) {
      return REV_ANGKA[singleAngka] || '';
    }
    if (doublePipe) {
      return translateBindu ? '.' : '||';
    }
    if (singlePipe) {
      return translateBindu ? ',' : '|';
    }
    if (bindu) {
      if (!translateBindu) return bindu;
      if (bindu === '᳃') return ',';
      if (bindu === '᳁') return ';';
      if (bindu === '᳂') return '.';
      if (bindu === '᳀') return '.';
      if (bindu === '᳇') return '• ';
      return '';
    }
    return match;
  });

  if (translateBindu) {
    result = result.replace(/\s+([.,;])/g, '$1').trim();
  }

  if (capitalize) {
    result = applyLatinCapitalization(result);
  }

  return result;
}

// --- State & DOM Elements ---
let mode = 'LATIN_TO_SUNDA';
let isComposing = false;

const mainTitleEl = document.getElementById('main-title');
const subtitleTextEl = document.getElementById('subtitle-text');
const inputLabelEl = document.getElementById('input-label');
const outputLabelEl = document.getElementById('output-label');
const inputEl = document.getElementById('input-text');
const outputEl = document.getElementById('output-text');
const charCountEl = document.getElementById('char-count');
const standardHintEl = document.getElementById('standard-hint');

const buhunControlsEl = document.getElementById('buhun-controls');
const toggleBuhunEl = document.getElementById('toggle-buhun');
const buhunStyleEl = document.getElementById('buhun-style');

const binduTranslateWrapper = document.getElementById('bindu-translate-wrapper');
const toggleTranslateBinduEl = document.getElementById('toggle-translate-bindu');

const latinHelpersEl = document.getElementById('latin-helpers');
const btnPopupKb = document.getElementById('btn-popup-kb');
const kbPopupEl = document.getElementById('kb-popup');
const kbPopupHeaderEl = document.getElementById('kb-popup-header');
const btnClosePopup = document.getElementById('btn-close-popup');

const btnSwap = document.getElementById('btn-swap');
const btnClear = document.getElementById('btn-clear');
const btnCopy = document.getElementById('btn-copy');
const btnSample = document.getElementById('btn-sample');
const charBtns = document.querySelectorAll('.char-btn');

function insertAtCursor(char) {
  const start = inputEl.selectionStart;
  const end = inputEl.selectionEnd;
  const text = inputEl.value;

  const nextVal = text.substring(0, start) + char + text.substring(end);
  const nextPos = start + char.length;

  if (mode === 'SUNDA_TO_LATIN') {
    const converted = liveConvertInputToSunda(nextVal, nextPos);
    inputEl.value = converted.text;
    inputEl.selectionStart = inputEl.selectionEnd = converted.cursor;
  } else {
    inputEl.value = nextVal;
    inputEl.selectionStart = inputEl.selectionEnd = nextPos;
  }

  inputEl.focus();
  updateOutput();
}

function backspaceAtCursor() {
  const start = inputEl.selectionStart;
  const end = inputEl.selectionEnd;
  const text = inputEl.value;

  if (start !== end) {
    inputEl.value = text.substring(0, start) + text.substring(end);
    inputEl.selectionStart = inputEl.selectionEnd = start;
  } else if (start > 0) {
    const before = Array.from(text.substring(0, start));
    before.pop();
    const newBefore = before.join('');
    inputEl.value = newBefore + text.substring(end);
    inputEl.selectionStart = inputEl.selectionEnd = newBefore.length;
  }
  inputEl.focus();
  updateOutput();
}

function updateOutput() {
  const val = inputEl.value;
  if (mode === 'LATIN_TO_SUNDA') {
    const isBuhun = toggleBuhunEl.checked;
    const style = buhunStyleEl.value;
    outputEl.value = latinToSunda(val, isBuhun, style);

    if (!isBuhun) {
      standardHintEl.textContent = 'Standar Unicode Aksara Sunda Baku';
    } else {
      const styleNames = {
        sajarah: 'Sunda Buhun — Gaya Naskah Sajarah',
        religi: 'Sunda Buhun — Gaya Naskah Religi',
        prasasti: 'Sunda Buhun — Gaya Prasasti Batu'
      };
      standardHintEl.textContent = styleNames[style];
    }
  } else {
    const translateBindu = toggleTranslateBinduEl.checked;
    outputEl.value = sundaToLatin(val, translateBindu, true);
    standardHintEl.textContent = translateBindu
      ? 'Alih Aksara Latén (Simbol Bindu Dialihaksarakeun)'
      : 'Alih Aksara Diplomatik (Simbol Bindu Dipertahankeun)';
  }
  charCountEl.textContent = `${val.length} aksara`;
}

// Event Input (ngadukung Live-IME dina modeu Sunda -> Latén)
inputEl.addEventListener('compositionstart', () => {
  isComposing = true;
});

inputEl.addEventListener('compositionend', () => {
  isComposing = false;
  if (mode === 'SUNDA_TO_LATIN') {
    const converted = liveConvertInputToSunda(inputEl.value, inputEl.selectionStart);
    inputEl.value = converted.text;
    inputEl.selectionStart = inputEl.selectionEnd = converted.cursor;
  }
  updateOutput();
});

inputEl.addEventListener('input', () => {
  if (mode === 'SUNDA_TO_LATIN' && !isComposing) {
    const converted = liveConvertInputToSunda(inputEl.value, inputEl.selectionStart);
    inputEl.value = converted.text;
    inputEl.selectionStart = inputEl.selectionEnd = converted.cursor;
  }
  updateOutput();
});

// Event Toggle Modeu Sunda Buhun & Dropdown Gaya Naskah
toggleBuhunEl.addEventListener('change', () => {
  buhunStyleEl.classList.toggle('hidden', !toggleBuhunEl.checked);
  updateOutput();
});

buhunStyleEl.addEventListener('change', updateOutput);

// Event Toggle Alih Aksara Bindu
toggleTranslateBinduEl.addEventListener('change', updateOutput);

// Event Button Liron Arah Alih Aksara
function triggerSwapAnimation() {
  btnSwap.classList.remove('spin-clockwise');
  void btnSwap.offsetWidth;
  btnSwap.classList.add('spin-clockwise');

  const textTargets = [mainTitleEl, subtitleTextEl, inputLabelEl, outputLabelEl, inputEl, outputEl];
  textTargets.forEach(el => {
    el.classList.remove('swap-animate-text');
    void el.offsetWidth;
    el.classList.add('swap-animate-text');
  });

  document.querySelectorAll('.editor-grid .card').forEach(card => {
    card.classList.remove('swap-animate-card');
    void card.offsetWidth;
    card.classList.add('swap-animate-card');
  });
}

btnSwap.addEventListener('click', () => {
  triggerSwapAnimation();
  const prevOutput = outputEl.value;

  if (mode === 'LATIN_TO_SUNDA') {
    mode = 'SUNDA_TO_LATIN';
    mainTitleEl.innerHTML = 'Aksara Sunda <span class="arrow">→</span> Aksara Latén';
    subtitleTextEl.textContent = 'Ketik langsung ku kibor Latén anu téksna otomatis robih janten Aksara Sunda atanapi ketik / témpél Aksara Sunda, teras kaluar hasil Laténna.';
    inputLabelEl.textContent = 'Aksara Sunda';
    outputLabelEl.textContent = 'Aksara Latén';

    inputEl.classList.add('sunda-font');
    outputEl.classList.remove('sunda-font');
    inputEl.placeholder = 'ᮊᮨᮒᮤᮊ᮪ ᮊᮥ ᮃᮊ᮪ᮞᮛ ᮞᮥᮔ᮪ᮓ ᮓᮤ ᮓᮤᮉ...';
    outputEl.placeholder = 'Conto hasil: Wilujeng sumping di Bandung.';

    buhunControlsEl.classList.add('hidden');
    binduTranslateWrapper.classList.remove('hidden');
    latinHelpersEl.classList.add('hidden');
    btnPopupKb.classList.remove('hidden');

    const converted = liveConvertInputToSunda(prevOutput, prevOutput.length);
    inputEl.value = converted.text;
  } else {
    mode = 'LATIN_TO_SUNDA';
    mainTitleEl.innerHTML = 'Aksara Latén <span class="arrow">→</span> Aksara Sunda';
    subtitleTextEl.innerHTML = 'Ketik téks basa Sunda nganggo <strong>e</strong> (pamepet), <strong>é</strong> (panéléng), sareng <strong>eu</strong> (paneuleung) anu leres supados hasilna merenah.';
    inputLabelEl.textContent = 'Aksara Latén';
    outputLabelEl.textContent = 'Aksara Sunda';

    inputEl.classList.remove('sunda-font');
    outputEl.classList.add('sunda-font');
    inputEl.placeholder = 'Ketik téks basa Sunda di dieu...\nConto: Wilujeng sumping di Bandung.';
    outputEl.placeholder = 'ᮝᮤᮜᮥᮏᮨᮀ ᮞᮥᮙ᮪ᮕᮤᮀ ᮓᮤ ᮘᮔ᮪ᮓᮥᮀ...';

    buhunControlsEl.classList.remove('hidden');
    binduTranslateWrapper.classList.add('hidden');
    latinHelpersEl.classList.remove('hidden');
    btnPopupKb.classList.add('hidden');
    kbPopupEl.classList.add('hidden');

    inputEl.value = prevOutput;
  }

  updateOutput();
  inputEl.focus();
});

// Button Input é / É
charBtns.forEach(btn => {
  btn.addEventListener('click', () => insertAtCursor(btn.dataset.char));
});

// Toggle Popup Kibor Sunda
btnPopupKb.addEventListener('click', () => {
  kbPopupEl.classList.toggle('hidden');
});

btnClosePopup.addEventListener('click', () => {
  kbPopupEl.classList.add('hidden');
});

// Fitur Séréd Kibor Sunda
(function makePopupDraggable() {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  kbPopupHeaderEl.addEventListener('mousedown', (e) => {
    if (window.innerWidth <= 540 || e.target === btnClosePopup) return;
    isDragging = true;
    const rect = kbPopupEl.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    kbPopupEl.style.bottom = 'auto';
    kbPopupEl.style.right = 'auto';
    kbPopupEl.style.left = `${rect.left}px`;
    kbPopupEl.style.top = `${rect.top}px`;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const maxLeft = window.innerWidth - kbPopupEl.offsetWidth;
    const maxTop = window.innerHeight - kbPopupEl.offsetHeight;
    const nextLeft = Math.max(0, Math.min(e.clientX - offsetX, maxLeft));
    const nextTop = Math.max(0, Math.min(e.clientY - offsetY, maxTop));
    kbPopupEl.style.left = `${nextLeft}px`;
    kbPopupEl.style.top = `${nextTop}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
})();

// Conto Kalimah Latén
btnSample.addEventListener('click', () => {
  const currentVal = inputEl.value.trim();

  if (mode === 'LATIN_TO_SUNDA') {
    const candidates = LATIN_SAMPLES.filter(item => item.text.trim() !== currentVal);
    const pool = candidates.length > 0 ? candidates : LATIN_SAMPLES;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    inputEl.value = chosen.text;
    buhunStyleEl.value = chosen.style;
  } else {
    const candidates = SUNDA_SAMPLES.filter(item => item.trim() !== currentVal);
    const pool = candidates.length > 0 ? candidates : SUNDA_SAMPLES;
    inputEl.value = pool[Math.floor(Math.random() * pool.length)];
  }

  updateOutput();
  inputEl.focus();
});

// Hapus
btnClear.addEventListener('click', () => {
  inputEl.value = '';
  outputEl.value = '';
  updateOutput();
  inputEl.focus();
});

// Tiron
btnCopy.addEventListener('click', async () => {
  if (!outputEl.value) return;
  await navigator.clipboard.writeText(outputEl.value);
  const labelSpan = btnCopy.querySelector('span');
  const originalText = labelSpan.textContent;
  labelSpan.textContent = 'Katiron!';
  setTimeout(() => {
    labelSpan.textContent = originalText;
  }, 1500);
});

// =========================================================
// BANGUN PITUDUH TETEP & POPUP KIBOR
// =========================================================
function initSundaKeyboards() {
  const refSubtitleEl = document.getElementById('ref-subtitle');
  const isTouchDevice =
    window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
    'ontouchstart' in window;

  if (refSubtitleEl && isTouchDevice) {
    refSubtitleEl.textContent = 'Toél aksara kanggo nyelapkeun kana kotak input.';
  }

  function createRefBtn({ insertChar, displayChar, label, tooltip, isBuhun = false }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `kb-key ${isBuhun ? 'buhun-tag' : ''}`;
    btn.title = tooltip;
    btn.innerHTML = `${displayChar}<small>${label}</small>`;
    btn.addEventListener('click', () => insertAtCursor(insertChar));
    return btn;
  }

  function createPopBtn({ insertChar, displayChar, tooltip, isBuhun = false }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `pop-key ${isBuhun ? 'buhun-tag' : ''}`;
    btn.title = tooltip;
    btn.textContent = displayChar;
    btn.addEventListener('click', () => insertAtCursor(insertChar));
    return btn;
  }

  function createPopSpacer() {
    const span = document.createElement('span');
    span.className = 'pop-spacer';
    return span;
  }

  // ANGKA
  const refAngka = document.getElementById('kb-angka');
  const popAngka = document.getElementById('pop-angka');

  ANGKA_ORDERED.forEach(([l, s]) => {
    const item = {
      insertChar: s,
      displayChar: s,
      label: l,
      tooltip: `Angka Sunda: ${l}`
    };
    refAngka.appendChild(createRefBtn(item));
    popAngka.appendChild(createPopBtn(item));
  });

  const pipeItem = {
    insertChar: '|',
    displayChar: '|',
    label: 'garis tegak (pangapit angka / tanda prasasti)',
    tooltip: 'Garis Tegak (|): Pangapit angka Sunda (|᮲᮰᮲᮶|) atanapi tanda koma (|) / titik (||) dina prasasti batu'
  };
  refAngka.appendChild(createRefBtn(pipeItem));
  popAngka.appendChild(createPopBtn(pipeItem));

  // SWARA
  const refSwara = document.getElementById('kb-swara');
  const popSwara = document.getElementById('pop-swara');

  Object.entries(SWARA).forEach(([l, s]) => {
    const item = {
      insertChar: s,
      displayChar: s,
      label: l,
      tooltip: `Aksara Swara: ${l}`
    };
    refSwara.appendChild(createRefBtn(item));
    popSwara.appendChild(createPopBtn(item));
  });

  // RARANGKÉN
  const rarangkenRow1 = [
    { s: 'ᮤ', display: '◌ᮤ', label: 'panghulu (-i)', buhun: false },
    { s: 'ᮥ', display: '◌ᮥ', label: 'panyuku (-u)', buhun: false },
    { s: 'ᮦ', display: '◌ᮦ', label: 'panéléng (-é)', buhun: false },
    { s: 'ᮧ', display: '◌ᮧ', label: 'panolong (-o)', buhun: false },
    { s: 'ᮨ', display: '◌ᮨ', label: 'pamepet (e)', buhun: false },
    { s: 'ᮩ', display: '◌ᮩ', label: 'paneuleung (eu)', buhun: false }
  ];

  const rarangkenRow2 = [
    { s: 'ᮡ', display: '◌ᮡ', label: 'pamingkal (-y-)', buhun: false },
    { s: 'ᮢ', display: '◌ᮢ', label: 'panyakra (-r-)', buhun: false },
    { s: 'ᮣ', display: '◌ᮣ', label: 'panyiku (-l-)', buhun: false },
    { s: 'ᮁ', display: '◌ᮁ', label: 'panglayar (-r)', buhun: false },
    { s: 'ᮀ', display: '◌ᮀ', label: 'panyecek (-ng)', buhun: false },
    { s: 'ᮂ', display: '◌ᮂ', label: 'pangwisad (-h)', buhun: false },
    { s: '᮪', display: '◌᮪', label: 'pamaéh', buhun: false },
    { s: 'ᮭ', display: '◌ᮭ', label: 'papasangan (-wa)', buhun: true },
    { s: 'ᮬ', display: '◌ᮬ', label: 'papasangan (-ma)', buhun: true },
    { s: 'ᮾ', display: 'ᮾ', label: 'akhiran (-k)', buhun: true },
    { s: 'ᮿ', display: 'ᮿ', label: 'akhiran (-m)', buhun: true }
  ];

  const refRarangken = document.getElementById('kb-rarangken');
  const popRarangken = document.getElementById('pop-rarangken');

  popRarangken.appendChild(createPopSpacer());
  rarangkenRow1.forEach(item => {
    const cfg = {
      insertChar: item.s,
      displayChar: item.display,
      label: item.label,
      tooltip: `Rarangkén: ${item.label}`,
      isBuhun: item.buhun
    };
    refRarangken.appendChild(createRefBtn(cfg));
    popRarangken.appendChild(createPopBtn(cfg));
  });
  for (let i = 0; i < 5; i++) {
    popRarangken.appendChild(createPopSpacer());
  }

  rarangkenRow2.forEach(item => {
    const cfg = {
      insertChar: item.s,
      displayChar: item.display,
      label: item.label,
      tooltip: item.buhun ? `Rarangkén Sunda Buhun: ${item.label}` : `Rarangkén: ${item.label}`,
      isBuhun: item.buhun
    };
    refRarangken.appendChild(createRefBtn(cfg));
    popRarangken.appendChild(createPopBtn(cfg));
  });

  // NGALAGENA
  const ngalagenaRow1 = [
    ['ka', 'ᮊ'], ['ga', 'ᮌ'], ['nga', 'ᮍ'],
    ['ca', 'ᮎ'], ['ja', 'ᮏ'], ['nya', 'ᮑ'],
    ['ta', 'ᮒ'], ['da', 'ᮓ'], ['na', 'ᮔ'],
    ['pa', 'ᮕ'], ['ba', 'ᮘ'], ['ma', 'ᮙ']
  ];
  const ngalagenaRow2 = [
    ['ya', 'ᮚ'], ['ra', 'ᮛ'], ['la', 'ᮜ'], ['wa', 'ᮝ'],
    ['sa', 'ᮞ'], ['ha', 'ᮠ'], ['qa', 'ᮋ'], ['za', 'ᮐ'],
    ['fa', 'ᮖ'], ['va', 'ᮗ'], ['xa', 'ᮟ']
  ];
  const ngalagenaRow3 = [
    { label: 'kha', s: 'ᮮ', buhun: false },
    { label: 'sya', s: 'ᮯ', buhun: false },
    { label: 'bha (buhun)', s: 'ᮽ', buhun: true }
  ];

  const refNgalagena = document.getElementById('kb-ngalagena');
  const popNgalagena = document.getElementById('pop-ngalagena');

  ngalagenaRow1.forEach(([label, s]) => {
    const cfg = { insertChar: s, displayChar: s, label, tooltip: `Aksara Ngalagena: ${label}` };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });

  ngalagenaRow2.forEach(([label, s]) => {
    const cfg = { insertChar: s, displayChar: s, label, tooltip: `Aksara Ngalagena: ${label}` };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });
  popNgalagena.appendChild(createPopSpacer());

  ngalagenaRow3.forEach(item => {
    const cfg = {
      insertChar: item.s,
      displayChar: item.s,
      label: item.label,
      tooltip: item.buhun ? `Aksara Ngalagena Sunda Buhun: bha` : `Aksara Ngalagena: ${item.label}`,
      isBuhun: item.buhun
    };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });

  // SUNDA BUHUN
  const refBuhunKhusus = document.getElementById('kb-buhun-khusus');
  const popBuhunKhusus = document.getElementById('pop-buhun-khusus');
  const toggleDescBuhun = document.getElementById('toggle-desc-buhun');

  function renderBuhunRef(showDesc) {
    refBuhunKhusus.innerHTML = '';
    refBuhunKhusus.classList.toggle('show-details', showDesc);

    BUHUN_KHUSUS_LIST.forEach(item => {
      const tooltip = `${item.label}: ${item.desc}`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'kb-key buhun-tag';
      btn.title = tooltip;
      if (showDesc) {
        btn.innerHTML = `
          <div class="kb-key-head">
            <span class="sym">${item.s}</span>
            <span class="lbl">${item.label}</span>
          </div>
          <span class="kb-key-desc">${item.desc}</span>
        `;
      } else {
        btn.innerHTML = `${item.s}<small>${item.label}</small>`;
      }
      btn.addEventListener('click', () => insertAtCursor(item.s));
      refBuhunKhusus.appendChild(btn);
    });
  }

  BUHUN_KHUSUS_LIST.forEach(item => {
    popBuhunKhusus.appendChild(createPopBtn({
      insertChar: item.s,
      displayChar: item.s,
      tooltip: `${item.label}: ${item.desc}`,
      isBuhun: true
    }));
  });

  renderBuhunRef(false);
  toggleDescBuhun.addEventListener('change', (e) => renderBuhunRef(e.target.checked));

  // KARAKTER BINDU
  const refBindu = document.getElementById('kb-bindu');
  const popBindu = document.getElementById('pop-bindu');
  const toggleDescBindu = document.getElementById('toggle-desc-bindu');
  const binduExtraNotes = document.getElementById('bindu-extra-notes');

  function renderBinduRef(showDesc) {
    refBindu.innerHTML = '';
    refBindu.classList.toggle('show-details', showDesc);
    binduExtraNotes.classList.toggle('hidden', !showDesc);

    BINDU_LIST.forEach(item => {
      const tooltip = `${item.name} (${item.category}): ${item.desc}`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'kb-key buhun-tag';
      btn.title = tooltip;
      if (showDesc) {
        btn.innerHTML = `
          <div class="kb-key-head">
            <span class="sym">${item.char}</span>
            <span class="lbl">${item.name}</span>
            <span class="cat-pill">${item.category}</span>
          </div>
          <span class="kb-key-desc">${item.desc}</span>
        `;
      } else {
        btn.innerHTML = `${item.char}<small>${item.name}</small>`;
      }
      btn.addEventListener('click', () => insertAtCursor(item.char));
      refBindu.appendChild(btn);
    });
  }

  BINDU_LIST.forEach(item => {
    popBindu.appendChild(createPopBtn({
      insertChar: item.char,
      displayChar: item.char,
      tooltip: `${item.name}: ${item.desc}`,
      isBuhun: true
    }));
  });

  renderBinduRef(false);
  toggleDescBindu.addEventListener('change', (e) => renderBinduRef(e.target.checked));

  // =========================================================
  // DOCK HANDAP KIBOR
  // =========================================================
  const dockRow1 = document.getElementById('pop-dock-row1');
  const dockRow2 = document.getElementById('pop-dock-row2');
  let symbolState = 0;

  const SYMBOL_SET_1 = ['(', ')', '/', '-', '"', "'", ':', ';', '!', '?'];
  const SYMBOL_SET_2 = ['~', '@', '\\', '#', '$', '%', '^', '*', '{', '}', '`', '+'];

  function makeDockButton({ label, tooltip, span = 1, extraClass = '', onClick }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `dock-key ${extraClass}`.trim();
    btn.style.gridColumn = `span ${span}`;
    btn.title = tooltip;
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    return btn;
  }

  function renderDock() {
    dockRow1.innerHTML = '';
    dockRow2.innerHTML = '';

    if (symbolState === 0) {
      const spacer = document.createElement('span');
      spacer.style.gridColumn = 'span 10';
      dockRow1.appendChild(spacer);

      dockRow1.appendChild(makeDockButton({
        label: '⌫',
        tooltip: 'Hapus hiji aksara ka tukang (Backspace)',
        span: 2,
        extraClass: 'danger-key',
        onClick: backspaceAtCursor
      }));
    } else if (symbolState === 1) {
      SYMBOL_SET_1.forEach(sym => {
        dockRow1.appendChild(makeDockButton({
          label: sym,
          tooltip: `Selapkeun simbol: ${sym}`,
          span: 1,
          onClick: () => insertAtCursor(sym)
        }));
      });

      dockRow1.appendChild(makeDockButton({
        label: '⌫',
        tooltip: 'Hapus hiji aksara ka tukang (Backspace)',
        span: 2,
        extraClass: 'danger-key',
        onClick: backspaceAtCursor
      }));
    } else {
      SYMBOL_SET_2.forEach(sym => {
        dockRow1.appendChild(makeDockButton({
          label: sym,
          tooltip: `Selapkeun simbol: ${sym}`,
          span: 1,
          onClick: () => insertAtCursor(sym)
        }));
      });
    }

    dockRow2.appendChild(makeDockButton({
      label: '=\\<',
      tooltip: 'Gentos susunan tanda baca sareng simbol',
      span: 2,
      extraClass: symbolState > 0 ? 'active-mode' : '',
      onClick: () => {
        symbolState = (symbolState + 1) % 3;
        renderDock();
      }
    }));

    const leftPunct = symbolState === 0 ? ',' : (symbolState === 1 ? '<' : '[');
    const rightPunct = symbolState === 0 ? '.' : (symbolState === 1 ? '>' : ']');

    dockRow2.appendChild(makeDockButton({
      label: leftPunct,
      tooltip: `Selapkeun tanda: ${leftPunct}`,
      span: 1,
      onClick: () => insertAtCursor(leftPunct)
    }));

    dockRow2.appendChild(makeDockButton({
      label: 'Spasi',
      tooltip: 'Selapkeun spasi',
      span: 6,
      onClick: () => insertAtCursor(' ')
    }));

    dockRow2.appendChild(makeDockButton({
      label: rightPunct,
      tooltip: `Selapkeun tanda: ${rightPunct}`,
      span: 1,
      onClick: () => insertAtCursor(rightPunct)
    }));

    dockRow2.appendChild(makeDockButton({
      label: '↵',
      tooltip: 'Baris anyar (Enter)',
      span: 2,
      onClick: () => insertAtCursor('\n')
    }));
  }

  renderDock();
}

initSundaKeyboards();