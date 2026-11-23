// =========================================================
// 1. KAMUS & DATA AKSARA SUNDA
// =========================================================
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
  'é': 'ᮦ',  // panéléng
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

// Metadata Pituduh & Kibor
const BUHUN_KHUSUS_LIST = [
  {
    s: 'ᮺ',
    label: 'avagraha',
    desc: 'Pananda yén huruf vokal awal dina kecap kadua parantos lebur atanapi ical alatan papagon panyambungan kecap (sandi dina basa Sanskerta sareng Jawa Kuna/Kawi).'
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

// Conto Kalimah
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

// =========================================================
// 2. MESIN ALIH AKSARA (LATÉN <-> SUNDA)
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

  return s
    .replace(/sh/g, 'sy')
    .replace(/(nh|ñ)/g, 'ny')
    .replace(/(ph|fh)/g, 'f')
    .replace(/(tj|ch)/g, 'c')
    .replace(/(dj|zh|jh)/g, 'j')
    .replace(/(dh|dz)/g, 'd')
    .replace(/th/g, 's')
    .replace(/gh/g, 'g')
    .replace(/oe/g, 'u');
}

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
    if (akhir) return REV_RARANGKEN_AKHIR[akhir] || '';
    if (swara) return REV_SWARA[swara] || '';
    if (avagraha) return "'";
    if (pangreureu) return 'reu';
    if (pangwilet) return 'leu';
    if (pipedAngka) return pipedAngka.split('').map(d => REV_ANGKA[d] || d).join('');
    if (singleAngka) return REV_ANGKA[singleAngka] || '';
    if (doublePipe) return translateBindu ? '.' : '||';
    if (singlePipe) return translateBindu ? ',' : '|';
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

  return capitalize ? applyLatinCapitalization(result) : result;
}

// =========================================================
// 3. STATE & ELEMEN DOM
// =========================================================
const IS_TOUCH_DEVICE =
  window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
  'ontouchstart' in window;

let mode = 'LATIN_TO_SUNDA';
let isComposing = false;
let isKbPopupOpen = false;
let kbPopupAnimToken = 0;
let pasteFeedbackTimer = null;
let pasteHideTimer = null;
let copyActionToken = 0;
let buhunSelectAnimToken = 0;
let lastBuhunSelectWidth = 0;
let isFloatingPreviewVisible = false;
let floatingPreviewAnimToken = 0;
let wasFpInputFocused = false;

// Header & Mode Bar
const mainTitleEl = document.getElementById('main-title');
const subtitleTextEl = document.getElementById('subtitle-text');
const btnSwap = document.getElementById('btn-swap');

// Editor Cards
const editorGridEl = document.querySelector('.editor-grid');
const inputLabelEl = document.getElementById('input-label');
const outputLabelEl = document.getElementById('output-label');
const inputEl = document.getElementById('input-text');
const outputEl = document.getElementById('output-text');
const charCountEl = document.getElementById('char-count');
const standardHintEl = document.getElementById('standard-hint');

// Editor Controls & Helper Buttons
const latinHelpersEl = document.getElementById('latin-helpers');
const charBtns = document.querySelectorAll('.char-btn');
const btnPopupKb = document.getElementById('btn-popup-kb');
const btnPaste = document.getElementById('btn-paste');
const btnClear = document.getElementById('btn-clear');
const btnCopy = document.getElementById('btn-copy');
const btnSample = document.getElementById('btn-sample');

const buhunControlsEl = document.getElementById('buhun-controls');
const toggleBuhunEl = document.getElementById('toggle-buhun');
const buhunStyleEl = document.getElementById('buhun-style');

const binduTranslateWrapper = document.getElementById('bindu-translate-wrapper');
const toggleTranslateBinduEl = document.getElementById('toggle-translate-bindu');

// Kibor Sunda Popup
const kbPopupEl = document.getElementById('kb-popup');
const kbPopupHeaderEl = document.getElementById('kb-popup-header');
const btnClosePopup = document.getElementById('btn-close-popup');

// Floating Preview Bar
const floatingPreviewEl = document.getElementById('floating-preview');
const fpInputTagEl = document.getElementById('fp-input-tag');
const fpOutputTagEl = document.getElementById('fp-output-tag');
const fpInputTextEl = document.getElementById('fp-input-text');
const fpOutputTextEl = document.getElementById('fp-output-text');
const fpBtnSpace = document.getElementById('fp-btn-space');
const fpBtnBackspace = document.getElementById('fp-btn-backspace');
const fpBtnClear = document.getElementById('fp-btn-clear');
const fpBtnSwap = document.getElementById('fp-btn-swap');
const fpBtnCopy = document.getElementById('fp-btn-copy');
const fpBtnTop = document.getElementById('fp-btn-top');

// =========================================================
// 4. SINKRONISASI INPUT, OUTPUT & PREVIEW BAR
// =========================================================
function syncMobileInputMode() {
  if (isKbPopupOpen) {
    inputEl.setAttribute('inputmode', 'none');
  } else {
    inputEl.removeAttribute('inputmode');
  }
}

function insertAtCursor(char, { fromReference = false, autoSwapIfEmpty = false } = {}) {
  if (autoSwapIfEmpty && mode === 'LATIN_TO_SUNDA' && inputEl.value.length === 0) {
    swapDirection({ fromFloatingBar: fromReference });
  }

  const start = inputEl.selectionStart ?? inputEl.value.length;
  const end = inputEl.selectionEnd ?? inputEl.value.length;
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

  syncMobileInputMode();

  const shouldFocus = !(fromReference && (IS_TOUCH_DEVICE || isFloatingPreviewVisible) && !isKbPopupOpen);
  if (shouldFocus) {
    inputEl.focus({ preventScroll: true });
  }

  updateOutput();
}

function backspaceAtCursor({ skipFocus = false } = {}) {
  const start = inputEl.selectionStart ?? inputEl.value.length;
  const end = inputEl.selectionEnd ?? inputEl.value.length;
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

  syncMobileInputMode();
  if (!skipFocus) {
    inputEl.focus({ preventScroll: true });
  }
  updateOutput();
}

function syncFpTagWidth() {
  if (floatingPreviewEl.classList.contains('hidden')) return;

  fpInputTagEl.style.width = '';
  fpOutputTagEl.style.width = '';

  const maxWidth = Math.max(
    fpInputTagEl.getBoundingClientRect().width,
    fpOutputTagEl.getBoundingClientRect().width
  );

  if (maxWidth > 0) {
    const unifiedWidth = `${Math.ceil(maxWidth)}px`;
    fpInputTagEl.style.width = unifiedWidth;
    fpOutputTagEl.style.width = unifiedWidth;
  }
}

function syncFloatingPreview(skipFpInputSync = false) {
  const isSundaInput = mode === 'SUNDA_TO_LATIN';
  fpInputTagEl.textContent = isSundaInput ? 'Sunda' : 'Latén';
  fpInputTextEl.placeholder = isSundaInput
    ? 'ᮊᮨᮒᮤᮊ᮪ ᮓᮤ ᮓᮤᮉ...'
    : 'Ketik nganggo e/é/eu anu leres...';

  fpOutputTagEl.textContent = isSundaInput ? 'Latén' : 'Sunda';
  fpOutputTextEl.dataset.placeholder = isSundaInput
    ? 'Hasil alih aksara...'
    : 'ᮠᮞᮤᮜ᮪ ᮃᮜᮤᮂ ᮃᮊ᮪ᮞᮛ...';

  fpInputTextEl.classList.toggle('sunda-font', isSundaInput);
  fpOutputTextEl.classList.toggle('sunda-font', !isSundaInput);

  syncFpTagWidth();

  if (!skipFpInputSync) {
    fpInputTextEl.value = inputEl.value.replace(/\n+/g, ' ');
    fpInputTextEl.scrollLeft = fpInputTextEl.scrollWidth;
  }

  fpOutputTextEl.textContent = outputEl.value.replace(/\n+/g, ' ↵ ');
  fpOutputTextEl.scrollLeft = fpOutputTextEl.scrollWidth;
}

function updateOutput(skipFpInputSync = false) {
  const val = inputEl.value;

  if (!pasteFeedbackTimer) {
    setPasteButtonVisible(val.length === 0);
  }

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
  syncFloatingPreview(skipFpInputSync);
}

// =========================================================
// 5. ANIMASI & FEEDBACK UI
// =========================================================
function animateButtonMorph(btn, nextLabel, isFeedback = false) {
  if (!btn) return;
  const span = btn.querySelector('span');
  if (!span) return;

  clearTimeout(btn._widthTimer);
  btn.style.width = '';
  btn.style.overflow = '';
  btn.style.transition = '';

  const isSameLabel = span.textContent === nextLabel;
  btn.classList.toggle('is-feedback', isFeedback);

  const isVisible = btn.offsetParent !== null;
  if (!isVisible) {
    span.textContent = nextLabel;
    return;
  }

  if (isSameLabel) {
    if (isFeedback) {
      span.classList.remove('label-pop');
      void span.offsetWidth;
      span.classList.add('label-pop');
    }
    return;
  }

  const startWidth = btn.getBoundingClientRect().width;
  span.textContent = nextLabel;

  span.classList.remove('label-pop');
  void span.offsetWidth;
  span.classList.add('label-pop');

  btn.style.transition = 'none';
  btn.style.width = '';
  const endWidth = btn.getBoundingClientRect().width;

  if (Math.abs(endWidth - startWidth) < 0.5) {
    btn.style.width = '';
    btn.style.transition = '';
    return;
  }

  btn.style.overflow = 'hidden';
  btn.style.width = `${startWidth}px`;
  void btn.offsetWidth;

  btn.style.transition = 'width 0.24s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease';
  btn.style.width = `${endWidth}px`;

  btn._widthTimer = setTimeout(() => {
    btn.style.width = '';
    btn.style.overflow = '';
    btn.style.transition = '';
  }, 250);
}

function triggerButtonFeedback(btn, feedbackLabel, defaultLabel, duration = 1500) {
  if (!btn) return;
  clearTimeout(btn._feedbackTimer);

  if (btn.classList.contains('is-feedback')) {
    btn.classList.remove('is-feedback');
    void btn.offsetWidth;
  }

  animateButtonMorph(btn, feedbackLabel, true);
  btn._feedbackTimer = setTimeout(() => {
    btn._feedbackTimer = null;
    animateButtonMorph(btn, defaultLabel, false);
  }, duration);
}

function animateSelectWidth(selectEl, prevWidth) {
  if (!prevWidth || selectEl.classList.contains('hidden')) return;

  selectEl.style.transition = 'none';
  selectEl.style.width = 'auto';
  const nextWidth = selectEl.getBoundingClientRect().width;

  if (Math.abs(nextWidth - prevWidth) < 0.5) {
    selectEl.style.width = '';
    selectEl.style.transition = '';
    return;
  }

  selectEl.style.width = `${prevWidth}px`;
  void selectEl.offsetWidth;

  selectEl.style.transition = 'width 0.24s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s ease, border-color 0.2s ease';
  selectEl.style.width = `${nextWidth}px`;

  clearTimeout(selectEl._widthTimer);
  selectEl._widthTimer = setTimeout(() => {
    selectEl.style.width = '';
    selectEl.style.transition = '';
    lastBuhunSelectWidth = selectEl.getBoundingClientRect().width;
  }, 250);
}

function setBuhunSelectVisible(show) {
  const token = ++buhunSelectAnimToken;
  const el = buhunStyleEl;

  if (show) {
    const wasHidden = el.classList.contains('hidden');
    const startWidth = wasHidden ? 0 : el.getBoundingClientRect().width;

    el.classList.remove('hidden');
    el.style.transition = 'none';
    el.style.width = 'auto';
    el.style.paddingLeft = '';
    el.style.paddingRight = '';
    el.style.borderWidth = '';
    el.style.opacity = '';
    el.style.transform = '';
    el.style.overflow = '';

    const targetWidth = el.getBoundingClientRect().width;
    lastBuhunSelectWidth = targetWidth;

    el.style.overflow = 'hidden';
    el.style.width = `${startWidth}px`;
    if (wasHidden) {
      el.style.paddingLeft = '0px';
      el.style.paddingRight = '0px';
      el.style.borderWidth = '0px';
      el.style.opacity = '0';
      el.style.transform = 'scale(0.92)';
    }
    void el.offsetWidth;

    el.style.transition = 'width 0.24s cubic-bezier(0.22, 1, 0.36, 1), padding 0.24s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.width = `${targetWidth}px`;
    el.style.paddingLeft = '';
    el.style.paddingRight = '';
    el.style.borderWidth = '';
    el.style.opacity = '1';
    el.style.transform = 'scale(1)';

    setTimeout(() => {
      if (token !== buhunSelectAnimToken) return;
      el.style.width = '';
      el.style.transition = '';
      el.style.overflow = '';
      el.style.opacity = '';
      el.style.transform = '';
    }, 250);
  } else {
    if (el.classList.contains('hidden')) return;

    const startWidth = el.getBoundingClientRect().width;
    el.style.transition = 'none';
    el.style.overflow = 'hidden';
    el.style.width = `${startWidth}px`;
    el.style.opacity = '1';
    el.style.transform = 'scale(1)';
    void el.offsetWidth;

    el.style.transition = 'width 0.2s cubic-bezier(0.22, 1, 0.36, 1), padding 0.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.width = '0px';
    el.style.paddingLeft = '0px';
    el.style.paddingRight = '0px';
    el.style.borderWidth = '0px';
    el.style.opacity = '0';
    el.style.transform = 'scale(0.92)';

    setTimeout(() => {
      if (token !== buhunSelectAnimToken) return;
      el.classList.add('hidden');
      el.style.width = '';
      el.style.paddingLeft = '';
      el.style.paddingRight = '';
      el.style.borderWidth = '';
      el.style.opacity = '';
      el.style.transform = '';
      el.style.overflow = '';
      el.style.transition = '';
    }, 210);
  }
}

function setPasteButtonVisible(show) {
  if (show) {
    clearTimeout(pasteHideTimer);
    pasteHideTimer = null;

    const wasHidden = btnPaste.classList.contains('hidden');
    const wasLeaving = btnPaste.classList.contains('is-leaving');

    if (wasHidden || wasLeaving) {
      btnPaste.classList.remove('hidden', 'is-leaving', 'is-entering', 'is-feedback');
      btnPaste.querySelector('span').textContent = 'Témpél';
      void btnPaste.offsetWidth;
      btnPaste.classList.add('is-entering');
    }
  } else {
    if (btnPaste.classList.contains('hidden') || btnPaste.classList.contains('is-leaving')) {
      return;
    }

    btnPaste.classList.remove('is-entering');
    void btnPaste.offsetWidth;
    btnPaste.classList.add('is-leaving');

    clearTimeout(pasteHideTimer);
    pasteHideTimer = setTimeout(() => {
      pasteHideTimer = null;
      btnPaste.classList.add('hidden');
      btnPaste.classList.remove('is-leaving', 'is-feedback');
      btnPaste.querySelector('span').textContent = 'Témpél';
    }, 185);
  }
}

function setKbPopupVisible(show) {
  const token = ++kbPopupAnimToken;
  isKbPopupOpen = show;
  btnPopupKb.classList.toggle('is-active', show);
  syncMobileInputMode();

  if (show) {
    kbPopupEl.classList.remove('hidden', 'is-closing', 'is-opening');
    void kbPopupEl.offsetWidth;
    kbPopupEl.classList.add('is-opening');
  } else {
    if (kbPopupEl.classList.contains('hidden')) return;
    kbPopupEl.classList.remove('is-opening');
    void kbPopupEl.offsetWidth;
    kbPopupEl.classList.add('is-closing');

    setTimeout(() => {
      if (token !== kbPopupAnimToken) return;
      kbPopupEl.classList.add('hidden');
      kbPopupEl.classList.remove('is-closing');
    }, 220);
  }
}

function setFloatingPreviewVisible(show) {
  if (isFloatingPreviewVisible === show) return;
  isFloatingPreviewVisible = show;
  const token = ++floatingPreviewAnimToken;

  if (show) {
    if (isKbPopupOpen) {
      setKbPopupVisible(false);
    }
    if (!fpBtnSwap._feedbackTimer) animateButtonMorph(fpBtnSwap, 'Liron', false);
    if (!fpBtnClear._feedbackTimer) animateButtonMorph(fpBtnClear, 'Hapus', false);
    if (!fpBtnCopy._feedbackTimer) animateButtonMorph(fpBtnCopy, 'Tiron', false);

    floatingPreviewEl.classList.remove('hidden', 'is-closing', 'is-opening');
    void floatingPreviewEl.offsetWidth;
    floatingPreviewEl.classList.add('is-opening');
    syncFloatingPreview();
  } else {
    if (floatingPreviewEl.classList.contains('hidden')) return;
    floatingPreviewEl.classList.remove('is-opening');
    void floatingPreviewEl.offsetWidth;
    floatingPreviewEl.classList.add('is-closing');

    setTimeout(() => {
      if (token !== floatingPreviewAnimToken) return;
      floatingPreviewEl.classList.add('hidden');
      floatingPreviewEl.classList.remove('is-closing');
    }, 200);
  }
}

function triggerSwapAnimation() {
  [btnSwap, fpBtnSwap].forEach(btn => {
    if (!btn) return;
    btn.classList.remove('spin-clockwise');
    void btn.offsetWidth;
    btn.classList.add('spin-clockwise');
    clearTimeout(btn._spinTimer);
    btn._spinTimer = setTimeout(() => {
      btn.classList.remove('spin-clockwise');
    }, 440);
  });

  [mainTitleEl, subtitleTextEl, inputLabelEl, outputLabelEl, inputEl, outputEl].forEach(el => {
    el.classList.remove('swap-animate-text');
    void el.offsetWidth;
    el.classList.add('swap-animate-text');
  });

  document.querySelectorAll('.editor-grid .card').forEach(card => {
    card.classList.remove('swap-animate-card');
    void card.offsetWidth;
    card.classList.add('swap-animate-card');
  });

  document.querySelectorAll('.floating-preview .fp-box').forEach(box => {
    box.classList.remove('fp-swap-box');
    void box.offsetWidth;
    box.classList.add('fp-swap-box');
  });

  [
    [fpInputTextEl, 'fp-swap-in'],
    [fpOutputTextEl, 'fp-swap-out'],
    [fpInputTagEl, 'label-pop'],
    [fpOutputTagEl, 'label-pop']
  ].forEach(([el, cls]) => {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
  });
}

function triggerSampleAnimation() {
  [inputEl, outputEl].forEach(el => {
    el.classList.remove('swap-animate-text');
    void el.offsetWidth;
    el.classList.add('swap-animate-text');
  });

  document.querySelectorAll('.editor-grid .card').forEach(card => {
    card.classList.remove('sample-animate-card');
    void card.offsetWidth;
    card.classList.add('sample-animate-card');
  });
}

function triggerClearAnimation() {
  [inputEl, outputEl, fpInputTextEl, fpOutputTextEl].forEach(el => {
    if (!el) return;
    el.classList.remove('clear-animate-text');
    void el.offsetWidth;
    el.classList.add('clear-animate-text');
  });

  document.querySelectorAll('.editor-grid .card').forEach(card => {
    card.classList.remove('clear-animate-card');
    void card.offsetWidth;
    card.classList.add('clear-animate-card');
  });

  document.querySelectorAll('.floating-preview .fp-box').forEach(box => {
    box.classList.remove('fp-clear-box');
    void box.offsetWidth;
    box.classList.add('fp-clear-box');
  });
}

// =========================================================
// 6. ACTION HANDLERS & EVENT LISTENERS
// =========================================================
function swapDirection({ fromFloatingBar = false } = {}) {
  const prevClearLeft = btnClear.getBoundingClientRect().left;
  const prevCopyLeft = btnCopy.getBoundingClientRect().left;

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
    subtitleTextEl.innerHTML = 'Ketik téks basa Sunda nganggo huruf <strong class="notranslate" translate="no">e</strong> (pamepet), <strong class="notranslate" translate="no">é</strong> (panéléng), sareng <strong class="notranslate" translate="no">eu</strong> (paneuleung) anu leres supados hasilna merenah.';
    inputLabelEl.textContent = 'Aksara Latén';
    outputLabelEl.textContent = 'Aksara Sunda';

    inputEl.classList.remove('sunda-font');
    outputEl.classList.add('sunda-font');
    inputEl.placeholder = 'Ketik téks basa Sunda di dieu, pastikeun nganggo huruf e/é/eu anu leres...';
    outputEl.placeholder = 'ᮠᮞᮤᮜ᮪ᮔ ᮘᮊᮜ᮪ ᮊᮜᮥᮃᮁ ᮓᮤ ᮓᮤᮉ...';

    buhunControlsEl.classList.remove('hidden');
    binduTranslateWrapper.classList.add('hidden');
    latinHelpersEl.classList.remove('hidden');
    btnPopupKb.classList.add('hidden');

    setKbPopupVisible(false);
    inputEl.value = prevOutput;
  }

  const enteringControls = mode === 'SUNDA_TO_LATIN'
    ? [btnPopupKb, binduTranslateWrapper]
    : [latinHelpersEl, buhunControlsEl];

  enteringControls.forEach(el => {
    el.classList.remove('control-swap-in');
    void el.offsetWidth;
    el.classList.add('control-swap-in');
  });

  [
    [btnClear, prevClearLeft],
    [btnCopy, prevCopyLeft]
  ].forEach(([btn, prevLeft]) => {
    const deltaX = prevLeft - btn.getBoundingClientRect().left;
    if (Math.abs(deltaX) > 0.5) {
      btn.style.transition = 'none';
      btn.style.transform = `translateX(${deltaX}px)`;
      void btn.offsetWidth;
      btn.style.transition = 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)';
      btn.style.transform = 'translateX(0)';
      clearTimeout(btn._flipTimer);
      btn._flipTimer = setTimeout(() => {
        btn.style.transform = '';
        btn.style.transition = '';
      }, 290);
    }
  });

  triggerButtonFeedback(btnSwap, 'Arah Dilironkeun!', 'Liron Arah', 1500);
  triggerButtonFeedback(fpBtnSwap, 'Diliron!', 'Liron', 1500);

  updateOutput();
  if (!fromFloatingBar && !IS_TOUCH_DEVICE) {
    inputEl.focus();
  }
}

function handleClearAction(skipFocus = false) {
  const hadText = inputEl.value.length > 0;
  inputEl.value = '';
  outputEl.value = '';

  if (pasteFeedbackTimer || pasteHideTimer) {
    clearTimeout(pasteFeedbackTimer);
    clearTimeout(pasteHideTimer);
    pasteFeedbackTimer = null;
    pasteHideTimer = null;
    btnPaste.classList.remove('is-leaving', 'is-feedback');
    btnPaste.querySelector('span').textContent = 'Témpél';
  }

  updateOutput();

  if (hadText) {
    triggerClearAnimation();
    triggerButtonFeedback(btnClear, 'Dihapus!', 'Hapus', 1500);
    triggerButtonFeedback(fpBtnClear, 'Dihapus!', 'Hapus', 1500);
  }

  if (!skipFocus && !IS_TOUCH_DEVICE) {
    inputEl.focus();
  }
}

async function handleCopyAction() {
  if (!outputEl.value) return;
  const token = ++copyActionToken;
  await navigator.clipboard.writeText(outputEl.value);
  if (token !== copyActionToken) return;

  triggerButtonFeedback(btnCopy, 'Ditiron!', 'Tiron', 1500);
  triggerButtonFeedback(fpBtnCopy, 'Ditiron!', 'Tiron', 1500);

  const outputCardEl = document.querySelector('.output-card');
  const fpOutputBoxEl = document.querySelector('.fp-output-box');

  if (outputCardEl) {
    outputCardEl.classList.remove('copy-animate-card');
    void outputCardEl.offsetWidth;
    outputCardEl.classList.add('copy-animate-card');
  }
  if (fpOutputBoxEl) {
    fpOutputBoxEl.classList.remove('fp-copy-box');
    void fpOutputBoxEl.offsetWidth;
    fpOutputBoxEl.classList.add('fp-copy-box');
  }

  [outputEl, fpOutputTextEl].forEach(el => {
    if (!el) return;
    el.classList.remove('swap-animate-text');
    void el.offsetWidth;
    el.classList.add('swap-animate-text');
  });
}

// Editor Input & IME Events
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

// Buhun & Bindu Controls
toggleBuhunEl.addEventListener('change', () => {
  setBuhunSelectVisible(toggleBuhunEl.checked);
  updateOutput();
});

['pointerdown', 'focus', 'keydown'].forEach(evt => {
  buhunStyleEl.addEventListener(evt, () => {
    if (!buhunStyleEl.classList.contains('hidden')) {
      lastBuhunSelectWidth = buhunStyleEl.getBoundingClientRect().width;
    }
  });
});

buhunStyleEl.addEventListener('change', () => {
  animateSelectWidth(buhunStyleEl, lastBuhunSelectWidth);
  updateOutput();
});

toggleTranslateBinduEl.addEventListener('change', updateOutput);

// Main Toolbar & Helper Buttons
btnSwap.addEventListener('click', () => swapDirection());
btnClear.addEventListener('click', () => handleClearAction(false));
btnCopy.addEventListener('click', handleCopyAction);

charBtns.forEach(btn => {
  btn.addEventListener('click', () => insertAtCursor(btn.dataset.char));
});

btnSample.addEventListener('click', () => {
  const currentVal = inputEl.value.trim();

  if (mode === 'LATIN_TO_SUNDA') {
    const candidates = LATIN_SAMPLES.filter(item => item.text.trim() !== currentVal);
    const pool = candidates.length > 0 ? candidates : LATIN_SAMPLES;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    inputEl.value = chosen.text;

    const prevWidth = !buhunStyleEl.classList.contains('hidden')
      ? buhunStyleEl.getBoundingClientRect().width
      : 0;
    buhunStyleEl.value = chosen.style;
    animateSelectWidth(buhunStyleEl, prevWidth);
  } else {
    const candidates = SUNDA_SAMPLES.filter(item => item.trim() !== currentVal);
    const pool = candidates.length > 0 ? candidates : SUNDA_SAMPLES;
    inputEl.value = pool[Math.floor(Math.random() * pool.length)];
  }

  updateOutput();
  triggerSampleAnimation();

  if (!IS_TOUCH_DEVICE) {
    inputEl.focus();
  }
});

btnPaste.addEventListener('click', async () => {
  try {
    const clipText = await navigator.clipboard.readText();
    if (!clipText) return;

    if (mode === 'SUNDA_TO_LATIN') {
      const converted = liveConvertInputToSunda(clipText, clipText.length);
      inputEl.value = converted.text;
      inputEl.selectionStart = inputEl.selectionEnd = converted.cursor;
    } else {
      inputEl.value = clipText;
      inputEl.selectionStart = inputEl.selectionEnd = clipText.length;
    }

    clearTimeout(pasteFeedbackTimer);
    clearTimeout(pasteHideTimer);
    pasteHideTimer = null;

    btnPaste.classList.remove('hidden', 'is-leaving', 'is-entering');
    animateButtonMorph(btnPaste, 'Ditémpél!', true);

    const inputCardEl = document.querySelector('.editor-grid .card:not(.output-card)');
    if (inputCardEl) {
      inputCardEl.classList.remove('paste-animate-card');
      void inputCardEl.offsetWidth;
      inputCardEl.classList.add('paste-animate-card');
    }
    [inputEl, outputEl].forEach(el => {
      el.classList.remove('swap-animate-text');
      void el.offsetWidth;
      el.classList.add('swap-animate-text');
    });

    pasteFeedbackTimer = setTimeout(() => {
      pasteFeedbackTimer = null;
      if (inputEl.value.length > 0) {
        setPasteButtonVisible(false);
      } else {
        animateButtonMorph(btnPaste, 'Témpél', false);
      }
    }, 850);

    updateOutput();
    if (!IS_TOUCH_DEVICE) {
      inputEl.focus();
    }
  } catch (err) {
    inputEl.focus();
  }
});

// Kibor Sunda Popup Toggle & Drag
btnPopupKb.addEventListener('click', () => {
  btnPopupKb.classList.remove('is-tapping');
  void btnPopupKb.offsetWidth;
  btnPopupKb.classList.add('is-tapping');
  clearTimeout(btnPopupKb._tapTimer);
  btnPopupKb._tapTimer = setTimeout(() => {
    btnPopupKb.classList.remove('is-tapping');
  }, 420);

  const nextState = !isKbPopupOpen;
  setKbPopupVisible(nextState);
  if (nextState) {
    inputEl.blur();
    inputEl.focus({ preventScroll: true });
  }
});

btnClosePopup.addEventListener('click', () => {
  setKbPopupVisible(false);
});

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

// Floating Preview Bar Events & Observer
fpInputTextEl.addEventListener('compositionstart', () => {
  isComposing = true;
});

fpInputTextEl.addEventListener('compositionend', () => {
  isComposing = false;
  if (mode === 'SUNDA_TO_LATIN') {
    const converted = liveConvertInputToSunda(fpInputTextEl.value, fpInputTextEl.selectionStart);
    fpInputTextEl.value = converted.text;
    fpInputTextEl.selectionStart = fpInputTextEl.selectionEnd = converted.cursor;
  }
  inputEl.value = fpInputTextEl.value;
  updateOutput(true);
});

fpInputTextEl.addEventListener('input', () => {
  if (mode === 'SUNDA_TO_LATIN' && !isComposing) {
    const converted = liveConvertInputToSunda(fpInputTextEl.value, fpInputTextEl.selectionStart);
    fpInputTextEl.value = converted.text;
    fpInputTextEl.selectionStart = fpInputTextEl.selectionEnd = converted.cursor;
  }
  inputEl.value = fpInputTextEl.value;
  updateOutput(true);
});

fpBtnSwap.addEventListener('pointerdown', () => {
  wasFpInputFocused = document.activeElement === fpInputTextEl;
});

fpBtnSwap.addEventListener('click', () => {
  swapDirection({ fromFloatingBar: true });
  if (wasFpInputFocused) {
    fpInputTextEl.focus();
    wasFpInputFocused = false;
  }
});

fpBtnSpace.addEventListener('click', () => {
  insertAtCursor(' ', { fromReference: true, autoSwapIfEmpty: false });
});

fpBtnBackspace.addEventListener('click', () => {
  backspaceAtCursor({ skipFocus: IS_TOUCH_DEVICE && !isKbPopupOpen });
});

fpBtnClear.addEventListener('click', () => handleClearAction(true));
fpBtnCopy.addEventListener('click', handleCopyAction);

fpBtnTop.addEventListener('click', () => {
  fpBtnTop.classList.remove('is-launching');
  void fpBtnTop.offsetWidth;
  fpBtnTop.classList.add('is-launching');
  clearTimeout(fpBtnTop._launchTimer);
  fpBtnTop._launchTimer = setTimeout(() => {
    fpBtnTop.classList.remove('is-launching');
  }, 440);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (!IS_TOUCH_DEVICE) {
    inputEl.focus({ preventScroll: true });
  }
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(syncFpTagWidth);
}

if ('IntersectionObserver' in window && editorGridEl) {
  const editorObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      const scrolledPastEditor = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      setFloatingPreviewVisible(scrolledPastEditor);
    },
    { threshold: 0 }
  );
  editorObserver.observe(editorGridEl);
}

// =========================================================
// 7. INISIALISASI PITUDUH & POPUP KIBOR
// =========================================================
function initSundaKeyboards() {
  const refSubtitleEl = document.getElementById('ref-subtitle');
  if (refSubtitleEl && IS_TOUCH_DEVICE) {
    refSubtitleEl.textContent = 'Toél aksara kanggo nyelapkeun kana kotak input.';
  }

  function createRefBtn({ insertChar, displayChar, label, tooltip, isBuhun = false }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `kb-key ${isBuhun ? 'buhun-tag' : ''}`;
    btn.title = tooltip;
    btn.innerHTML = `<span class="notranslate" translate="no">${displayChar}</span><small>${label}</small>`;
    btn.addEventListener('click', () => insertAtCursor(insertChar, { fromReference: true, autoSwapIfEmpty: true }));
    return btn;
  }

  function createPopBtn({ insertChar, displayChar, tooltip, isBuhun = false }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `pop-key ${isBuhun ? 'buhun-tag' : ''}`;
    btn.title = tooltip;
    btn.innerHTML = `<span class="notranslate" translate="no">${displayChar}</span>`;
    btn.addEventListener('click', () => insertAtCursor(insertChar));
    return btn;
  }

  function createPopSpacer() {
    const span = document.createElement('span');
    span.className = 'pop-spacer';
    return span;
  }

  function animateKbGroupHeight(groupEl, updateDomFn, onCompleteFn) {
    const token = (groupEl._animToken || 0) + 1;
    groupEl._animToken = token;

    const startHeight = groupEl.getBoundingClientRect().height;

    groupEl.style.transition = 'none';
    groupEl.style.height = 'auto';

    const afterMeasureFn = updateDomFn();
    const endHeight = groupEl.getBoundingClientRect().height;

    if (afterMeasureFn) {
      afterMeasureFn();
    }

    groupEl.style.height = `${startHeight}px`;
    groupEl.style.overflow = 'hidden';
    void groupEl.offsetWidth;

    groupEl.style.transition = 'height 0.28s cubic-bezier(0.22, 1, 0.36, 1)';
    groupEl.style.height = `${endHeight}px`;

    clearTimeout(groupEl._heightTimer);
    groupEl._heightTimer = setTimeout(() => {
      if (groupEl._animToken !== token) return;
      groupEl.style.height = '';
      groupEl.style.overflow = '';
      groupEl.style.transition = '';
      if (onCompleteFn) onCompleteFn();
    }, 290);
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
      label: `<span class="notranslate" translate="no">${l}</span>`,
      tooltip: `Aksara Swara: ${l}`
    };
    refSwara.appendChild(createRefBtn(item));
    popSwara.appendChild(createPopBtn(item));
  });

  // RARANGKÉN
  const rarangkenRow1 = [
    { s: 'ᮤ', display: '◌ᮤ', label: 'panghulu', morpheme: '(-i)', buhun: false },
    { s: 'ᮥ', display: '◌ᮥ', label: 'panyuku', morpheme: '(-u)', buhun: false },
    { s: 'ᮦ', display: '◌ᮦ', label: 'panéléng', morpheme: '(-é)', buhun: false },
    { s: 'ᮧ', display: '◌ᮧ', label: 'panolong', morpheme: '(-o)', buhun: false },
    { s: 'ᮨ', display: '◌ᮨ', label: 'pamepet', morpheme: '(-e)', buhun: false },
    { s: 'ᮩ', display: '◌ᮩ', label: 'paneuleung', morpheme: '(-eu)', buhun: false }
  ];

  const rarangkenRow2 = [
    { s: 'ᮡ', display: '◌ᮡ', label: 'pamingkal', morpheme: '(-y-)', buhun: false },
    { s: 'ᮢ', display: '◌ᮢ', label: 'panyakra', morpheme: '(-r-)', buhun: false },
    { s: 'ᮣ', display: '◌ᮣ', label: 'panyiku', morpheme: '(-l-)', buhun: false },
    { s: 'ᮁ', display: '◌ᮁ', label: 'panglayar', morpheme: '(-r)', buhun: false },
    { s: 'ᮀ', display: '◌ᮀ', label: 'panyecek', morpheme: '(-ng)', buhun: false },
    { s: 'ᮂ', display: '◌ᮂ', label: 'pangwisad', morpheme: '(-h)', buhun: false },
    { s: '᮪', display: '◌᮪', label: 'pamaéh', buhun: false },
    { s: 'ᮭ', display: '◌ᮭ', label: 'papasangan', morpheme: '(-wa)', buhun: true },
    { s: 'ᮬ', display: '◌ᮬ', label: 'papasangan', morpheme: '(-ma)', buhun: true },
    { s: 'ᮾ', display: 'ᮾ', label: 'akhiran', morpheme: '(-k)', buhun: true },
    { s: 'ᮿ', display: 'ᮿ', label: 'akhiran', morpheme: '(-m)', buhun: true }
  ];

  const refRarangken = document.getElementById('kb-rarangken');
  const popRarangken = document.getElementById('pop-rarangken');

  popRarangken.appendChild(createPopSpacer());
  rarangkenRow1.forEach(item => {
    const cfg = {
      insertChar: item.s,
      displayChar: item.display,
      label: `${item.label}${item.morpheme ? `<span class="notranslate" translate="no"> ${item.morpheme}</span> ` : ''}`,
      tooltip: `Rarangkén: ${item.label}${item.morpheme ? ` ${item.morpheme}` : ''}`,
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
      label: `${item.label}${item.morpheme ? `<span class="notranslate" translate="no"> ${item.morpheme}</span>` : ''}`,
      tooltip: item.buhun
        ? `Rarangkén Sunda Buhun: ${item.label}${item.morpheme ? ` ${item.morpheme}` : ''}`
        : `Rarangkén: ${item.label}${item.morpheme ? ` ${item.morpheme}` : ''}`,
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
    { label: 'bha', s: 'ᮽ', buhun: true }
  ];

  const refNgalagena = document.getElementById('kb-ngalagena');
  const popNgalagena = document.getElementById('pop-ngalagena');

  ngalagenaRow1.forEach(([label, s]) => {
    const cfg = { insertChar: s, displayChar: s, label: `<span class="notranslate" translate="no">${label}</span>`, tooltip: `Aksara Ngalagena: ${label}` };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });

  ngalagenaRow2.forEach(([label, s]) => {
    const cfg = { insertChar: s, displayChar: s, label: `<span class="notranslate" translate="no">${label}</span>`, tooltip: `Aksara Ngalagena: ${label}` };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });
  popNgalagena.appendChild(createPopSpacer());

  ngalagenaRow3.forEach(item => {
    const cfg = {
      insertChar: item.s,
      displayChar: item.s,
      label: `<span class="notranslate" translate="no">${item.label}</span>`,
      tooltip: item.buhun ? `Aksara Ngalagena Sunda Buhun: ${item.label}` : `Aksara Ngalagena: ${item.label}`,
      isBuhun: item.buhun
    };
    refNgalagena.appendChild(createRefBtn(cfg));
    popNgalagena.appendChild(createPopBtn(cfg));
  });

  // SUNDA BUHUN KHUSUS
  const refBuhunKhusus = document.getElementById('kb-buhun-khusus');
  const popBuhunKhusus = document.getElementById('pop-buhun-khusus');
  const toggleDescBuhun = document.getElementById('toggle-desc-buhun');
  const buhunGroupEl = refBuhunKhusus.closest('.kb-group');

  function renderBuhunRef(showDesc, animate = true) {
    const buildItems = () => {
      refBuhunKhusus.innerHTML = '';
      refBuhunKhusus.classList.toggle('show-details', showDesc);

      BUHUN_KHUSUS_LIST.forEach((item, idx) => {
        const tooltip = `${item.label}${item.sound ? ` ${item.sound}` : ''}: ${item.desc}`;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `kb-key buhun-tag${animate ? ' kb-item-animate' : ''}`;
        if (animate) btn.style.setProperty('--i', idx);
        btn.title = tooltip;

        if (showDesc) {
          btn.innerHTML = `
            <div class="kb-key-head">
              <span class="sym">${item.s}</span>
              <span class="lbl">${item.label}${item.sound ? `<span class="notranslate" translate="no"> ${item.sound}</span>` : ''}</span>
            </div>
            <span class="kb-key-desc">${item.desc}</span>
          `;
        } else {
          btn.innerHTML = `${item.s}<small>${item.label}${item.sound ? `<span class="notranslate" translate="no"> ${item.sound}</span>` : ''}</small>`;
        }
        btn.addEventListener('click', () => insertAtCursor(item.s, { fromReference: true, autoSwapIfEmpty: true }));
        refBuhunKhusus.appendChild(btn);
      });
    };

    if (!animate) {
      buildItems();
      return;
    }

    animateKbGroupHeight(buhunGroupEl, () => {
      buildItems();
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

  renderBuhunRef(false, false);
  toggleDescBuhun.addEventListener('change', (e) => renderBuhunRef(e.target.checked, true));

  // KARAKTER BINDU
  const refBindu = document.getElementById('kb-bindu');
  const popBindu = document.getElementById('pop-bindu');
  const toggleDescBindu = document.getElementById('toggle-desc-bindu');
  const binduExtraNotes = document.getElementById('bindu-extra-notes');
  const binduGroupEl = refBindu.closest('.kb-group');

  function renderBinduRef(showDesc, animate = true) {
    const buildItems = () => {
      refBindu.innerHTML = '';
      refBindu.classList.toggle('show-details', showDesc);

      BINDU_LIST.forEach((item, idx) => {
        const tooltip = `${item.name} (${item.category}): ${item.desc}`;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `kb-key buhun-tag${animate ? ' kb-item-animate' : ''}`;
        if (animate) btn.style.setProperty('--i', idx);
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
        btn.addEventListener('click', () => insertAtCursor(item.char, { fromReference: true, autoSwapIfEmpty: true }));
        refBindu.appendChild(btn);
      });
    };

    if (!animate) {
      buildItems();
      binduExtraNotes.classList.toggle('hidden', !showDesc);
      return;
    }

    animateKbGroupHeight(
      binduGroupEl,
      () => {
        buildItems();

        if (showDesc) {
          binduExtraNotes.classList.remove('hidden', 'is-collapsing', 'is-entering');
          void binduExtraNotes.offsetWidth;
          binduExtraNotes.classList.add('is-entering');
          return null;
        } else {
          binduExtraNotes.classList.add('hidden');
          return () => {
            binduExtraNotes.classList.remove('hidden', 'is-entering');
            binduExtraNotes.classList.add('is-collapsing');
          };
        }
      },
      () => {
        if (!showDesc) {
          binduExtraNotes.classList.add('hidden');
          binduExtraNotes.classList.remove('is-collapsing');
        }
      }
    );
  }

  BINDU_LIST.forEach(item => {
    popBindu.appendChild(createPopBtn({
      insertChar: item.char,
      displayChar: item.char,
      tooltip: `${item.name}: ${item.desc}`,
      isBuhun: true
    }));
  });

  renderBinduRef(false, false);
  toggleDescBindu.addEventListener('change', (e) => renderBinduRef(e.target.checked, true));

  // DOCK HANDAP KIBOR
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
        onClick: () => backspaceAtCursor()
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
        onClick: () => backspaceAtCursor()
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