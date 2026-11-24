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
  'w': 'ᮭ',   // papasangan -wa
  'm': 'ᮬ'    // papasangan -ma
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
  'ishoma',
  'shubuh', 'shubhi', 'shubh',
  'ashar', 'ashri', 'ashr',
  'sholeh', 'sholih', 'shalah', 'shaleh', 'shalih',
  'shobar', 'shabr', 'shabar', 'shobr',
  'shodaqoh', 'shadaqah',
  'shohih', 'shahih',
  'shohabat', 'sahabat', 'shohabah', 'sahabah',
  'shuf', 'shof', 'shaf',
  'musholla', 'mushalla', 'mushola', 'mushala',
  'nashihat', 'nashihah',
  'shafar',
  'shaum', 'shiyam',
  'shiddiq', 'shidiq',
  'shifat',
  'shirah', 'shirath', 'sirath',
  'shilaturahmi', 'shilaturrahmi', 'shilah',
  'shuhuf',
  'shulh', 'shuluh',
  'shurah', 'shurat',
  'ishlah',
  'ushul',
  'mashlahat',
  'khushus',
  'ikhlash',
  'mashum'
];

const SH_EXCEPTION_REGEX = new RegExp(
  `([a-zé]*)(${SH_TO_S_EXCEPTIONS.join('|')})([a-zé]*)`,
  'g'
);

const FALSE_DIGRAPH_MAP = {
  // sh
  'mushaf': "mus'haf",
  'mashaf': "mas'haf",
  'ashab': "as'hab",
  'ishak': "is'hak", 'ishaq': "is'haq", 'ishaak': "is'haak", 'ishaaq': "is'haaq",
  'tashih': "tas'hih",
  'fusha': "fus'ha",
  'nashab': "nas'hab",
  // sj
  'masjid': "mas'jid",
  'asjad': "as'jad",
  'transj': "trans'j",
  // th
  'fathah': "fat'hah",
  'fathul': "fat'hul",
  'fathi': "fat'hi",
  'ithaf': "it'haf",
  // bh
  'subh': "sub'h",
  // dj
  'adjektif': "ad'jektif",
  'adjudan': "ad'judan",
  // jh
  'ajhar': "aj'har",
  // zh
  'azhar': "az'har",
  'izhar': "id'har",
  'mazhab': "mad'hab",
  // dh
  'adha': "ad'ha",
  'idhar': "id'har",
  'madhab': "mad'hab"
};

const FALSE_DIGRAPH_REGEX = new RegExp(
  `([a-zé]*)(${Object.keys(FALSE_DIGRAPH_MAP).join('|')})([a-zé]*)`,
  'g'
);

const RESTORE_FALSE_DIGRAPH_MAP = Object.fromEntries(
  Object.entries(FALSE_DIGRAPH_MAP).map(([clean, quoted]) => [quoted, clean])
);

const RESTORE_FALSE_DIGRAPH_REGEX = new RegExp(
  Object.keys(RESTORE_FALSE_DIGRAPH_MAP)
    .sort((a, b) => b.length - a.length)
    .join('|'),
  'g'
);

function normalizeLatin(text, isBuhun = false) {
  let s = text.toLowerCase();

  s = s.replace(FALSE_DIGRAPH_REGEX, (match, prefix, root, suffix) => {
    return prefix + (FALSE_DIGRAPH_MAP[root] || root) + suffix;
  });

  s = s.replace(SH_EXCEPTION_REGEX, (match, prefix, root, suffix) => {
    return prefix + root.replace(/sh/g, 's').replace(/th/g, 't') + suffix;
  });

  if (!isBuhun) {
    s = s.replace(/bh/g, 'b');
  }

  return s
    .replace(/oeeu/g, "oe'eu")
    .replace(/oeu/g, "o'eu")
    .replace(/(sh|sj)/g, 'sy')
    .replace(/ñ/g, 'ny')
    .replace(/ph/g, 'f')
    .replace(/(tj|ch)/g, 'c')
    .replace(/(dh|dz)/g, 'd')
    .replace(/(dj|zh|jh)/g, 'j')
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
    const buhunPattern = /(^|[^a-zé])(reu|leu)(?![a-zé])|(?<=[a-zé])(')(?=[a-zé])|(bh|ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])'a|(bh|ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])(?!\5)([yrlwm])?(eu|[aiuéoe])((?:ng|[rhkm])(?![aiuéoe]|'a))?|(eu|[aiuéoe])((?:ng|[rhkm])(?![aiuéoe]|'a))?|(bh|ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])|([0-9]+)|([.,;!?])|([^a-zé0-9.,;!?]+)/g;

    return processed.replace(buhunPattern, (
      match,
      prefixSpecial, specialSyllable,
      midWordQuote,
      avagrahaCons,
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
      if (midWordQuote) {
        return '';
      }
      if (avagrahaCons) {
        return (NGALAGENA_ALL[avagrahaCons] || '') + AVAGRAHA;
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

  const bakuPattern = /(?<=[a-zé])(')(?=[a-zé])|(ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])(?!\2)([yrl])?(eu|[aiuéoe])((?:ng|[rh])(?![aiuéoe]))?|(eu|[aiuéoe])((?:ng|[rh])(?![aiuéoe]))?|(ng|ny|kh|sy|[bcdfghjklmnpqrstvwxyz])|([0-9]+)|([^a-zé0-9]+)/g;

  return processed.replace(bakuPattern, (
    match,
    midWordQuote,
    cons, medial, vowelAfterCons, codaAfterCons,
    standaloneVowel, codaAfterSwara,
    deadCons,
    digits,
    other
  ) => {
    if (midWordQuote) {
      return '';
    }
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

let liveWordState = {
  sundaBeforeWord: '',
  wordSunda: '',
  wordLatin: '',
  sundaAfterWord: ''
};

function liveConvertInputToSunda(rawText, cursorPos) {
  if (!rawText) {
    liveWordState = { sundaBeforeWord: '', wordSunda: '', wordLatin: '', sundaAfterWord: '' };
    return { text: '', cursor: 0 };
  }

  const before = rawText.slice(0, cursorPos);
  const after = rawText.slice(cursorPos);
  const tailMatch = before.match(/([a-zA-ZéÉñÑ']+)$/);

  if (tailMatch) {
    const latinTail = tailMatch[1];
    const prefixBeforeTail = before.slice(0, -latinTail.length);
    const prevTrailingLatin = (liveWordState.wordSunda.match(/([a-zA-ZéÉñÑ']+)$/) || ['', ''])[1];
    const prevPureWordSunda = prevTrailingLatin
      ? liveWordState.wordSunda.slice(0, -prevTrailingLatin.length)
      : liveWordState.wordSunda;

    if (
      liveWordState.wordLatin &&
      prefixBeforeTail === liveWordState.sundaBeforeWord + prevPureWordSunda &&
      after === liveWordState.sundaAfterWord &&
      latinTail.startsWith(prevTrailingLatin)
    ) {
      const newlyTyped = latinTail.slice(prevTrailingLatin.length);
      const nextWordLatin = liveWordState.wordLatin + newlyTyped;
      const nextWordSunda = latinToSunda(nextWordLatin, false);

      liveWordState.wordLatin = nextWordLatin;
      liveWordState.wordSunda = nextWordSunda;

      const fullBefore = liveWordState.sundaBeforeWord + nextWordSunda;
      return {
        text: fullBefore + after,
        cursor: fullBefore.length
      };
    }

    const sundaWordMatch = prefixBeforeTail.match(/([ᮃ-ᮯᮾᮿ]+)$/);
    const prevSundaWord = sundaWordMatch ? sundaWordMatch[1] : '';
    const sundaBeforeWord = prevSundaWord
      ? prefixBeforeTail.slice(0, -prevSundaWord.length)
      : prefixBeforeTail;
    const baseWordLatin = prevSundaWord ? sundaToLatin(prevSundaWord, false, false) : '';
    const nextWordLatin = baseWordLatin + latinTail;
    const nextWordSunda = latinToSunda(nextWordLatin, false);

    liveWordState = {
      sundaBeforeWord,
      wordSunda: nextWordSunda,
      wordLatin: nextWordLatin,
      sundaAfterWord: after
    };

    const fullBefore = sundaBeforeWord + nextWordSunda;
    return {
      text: fullBefore + after,
      cursor: fullBefore.length
    };
  }

  liveWordState = { sundaBeforeWord: '', wordSunda: '', wordLatin: '', sundaAfterWord: '' };

  function convertChunk(chunk) {
    const contextPattern = /([ᮃ-ᮯᮾᮿ]+)([a-zA-ZéÉñÑ']+)/g;

    let merged = chunk.replace(contextPattern, (_, sundaPart, latinTail) => {
      return sundaToLatin(sundaPart, false, false) + latinTail;
    });

    merged = merged.replace(/'?[a-zA-ZéÉñÑ]+(?:'[a-zA-ZéÉñÑ]*)*'?/g, (latinToken) => {
      return latinToSunda(latinToken, false);
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

const DIGRAPH_PAIRS = new Set([
  'sh', 'sj', 'sy',
  'ny', 'ng',
  'kh', 'ph',
  'tj', 'ch',
  'dj', 'dh', 'dz',
  'th', 'gh', 'bh',
  'oe', 'eu'
]);

function sundaToLatin(text, translateBindu = false, capitalize = true) {
  let workingText = text;

  if (translateBindu) {
    workingText = workingText.replace(/[᳄᳅᳆᳇]?[᳅᳆][᳀᳁᳂][᳅᳆][᳄᳅᳆᳇]?\s*/g, '');
    workingText = workingText.replace(/᳇᳇\s*/g, '\n\n');
    workingText = workingText.replace(/(^|\n|\s)᳇\s*/g, '$1• ');
    workingText = workingText.replace(/[᳄᳅᳆]/g, '');
  }

  const pattern = /([ᮊ-ᮠᮮᮯᮽ])([ᮡ-ᮣᮬᮭ])?([᮪ᮤ-ᮩ])?|([ᮀ-ᮂᮾᮿ])|([ᮃ-ᮉ])|(ᮺ)|(ᮻ)|(ᮼ)|\|([᮰-᮹]+)\||([᮰-᮹])|(\|\|)|(\|)|([᳀-᳇])|([\s\S])/g;
  let prevEndedWithConsonant = false;
  let prevLastChar = '';

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
    bindu,
    other,
    offset,
    fullString
  ) => {
    const withBoundaryQuote = (chunk) => {
      if (!chunk) return '';
      const firstChar = chunk[0];
      const needsQuote = prevLastChar && DIGRAPH_PAIRS.has(prevLastChar + firstChar);
      prevLastChar = chunk[chunk.length - 1];
      return (needsQuote ? "'" : '') + chunk;
    };

    if (ngalagena) {
      let base = REV_NGALAGENA[ngalagena] || '';
      if (sisipan) {
        base += REV_SISIPAN[sisipan] || '';
      }
      if (modifier === PAMAEH) {
        prevEndedWithConsonant = true;
        return withBoundaryQuote(base);
      }
      prevEndedWithConsonant = false;
      if (modifier && REV_RARANGKEN_VOKAL[modifier]) {
        return withBoundaryQuote(base + REV_RARANGKEN_VOKAL[modifier]);
      }
      if (!modifier && fullString[offset + match.length] === AVAGRAHA) {
        return withBoundaryQuote(base);
      }
      return withBoundaryQuote(base + 'a');
    }
    if (akhir) {
      prevEndedWithConsonant = true;
      return withBoundaryQuote(REV_RARANGKEN_AKHIR[akhir] || '');
    }
    if (swara) {
      const glottalPrefix = prevEndedWithConsonant ? "'" : '';
      prevEndedWithConsonant = false;
      const vowelStr = REV_SWARA[swara] || '';
      if (glottalPrefix) {
        prevLastChar = vowelStr ? vowelStr[vowelStr.length - 1] : '';
        return glottalPrefix + vowelStr;
      }
      return withBoundaryQuote(vowelStr);
    }

    prevEndedWithConsonant = false;

    if (avagraha) {
      prevLastChar = 'a';
      return "'a";
    }
    if (pangreureu) return withBoundaryQuote('reu');
    if (pangwilet) return withBoundaryQuote('leu');

    prevLastChar = '';

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
    return other ?? match;
  });

  result = result
    .replace(RESTORE_FALSE_DIGRAPH_REGEX, (m) => RESTORE_FALSE_DIGRAPH_MAP[m] || m)
    .replace(/o'e'eu/g, 'oeeu')
    .replace(/o'eu/g, 'oeu');

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

const STORAGE_THEME_KEY = 'sunda_theme';
const STORAGE_LANG_KEY = 'sunda_lang';

let currentLang = 'su';
try {
  const savedLang = localStorage.getItem(STORAGE_LANG_KEY);
  if (savedLang && I18N_DATA[savedLang]) {
    currentLang = savedLang;
  }
} catch (e) {}

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
let refreshKeyboardLangFn = null;

function t() {
  return I18N_DATA[currentLang] || I18N_DATA.su;
}

// Header, Utility Bar & Mode Bar
const metaDescEl = document.getElementById('meta-description');
const langDropdownEl = document.getElementById('lang-dropdown');
const btnLang = document.getElementById('btn-lang');
const langCodeEl = document.getElementById('lang-code');
const langMenuEl = document.getElementById('lang-menu');
const langOptionBtns = document.querySelectorAll('.lang-option');

const themeSwitchLabelEl = document.getElementById('theme-switch-label');
const themeToggleEl = document.getElementById('theme-toggle');

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
const kbPopupEl = document.getElementById('kb-popup');
const kbPopupHeaderEl = document.getElementById('kb-popup-header');
const kbHeaderTitleEl = document.getElementById('kb-header-title');
const btnClosePopup = document.getElementById('btn-close-popup');

const btnPaste = document.getElementById('btn-paste');
const btnClear = document.getElementById('btn-clear');
const btnCopy = document.getElementById('btn-copy');
const btnSample = document.getElementById('btn-sample');

const buhunControlsEl = document.getElementById('buhun-controls');
const toggleBuhunEl = document.getElementById('toggle-buhun');
const buhunStyleEl = document.getElementById('buhun-style');
const buhunTogglePillEl = document.getElementById('buhun-toggle-pill');
const optStyleSajarahEl = document.getElementById('opt-style-sajarah');
const optStyleReligiEl = document.getElementById('opt-style-religi');
const optStylePrasastiEl = document.getElementById('opt-style-prasasti');

const binduTranslateWrapper = document.getElementById('bindu-translate-wrapper');
const toggleTranslateBinduEl = document.getElementById('toggle-translate-bindu');
const binduToggleLabelEl = document.getElementById('bindu-toggle-label');

// Guide & Reference Section
const guideDescEEl = document.getElementById('guide-desc-e');
const guideDescEAcuteEl = document.getElementById('guide-desc-eacute');
const guideDescEuEl = document.getElementById('guide-desc-eu');
const guideDescQuoteEl = document.getElementById('guide-desc-quote');
const refTitleEl = document.getElementById('ref-title');
const refSubtitleEl = document.getElementById('ref-subtitle');
const toggleRefDetailsEl = document.getElementById('toggle-ref-details');
const toggleRefDetailsLabelEl = document.getElementById('toggle-ref-details-label');
const toggleRefDetailsTextEl = document.getElementById('toggle-ref-details-text');
const angkaExampleNoteEl = document.getElementById('angka-example-note');
const catAngkaEl = document.getElementById('cat-angka');
const catSwaraEl = document.getElementById('cat-swara');
const catRarangkenEl = document.getElementById('cat-rarangken');
const catNgalagenaEl = document.getElementById('cat-ngalagena');
const catBuhunKhususEl = document.getElementById('cat-buhun-khusus');
const catBinduEl = document.getElementById('cat-bindu');

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
// 4. TEMA & BASA
// =========================================================
function applyTheme(theme, { persist = false } = {}) {
  const normalized = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', normalized);
  themeToggleEl.checked = normalized === 'dark';

  if (persist) {
    try {
      localStorage.setItem(STORAGE_THEME_KEY, normalized);
    } catch (e) {}
  }
}

function initTheme() {
  const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
  themeToggleEl.checked = initialTheme === 'dark';

  themeToggleEl.addEventListener('change', () => {
    applyTheme(themeToggleEl.checked ? 'dark' : 'light', { persist: true });
  });

  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_THEME_KEY)) return;
      } catch (err) {}
      applyTheme(e.matches ? 'dark' : 'light', { persist: false });
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }
}

function setLangMenuOpen(open) {
  btnLang.setAttribute('aria-expanded', String(open));
  if (open) {
    langMenuEl.classList.remove('hidden', 'is-opening');
    void langMenuEl.offsetWidth;
    langMenuEl.classList.add('is-opening');
  } else {
    langMenuEl.classList.add('hidden');
    langMenuEl.classList.remove('is-opening');
  }
}

function applyDirectionTexts() {
  const dict = t();
  const isSundaInput = mode === 'SUNDA_TO_LATIN';

  if (isSundaInput) {
    mainTitleEl.innerHTML = dict.titleSundaToLatin;
    subtitleTextEl.textContent = dict.subtitleSundaToLatin;
    inputLabelEl.textContent = dict.labelSunda;
    outputLabelEl.textContent = dict.labelLatin;
    inputEl.placeholder = dict.inputPlaceholderSunda;
    outputEl.placeholder = dict.outputPlaceholderLatin;
  } else {
    mainTitleEl.innerHTML = dict.titleLatinToSunda;
    subtitleTextEl.innerHTML = dict.subtitleLatinToSunda;
    inputLabelEl.textContent = dict.labelLatin;
    outputLabelEl.textContent = dict.labelSunda;
    inputEl.placeholder = dict.inputPlaceholderLatin;
    outputEl.placeholder = dict.outputPlaceholderSunda;
  }
}

function applyLanguage(lang, { persist = false } = {}) {
  if (!I18N_DATA[lang]) return;
  currentLang = lang;
  const dict = t();

  if (persist) {
    try {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
    } catch (e) {}
  }

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  if (metaDescEl) metaDescEl.setAttribute('content', dict.pageDesc);

  // Header Controls
  langCodeEl.textContent = lang.toUpperCase();
  btnLang.title = dict.langBtnTitle;
  langMenuEl.setAttribute('aria-label', dict.langMenuAria);
  langOptionBtns.forEach(opt => {
    const isSelected = opt.dataset.lang === lang;
    opt.classList.toggle('is-selected', isSelected);
    opt.setAttribute('aria-selected', String(isSelected));
  });

  themeSwitchLabelEl.title = dict.themeSwitchTitle;
  themeToggleEl.setAttribute('aria-label', dict.themeSwitchAria);

  // Mode & Editor Titles/Placeholders
  applyDirectionTexts();

  // Buttons & Tooltips
  btnSwap.title = dict.swapBtnTitle;
  if (!btnSwap._feedbackTimer) btnSwap.querySelector('span').textContent = dict.swapBtn;

  charBtns.forEach(btn => {
    btn.title = dict.insertCharTitle(btn.dataset.char);
  });

  btnPopupKb.title = dict.kbBtnTitle;
  btnPopupKb.querySelector('span').textContent = dict.kbBtn;

  btnClear.title = dict.clearBtnTitle;
  if (!btnClear._feedbackTimer) btnClear.querySelector('span').textContent = dict.clearBtn;

  btnPaste.title = dict.pasteBtnTitle;
  if (!pasteFeedbackTimer) btnPaste.querySelector('span').textContent = dict.pasteBtn;

  btnCopy.title = dict.copyBtnTitle;
  if (!btnCopy._feedbackTimer) btnCopy.querySelector('span').textContent = dict.copyBtn;

  btnSample.textContent = dict.sampleBtn;

  // Buhun & Bindu Controls
  buhunStyleEl.title = dict.buhunStyleTitle;
  syncBuhunStyleLabels(false);
  buhunTogglePillEl.title = dict.buhunToggleTitle;

  binduTranslateWrapper.title = dict.binduToggleTitle;
  binduToggleLabelEl.textContent = dict.binduToggle;

  // Guide Box
  guideDescEEl.innerHTML = dict.guideE;
  guideDescEAcuteEl.innerHTML = dict.guideEAcute;
  guideDescEuEl.innerHTML = dict.guideEu;
  if (guideDescQuoteEl) guideDescQuoteEl.innerHTML = dict.guideQuote;

  // Reference Section
  refTitleEl.textContent = dict.refTitle;
  refSubtitleEl.textContent = IS_TOUCH_DEVICE ? dict.refSubtitleTouch : dict.refSubtitleDesktop;

  toggleRefDetailsLabelEl.title = dict.toggleDetailsTitle;
  toggleRefDetailsTextEl.textContent = dict.toggleDetailsLabel;

  catAngkaEl.textContent = dict.catAngka;
  catSwaraEl.textContent = dict.catSwara;
  catRarangkenEl.textContent = dict.catRarangken;
  catNgalagenaEl.textContent = dict.catNgalagena;
  catBuhunKhususEl.textContent = dict.catBuhunKhusus;
  catBinduEl.textContent = dict.catBindu;

  // Floating Preview Bar
  floatingPreviewEl.setAttribute('aria-label', dict.fpAria);
  fpBtnSpace.textContent = dict.fpSpaceBtn;
  fpBtnSpace.title = dict.fpSpaceTitle;
  fpBtnBackspace.title = dict.fpBackspaceTitle;
  fpBtnClear.title = dict.clearBtnTitle;
  if (!fpBtnClear._feedbackTimer) fpBtnClear.querySelector('span').textContent = dict.clearBtn;
  fpBtnSwap.title = dict.swapBtnTitle;
  if (!fpBtnSwap._feedbackTimer) fpBtnSwap.querySelector('span').textContent = dict.fpSwapBtn;
  fpBtnCopy.title = dict.copyBtnTitle;
  if (!fpBtnCopy._feedbackTimer) fpBtnCopy.querySelector('span').textContent = dict.copyBtn;
  fpBtnTop.title = dict.fpTopTitle;

  // Popup Kibor Header
  kbPopupEl.setAttribute('aria-label', dict.kbDialogAria);
  kbPopupHeaderEl.title = dict.kbHeaderTitle;
  kbHeaderTitleEl.innerHTML = dict.kbHeaderHtml;
  btnClosePopup.title = dict.kbCloseTitle;

  if (refreshKeyboardLangFn) {
    refreshKeyboardLangFn();
  }

  updateOutput();
}

// =========================================================
// 5. SINKRONISASI INPUT, OUTPUT & PREVIEW BAR
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

const SUPPORTS_BASE_SELECT =
  typeof CSS !== 'undefined' && CSS.supports && CSS.supports('appearance', 'base-select');

function syncBuhunStyleLabels(isOpen = false) {
  const dict = t();
  if (SUPPORTS_BASE_SELECT) {
    const currentIdx = buhunStyleEl.selectedIndex;
    optStyleSajarahEl.innerHTML = dict.styleSajarahHtml;
    optStyleReligiEl.innerHTML = dict.styleReligiHtml;
    optStylePrasastiEl.innerHTML = dict.stylePrasastiHtml;
    if (currentIdx >= 0) {
      buhunStyleEl.selectedIndex = -1;
      buhunStyleEl.selectedIndex = currentIdx;
    }
    return;
  }

  const val = buhunStyleEl.value;
  optStyleSajarahEl.textContent =
    !isOpen && val === 'sajarah' ? dict.styleSajarahShort : dict.styleSajarahFull;
  optStyleReligiEl.textContent =
    !isOpen && val === 'religi' ? dict.styleReligiShort : dict.styleReligiFull;
  optStylePrasastiEl.textContent =
    !isOpen && val === 'prasasti' ? dict.stylePrasastiShort : dict.stylePrasastiFull;
}

function syncTransliterationNoTranslate() {
  const isSundaInput = mode === 'SUNDA_TO_LATIN';
  const inputTargets = [inputEl, fpInputTextEl];
  const outputTargets = [outputEl, fpOutputTextEl];

  inputTargets.forEach(el => {
    if (!el) return;
    el.classList.toggle('notranslate', isSundaInput);
    if (isSundaInput) {
      el.setAttribute('translate', 'no');
    } else {
      el.removeAttribute('translate');
    }
  });

  outputTargets.forEach(el => {
    if (!el) return;
    el.classList.toggle('notranslate', !isSundaInput);
    if (!isSundaInput) {
      el.setAttribute('translate', 'no');
    } else {
      el.removeAttribute('translate');
    }
  });
}

function syncFloatingPreview(skipFpInputSync = false) {
  const dict = t();
  const isSundaInput = mode === 'SUNDA_TO_LATIN';

  fpInputTagEl.textContent = isSundaInput ? dict.fpTagSunda : dict.fpTagLatin;
  fpInputTextEl.placeholder = isSundaInput
    ? dict.fpInputPlaceholderSunda
    : dict.fpInputPlaceholderLatin;

  fpOutputTagEl.textContent = isSundaInput ? dict.fpTagLatin : dict.fpTagSunda;
  fpOutputTextEl.dataset.placeholder = isSundaInput
    ? dict.fpOutputPlaceholderLatin
    : dict.fpOutputPlaceholderSunda;

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
  syncTransliterationNoTranslate();

  const dict = t();
  const val = inputEl.value;

  if (!pasteFeedbackTimer) {
    setPasteButtonVisible(val.length === 0);
  }

  if (mode === 'LATIN_TO_SUNDA') {
    const isBuhun = toggleBuhunEl.checked;
    const style = buhunStyleEl.value;
    outputEl.value = latinToSunda(val, isBuhun, style);

    if (!isBuhun) {
      standardHintEl.textContent = dict.hintBaku;
    } else {
      const styleNames = {
        sajarah: dict.hintSajarah,
        religi: dict.hintReligi,
        prasasti: dict.hintPrasasti
      };
      standardHintEl.textContent = styleNames[style];
    }
  } else {
    const translateBindu = toggleTranslateBinduEl.checked;
    outputEl.value = sundaToLatin(val, translateBindu, true);
    standardHintEl.textContent = translateBindu ? dict.hintBinduOn : dict.hintBinduOff;
  }

  charCountEl.textContent = dict.charCount(val.length);
  syncFloatingPreview(skipFpInputSync);
}

// =========================================================
// 6. ANIMASI & FEEDBACK UI
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

function triggerButtonFeedback(btn, getFeedbackLabel, getDefaultLabel, duration = 1500) {
  if (!btn) return;
  clearTimeout(btn._feedbackTimer);

  if (btn.classList.contains('is-feedback')) {
    btn.classList.remove('is-feedback');
    void btn.offsetWidth;
  }

  animateButtonMorph(btn, getFeedbackLabel(), true);
  btn._feedbackTimer = setTimeout(() => {
    btn._feedbackTimer = null;
    animateButtonMorph(btn, getDefaultLabel(), false);
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
      btnPaste.querySelector('span').textContent = t().pasteBtn;
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
      btnPaste.querySelector('span').textContent = t().pasteBtn;
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
  const dict = t();

  if (show) {
    if (isKbPopupOpen) {
      setKbPopupVisible(false);
    }
    if (!fpBtnSwap._feedbackTimer) animateButtonMorph(fpBtnSwap, dict.fpSwapBtn, false);
    if (!fpBtnClear._feedbackTimer) animateButtonMorph(fpBtnClear, dict.clearBtn, false);
    if (!fpBtnCopy._feedbackTimer) animateButtonMorph(fpBtnCopy, dict.copyBtn, false);

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
// 7. ACTION HANDLERS & EVENT LISTENERS
// =========================================================
function swapDirection({ fromFloatingBar = false } = {}) {
  const prevClearLeft = btnClear.getBoundingClientRect().left;
  const prevCopyLeft = btnCopy.getBoundingClientRect().left;

  triggerSwapAnimation();
  const prevOutput = outputEl.value;

  if (mode === 'LATIN_TO_SUNDA') {
    mode = 'SUNDA_TO_LATIN';
    inputEl.classList.add('sunda-font');
    outputEl.classList.remove('sunda-font');

    buhunControlsEl.classList.add('hidden');
    binduTranslateWrapper.classList.remove('hidden');
    latinHelpersEl.classList.add('hidden');
    btnPopupKb.classList.remove('hidden');

    const converted = liveConvertInputToSunda(prevOutput, prevOutput.length);
    inputEl.value = converted.text;
  } else {
    mode = 'LATIN_TO_SUNDA';
    inputEl.classList.remove('sunda-font');
    outputEl.classList.add('sunda-font');

    buhunControlsEl.classList.remove('hidden');
    binduTranslateWrapper.classList.add('hidden');
    latinHelpersEl.classList.remove('hidden');
    btnPopupKb.classList.add('hidden');

    setKbPopupVisible(false);
    inputEl.value = prevOutput;
  }

  syncTransliterationNoTranslate();
  applyDirectionTexts();

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

  triggerButtonFeedback(btnSwap, () => t().swapBtnFeedback, () => t().swapBtn, 1500);
  triggerButtonFeedback(fpBtnSwap, () => t().fpSwapBtnFeedback, () => t().fpSwapBtn, 1500);

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
    btnPaste.querySelector('span').textContent = t().pasteBtn;
  }

  updateOutput();

  if (hadText) {
    triggerClearAnimation();
    triggerButtonFeedback(btnClear, () => t().clearBtnFeedback, () => t().clearBtn, 1500);
    triggerButtonFeedback(fpBtnClear, () => t().clearBtnFeedback, () => t().clearBtn, 1500);
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

  triggerButtonFeedback(btnCopy, () => t().copyBtnFeedback, () => t().copyBtn, 1500);
  triggerButtonFeedback(fpBtnCopy, () => t().copyBtnFeedback, () => t().copyBtn, 1500);

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

// Language Dropdown Events
btnLang.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = btnLang.getAttribute('aria-expanded') === 'true';
  setLangMenuOpen(!isOpen);
});

langOptionBtns.forEach(opt => {
  opt.addEventListener('click', () => {
    const selectedLang = opt.dataset.lang;
    setLangMenuOpen(false);
    if (selectedLang !== currentLang) {
      applyLanguage(selectedLang, { persist: true });
    }
  });
});

document.addEventListener('click', (e) => {
  if (!langDropdownEl.contains(e.target)) {
    setLangMenuOpen(false);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btnLang.getAttribute('aria-expanded') === 'true') {
    setLangMenuOpen(false);
    btnLang.focus();
  }
});

// Editor Input & IME Events
inputEl.addEventListener('compositionstart', () => {
  isComposing = true;
});

inputEl.addEventListener('compositionend', () => {
  isComposing = false;
  if (mode === 'SUNDA_TO_LATIN') {
    const cursorPos = inputEl.selectionStart ?? inputEl.value.length;
    const converted = liveConvertInputToSunda(inputEl.value, cursorPos);
    inputEl.value = converted.text;
    inputEl.selectionStart = inputEl.selectionEnd = converted.cursor;
  }
  updateOutput();
});

inputEl.addEventListener('input', () => {
  if (mode === 'SUNDA_TO_LATIN' && !isComposing) {
    const cursorPos = inputEl.selectionStart ?? inputEl.value.length;
    const converted = liveConvertInputToSunda(inputEl.value, cursorPos);
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
    syncBuhunStyleLabels(true);
  });
});

buhunStyleEl.addEventListener('blur', () => {
  syncBuhunStyleLabels(false);
});

buhunStyleEl.addEventListener('change', () => {
  syncBuhunStyleLabels(false);
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
    syncBuhunStyleLabels(false);
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
    animateButtonMorph(btnPaste, t().pasteBtnFeedback, true);

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
        animateButtonMorph(btnPaste, t().pasteBtn, false);
      }
    }, 850);

    updateOutput();
    if (!IS_TOUCH_DEVICE) {
      inputEl.focus();
    }
  } catch (err) {
    if (!IS_TOUCH_DEVICE) {
      inputEl.focus();
    }
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
    const cursorPos = fpInputTextEl.selectionStart ?? fpInputTextEl.value.length;
    const converted = liveConvertInputToSunda(fpInputTextEl.value, cursorPos);
    fpInputTextEl.value = converted.text;
    fpInputTextEl.selectionStart = fpInputTextEl.selectionEnd = converted.cursor;
  }
  inputEl.value = fpInputTextEl.value;
  updateOutput(true);
});

fpInputTextEl.addEventListener('input', () => {
  if (mode === 'SUNDA_TO_LATIN' && !isComposing) {
    const cursorPos = fpInputTextEl.selectionStart ?? fpInputTextEl.value.length;
    const converted = liveConvertInputToSunda(fpInputTextEl.value, cursorPos);
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
// 8. INISIALISASI PITUDUH & POPUP KIBOR
// =========================================================
function initSundaKeyboards() {
  const localizedUpdaters = [];

  function registerTooltip(el, getTipFn) {
    localizedUpdaters.push(() => {
      el.title = getTipFn(t());
    });
  }

  function createRefBtn({ insertChar, displayChar, label, getTooltip, isBuhun = false }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `kb-key ${isBuhun ? 'buhun-tag' : ''}`;
    btn.innerHTML = `<span class="notranslate" translate="no">${displayChar}</span><small>${label}</small>`;
    btn.addEventListener('click', () => insertAtCursor(insertChar, { fromReference: true, autoSwapIfEmpty: true }));
    registerTooltip(btn, getTooltip);
    return btn;
  }

  function createPopBtn({ insertChar, displayChar, getTooltip, isBuhun = false, extraClass = '' }) {
    const btn = document.createElement('button');
    btn.type = 'button';
    const classes = ['pop-key'];
    if (isBuhun) classes.push('buhun-tag');
    if (extraClass && extraClass !== 'buhun-tag') classes.push(extraClass);
    btn.className = classes.join(' ');
    btn.innerHTML = `<span class="notranslate" translate="no">${displayChar}</span>`;
    btn.addEventListener('click', () => insertAtCursor(insertChar));
    registerTooltip(btn, getTooltip);
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

  const EXAMPLE_DATA = {
    swara: {
      'a':  { sunda: 'ᮃᮔᮊ᮪', latin: 'anak', soundEn: '<strong>a</strong> in <em>father</em>' },
      'i':  { sunda: 'ᮄᮙᮂ', latin: 'imah', soundEn: '<strong>ee</strong> in <em>see</em>' },
      'u':  { sunda: 'ᮅᮛᮀ', latin: 'urang', soundEn: '<strong>oo</strong> in <em>boot</em>' },
      'é':  { sunda: 'ᮆᮜᮤᮀ', latin: 'éling', soundEn: '<strong>e</strong> in <em>bed</em>, <strong>é</strong> in <em>fiancé</em>' },
      'o':  { sunda: 'ᮇᮕᮒ᮪', latin: 'opat', soundEn: '<strong>o</strong> in <em>go</em>' },
      'e':  { sunda: 'ᮈᮙᮞ᮪', latin: 'emas', soundEn: '<strong>e</strong> in <em>taken</em>, <strong>a</strong> in <em>about</em>' },
      'eu': { sunda: 'ᮉᮞᮤ', latin: 'eusi', soundEn: '<strong>ur</strong> in British <em>burn</em>, <strong>er</strong> in British <em>her</em>' }
    },
    rarangken: {
      'ᮤ': { sunda: 'ᮠᮤᮏᮤ', latin: 'hiji', soundEn: '<strong>ee</strong> in <em>see</em>' },
      'ᮥ': { sunda: 'ᮘᮥᮊᮥ', latin: 'buku', soundEn: '<strong>oo</strong> in <em>boot</em>' },
      'ᮦ': { sunda: 'ᮜᮦᮜᮦ', latin: 'lélé', soundEn: '<strong>e</strong> in <em>bed</em>, <strong>é</strong> in <em>fiancé</em>' },
      'ᮧ': { sunda: 'ᮒᮧᮕᮤ', latin: 'topi', soundEn: '<strong>o</strong> in <em>go</em>' },
      'ᮨ': { sunda: 'ᮌᮨᮜᮞ᮪', latin: 'gelas', soundEn: '<strong>e</strong> in <em>taken</em>, <strong>a</strong> in <em>about</em>' },
      'ᮩ': { sunda: 'ᮞᮩᮛᮤ', latin: 'seuri', soundEn: '<strong>ur</strong> in British <em>burn</em>, <strong>er</strong> in British <em>her</em>' },
      'ᮡ': { sunda: 'ᮞᮒᮡ', latin: 'satya', soundEn: '<strong>y</strong> in <em>canyon</em>' },
      'ᮢ': { sunda: 'ᮎᮊᮢ', latin: 'cakra', soundEn: '<strong>r</strong> in <em>crab</em>' },
      'ᮣ': { sunda: 'ᮊᮣᮞᮤᮊ᮪', latin: 'klasik', soundEn: '<strong>l</strong> in <em>clap</em>' },
      'ᮁ': { sunda: 'ᮓᮠᮁ', latin: 'dahar', soundEn: '<strong>r</strong> in <em>car</em>' },
      'ᮀ': { sunda: 'ᮊᮎᮀ', latin: 'kacang', soundEn: '<strong>ng</strong> in <em>sing</em>' },
      'ᮂ': { sunda: 'ᮞᮝᮂ', latin: 'sawah', soundEn: '<strong>h</strong> in <em>hat</em> (final breath)' },
      '᮪': { sunda: 'ᮊᮕᮜ᮪', latin: 'kapal', soundEn: 'silences inherent <strong>-a</strong> (like <strong>l</strong> in <em>pal</em>)' },
      'ᮭ': { sunda: 'ᮞᮭ', latin: 'swa', soundEn: '<strong>w</strong> in <em>swan</em>' },
      'ᮬ': { sunda: 'ᮞᮥᮊᮬ', latin: 'sukma', soundEn: '<strong>m</strong> in <em>small</em>' },
      'ᮾ': { sunda: 'ᮕᮛᮾ', latin: 'parak', soundEn: 'final <strong>k</strong> in <em>book</em>' },
      'ᮿ': { sunda: 'ᮓᮜᮿ', latin: 'dalam', soundEn: 'final <strong>m</strong> in <em>drum</em>' }
    },
    ngalagena: {
      'ka':  { sunda: 'ᮊᮎ', latin: 'kaca', soundEn: '<strong>k</strong> in <em>kite</em>' },
      'ga':  { sunda: 'ᮌᮚ', latin: 'gaya', soundEn: '<strong>g</strong> in <em>go</em>' },
      'nga': { sunda: 'ᮍᮛᮔ᮪', latin: 'ngaran', soundEn: '<strong>ng</strong> in <em>singer</em>' },
      'ca':  { sunda: 'ᮎᮄ', latin: 'cai', soundEn: '<strong>ch</strong> in <em>chat</em>' },
      'ja':  { sunda: 'ᮏᮜᮔ᮪', latin: 'jalan', soundEn: '<strong>j</strong> in <em>jar</em>' },
      'nya': { sunda: 'ᮑᮃᮂ', latin: 'nyaah', soundEn: 'Spanish <strong>ñ</strong> in <em>jalapeño</em>, <em>El Niño</em>' },
      'ta':  { sunda: 'ᮒᮔᮩᮂ', latin: 'taneuh', soundEn: '<strong>t</strong> in <em>star</em>' },
      'da':  { sunda: 'ᮓᮙᮀ', latin: 'damang', soundEn: '<strong>d</strong> in <em>day</em>' },
      'na':  { sunda: 'ᮔᮌᮛ', latin: 'nagara', soundEn: '<strong>n</strong> in <em>name</em>' },
      'pa':  { sunda: 'ᮕᮔᮧᮔ᮪', latin: 'panon', soundEn: '<strong>p</strong> in <em>spin</em>' },
      'ba':  { sunda: 'ᮘᮒᮥ', latin: 'batu', soundEn: '<strong>b</strong> in <em>bat</em>' },
      'ma':  { sunda: 'ᮙᮔᮥᮊ᮪', latin: 'manuk', soundEn: '<strong>m</strong> in <em>man</em>' },
      'ya':  { sunda: 'ᮚᮊᮤᮔ᮪', latin: 'yakin', soundEn: '<strong>y</strong> in <em>yes</em>' },
      'ra':  { sunda: 'ᮛᮏ', latin: 'raja', soundEn: 'rolled <strong>r</strong> (like Spanish <em>perro</em>)' },
      'la':  { sunda: 'ᮜᮅᮊ᮪', latin: 'lauk', soundEn: '<strong>l</strong> in <em>lamp</em>' },
      'wa':  { sunda: 'ᮝᮊ᮪ᮒᮥ', latin: 'waktu', soundEn: '<strong>w</strong> in <em>water</em>' },
      'sa':  { sunda: 'ᮞᮥᮔ᮪ᮓ', latin: 'Sunda', soundEn: '<strong>s</strong> in <em>sun</em>' },
      'ha':  { sunda: 'ᮠᮒᮥᮁ', latin: 'hatur', soundEn: '<strong>h</strong> in <em>hat</em>' },
      'qa':  { sunda: 'ᮋᮥᮁᮃᮔ᮪', latin: "Qur'an", soundEn: "<strong>q</strong> in <em>Qur'an</em>" },
      'za':  { sunda: 'ᮐᮙᮔ᮪', latin: 'zaman', soundEn: '<strong>z</strong> in <em>zoo</em>' },
      'fa':  { sunda: 'ᮖᮊᮤᮁ', latin: 'fakir', soundEn: '<strong>f</strong> in <em>fan</em>' },
      'va':  { sunda: 'ᮗᮤᮜ', latin: 'vila', soundEn: '<strong>v</strong> in <em>van</em>' },
      'xa':  { sunda: 'ᮟᮤᮜᮧᮖᮧᮔ᮪', latin: 'xilofon', soundEn: '<strong>x</strong> / <strong>ks</strong> in <em>box</em>, <em>taxi</em>' },
      'kha': { sunda: 'ᮮᮥᮞᮥᮞ᮪', latin: 'khusus', soundEn: '<strong>ch</strong> in Scottish <em>loch</em>' },
      'sya': { sunda: 'ᮯᮛᮒ᮪', latin: 'syarat', soundEn: '<strong>sh</strong> in <em>sharp</em>' },
      'bha': {
        sunda: 'ᮽᮊ᮪ᮒᮤ',
        latin: 'bhakti',
        soundEn: 'aspirated <strong>bh</strong> in <em>clubhouse</em> (pronounced like regular <strong>b</strong> in modern Sundanese)'
      }
    },
    buhunSpecial: {
      'ᮺ': {
        sunda: 'ᮃᮜᮥᮔᮺᮌᮥᮀ',
        latin: "alun'agung",
        soundEn: "silences preceding <strong>-a</strong> and marks elided initial <strong>a-</strong> (like an apostrophe in <em>'tis</em>)"
      },
      'ᮻ': {
        sunda: 'ᮻᮞᮤ',
        latin: 'reusi',
        soundEn: '<strong>rur</strong> in British <em>interurban</em> (standalone syllable)'
      },
      'ᮼ': {
        sunda: 'ᮼᮙ᮪ᮕᮀ',
        latin: 'leumpang',
        soundEn: '<strong>lur</strong> in British <em>blurred</em>, <em>blurt</em> (standalone syllable)'
      }
    },
    bindu: {
      '᳀': { sunda: 'ᮃᮞᮤᮂ ᮊ ᮞᮞᮙᮤ ᳀', latin: 'Asih ka sasami.' },
      '᳁': { sunda: 'ᮍᮏᮌ ᮅᮎᮕ᮪ ᳁ ᮍᮛᮊ᮪ᮞ ᮜᮙ᮪ᮕᮂ ᳂', latin: 'Ngajaga ucap; ngaraksa lampah.' },
      '᳂': { sunda: 'ᮛᮠᮚᮒ᮪ᮔ ᮠᮤᮛᮥᮕ᮪ ᮞᮅᮚᮥᮔᮔ᮪ ᳂', latin: 'Rahayatna hirup sauyunan.' },
      '᳃': { sunda: 'ᮞᮧᮜᮒ᮪ ᮜᮤᮙ ᮝᮊ᮪ᮒᮥ ᳃ ᮞᮁᮒ ᮞᮘᮁ ᳀', latin: 'Solat lima waktu, sarta sabar.' },
      '᳄': { sunda: '᳄᳆᳀᳆᳄ ᮝᮤᮜᮥᮏᮨᮀ ᮞᮥᮙ᮪ᮕᮤᮀ ᳀', latin: 'Wilujeng sumping.' },
      '᳅': { sunda: '᳅᳂᳅ ᮎᮒᮨᮒᮔ᮪ ᮞᮏᮛᮂ ᳂', latin: 'Catetan sajarah.' },
      '᳆': { sunda: '᳆᳁᳆ ᮕᮤᮒᮥᮓᮥᮂ ᮊᮛᮥᮠᮥᮔ᮪ ᳁', latin: 'Pituduh karuhun.' },
      '᳇': { sunda: '᳇ ᮍᮏᮌ ᮅᮎᮕ᮪ ᮜᮙ᮪ᮕᮂ ᳃', latin: '• Ngajaga ucap lampah,' }
    }
  };

  function buildDetailContentHtml(item) {
    const dict = t();
    const lines = [];

    if (item.getDesc) {
      lines.push(`<div class="kb-desc">${item.getDesc(dict)}</div>`);
    }

    if (item.example) {
      const prefix = item.isSentenceExample ? dict.exampleSentencePrefix : dict.exampleWordPrefix;
      lines.push(
        `<span>${prefix} <span class="sunda-inline notranslate" translate="no">${item.example.sunda}</span> (<em class="notranslate" translate="no">${item.example.latin}</em>)</span>`
      );
      if (currentLang === 'en' && item.example.soundEn) {
        lines.push(`<span>${dict.soundEquivPrefix} ${item.example.soundEn}</span>`);
      }
    }

    return lines.length ? `<div class="kb-example-lines">${lines.join('')}</div>` : '';
  }

  function renderDetailGrid(containerEl, items, showDetails, animate) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    containerEl.classList.toggle('show-details', showDetails);

    items.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `kb-key ${item.extraClass || ''}${animate ? ' kb-item-animate' : ''}`.trim();
      if (animate) btn.style.setProperty('--i', idx);
      btn.title = item.getTooltip(t());

      if (showDetails && (item.example || item.getDesc)) {
        const pillHtml = item.pillText ? `<span class="cat-pill">${item.pillText}</span>` : '';
        btn.innerHTML = `
          <div class="kb-key-head">
            <span class="sym notranslate" translate="no">${item.displayChar}</span>
            <span class="lbl${item.notranslateLabel ? ' notranslate' : ''}"${item.notranslateLabel ? ' translate="no"' : ''}>${item.plainLabel}</span>
            ${pillHtml}
          </div>
          ${buildDetailContentHtml(item)}
        `;
      } else {
        btn.innerHTML = `<span class="notranslate" translate="no">${item.displayChar}</span><small>${item.compactLabel}</small>`;
      }

      btn.addEventListener('click', () => insertAtCursor(item.insertChar, { fromReference: true, autoSwapIfEmpty: true }));
      containerEl.appendChild(btn);
    });
  }

  // ANGKA
  const refAngka = document.getElementById('kb-angka');
  const popAngka = document.getElementById('pop-angka');
  const angkaGroupEl = refAngka.closest('.kb-group');

  ANGKA_ORDERED.forEach(([l, s]) => {
    const item = {
      insertChar: s,
      displayChar: s,
      label: l,
      getTooltip: (d) => d.tipNumeral(l)
    };
    refAngka.appendChild(createRefBtn(item));
    popAngka.appendChild(createPopBtn(item));
  });

  const pipeRefBtn = createRefBtn({
    insertChar: '|',
    displayChar: '|',
    label: t().pipeLabel,
    getTooltip: (d) => d.pipeTooltip
  });
  const pipeLabelSmall = pipeRefBtn.querySelector('small');
  localizedUpdaters.push(() => {
    pipeLabelSmall.textContent = t().pipeLabel;
  });
  refAngka.appendChild(pipeRefBtn);

  popAngka.appendChild(createPopBtn({
    insertChar: '|',
    displayChar: '|',
    getTooltip: (d) => d.pipeTooltip
  }));

  function renderAngkaExample(showDetails, animate = true) {
    if (!angkaExampleNoteEl) return;
    if (!animate) {
      angkaExampleNoteEl.innerHTML = t().angkaExampleHtml;
      angkaExampleNoteEl.classList.toggle('hidden', !showDetails);
      return;
    }

    animateKbGroupHeight(
      angkaGroupEl,
      () => {
        if (showDetails) {
          angkaExampleNoteEl.innerHTML = t().angkaExampleHtml;
          angkaExampleNoteEl.classList.remove('hidden', 'is-collapsing', 'is-entering');
          void angkaExampleNoteEl.offsetWidth;
          angkaExampleNoteEl.classList.add('is-entering');
          return null;
        } else {
          angkaExampleNoteEl.classList.add('hidden');
          return () => {
            angkaExampleNoteEl.classList.remove('hidden', 'is-entering');
            angkaExampleNoteEl.classList.add('is-collapsing');
          };
        }
      },
      () => {
        if (!showDetails) {
          angkaExampleNoteEl.classList.add('hidden');
          angkaExampleNoteEl.classList.remove('is-collapsing');
        }
      }
    );
  }

  // SWARA
  const refSwara = document.getElementById('kb-swara');
  const popSwara = document.getElementById('pop-swara');
  const swaraGroupEl = refSwara.closest('.kb-group');

  const swaraRefItems = Object.entries(SWARA).map(([l, s]) => ({
    insertChar: s,
    displayChar: s,
    plainLabel: l,
    notranslateLabel: true,
    compactLabel: `<span class="notranslate" translate="no">${l}</span>`,
    getTooltip: (d) => d.tipSwara(l),
    example: EXAMPLE_DATA.swara[l]
  }));

  swaraRefItems.forEach(item => {
    popSwara.appendChild(createPopBtn(item));
  });

  function renderSwaraRef(showDetails, animate = true) {
    if (!animate) {
      renderDetailGrid(refSwara, swaraRefItems, showDetails, false);
      return;
    }
    animateKbGroupHeight(swaraGroupEl, () => {
      renderDetailGrid(refSwara, swaraRefItems, showDetails, true);
    });
  }
  renderSwaraRef(false, false);

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
    { s: 'ᮭ', display: '◌ᮭ', label: 'papasangan wa', morpheme: '(-w-)', buhun: true },
    { s: 'ᮬ', display: '◌ᮬ', label: 'papasangan ma', morpheme: '(-m-)', buhun: true },
    { s: 'ᮾ', display: 'ᮾ', label: 'akhiran', morpheme: '(-k)', buhun: true },
    { s: 'ᮿ', display: 'ᮿ', label: 'akhiran', morpheme: '(-m)', buhun: true }
  ];

  const refRarangken = document.getElementById('kb-rarangken');
  const popRarangken = document.getElementById('pop-rarangken');
  const rarangkenGroupEl = refRarangken.closest('.kb-group');

  const toRarangkenItem = (item) => {
    const fullLbl = `${item.label}${item.morpheme ? ` ${item.morpheme}` : ''}`;
    return {
      insertChar: item.s,
      displayChar: item.display,
      plainLabel: fullLbl,
      notranslateLabel: true,
      compactLabel: `<span class="notranslate" translate="no">${fullLbl}</span>`,
      getTooltip: (d) => d.tipRarangken(item.label, item.morpheme, item.buhun),
      isBuhun: item.buhun,
      extraClass: item.buhun ? 'buhun-tag' : '',
      pillText: item.buhun ? 'Buhun' : '',
      example: EXAMPLE_DATA.rarangken[item.s]
    };
  };

  const rarangkenRefItems = [
    ...rarangkenRow1.map(toRarangkenItem),
    ...rarangkenRow2.map(toRarangkenItem)
  ];

  popRarangken.appendChild(createPopSpacer());
  rarangkenRow1.map(toRarangkenItem).forEach(cfg => popRarangken.appendChild(createPopBtn(cfg)));
  for (let i = 0; i < 5; i++) popRarangken.appendChild(createPopSpacer());
  rarangkenRow2.map(toRarangkenItem).forEach(cfg => popRarangken.appendChild(createPopBtn(cfg)));

  function renderRarangkenRef(showDetails, animate = true) {
    if (!animate) {
      renderDetailGrid(refRarangken, rarangkenRefItems, showDetails, false);
      return;
    }
    animateKbGroupHeight(rarangkenGroupEl, () => {
      renderDetailGrid(refRarangken, rarangkenRefItems, showDetails, true);
    });
  }
  renderRarangkenRef(false, false);

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
  const ngalagenaGroupEl = refNgalagena.closest('.kb-group');

  const toNgalagenaItem = (label, s, isBuhun = false) => ({
    insertChar: s,
    displayChar: s,
    plainLabel: label,
    notranslateLabel: true,
    compactLabel: `<span class="notranslate" translate="no">${label}</span>`,
    getTooltip: (d) => d.tipNgalagena(label, isBuhun),
    isBuhun,
    extraClass: isBuhun ? 'buhun-tag' : '',
    pillText: isBuhun ? 'Buhun' : '',
    example: EXAMPLE_DATA.ngalagena[label]
  });

  const ngalagenaRefItems = [
    ...ngalagenaRow1.map(([l, s]) => toNgalagenaItem(l, s, false)),
    ...ngalagenaRow2.map(([l, s]) => toNgalagenaItem(l, s, false)),
    ...ngalagenaRow3.map(item => toNgalagenaItem(item.label, item.s, item.buhun))
  ];

  ngalagenaRow1.forEach(([l, s]) => popNgalagena.appendChild(createPopBtn(toNgalagenaItem(l, s, false))));
  ngalagenaRow2.forEach(([l, s]) => popNgalagena.appendChild(createPopBtn(toNgalagenaItem(l, s, false))));
  popNgalagena.appendChild(createPopSpacer());
  ngalagenaRow3.forEach(item => popNgalagena.appendChild(createPopBtn(toNgalagenaItem(item.label, item.s, item.buhun))));

  function renderNgalagenaRef(showDetails, animate = true) {
    if (!animate) {
      renderDetailGrid(refNgalagena, ngalagenaRefItems, showDetails, false);
      return;
    }
    animateKbGroupHeight(ngalagenaGroupEl, () => {
      renderDetailGrid(refNgalagena, ngalagenaRefItems, showDetails, true);
    });
  }
  renderNgalagenaRef(false, false);

  // SUNDA BUHUN KHUSUS (NON-NGALAGENA & NON-RARANGKÉN)
  const refBuhunSpecial = document.getElementById('kb-buhun-special');
  const popBuhunSpecial = document.getElementById('pop-buhun-khusus');
  const buhunGroupEl = refBuhunSpecial.closest('.kb-group');

  function getBuhunDetailItems() {
    return t().buhunKhususItems.map(item => {
      const fullLbl = `${item.label}${item.sound ? ` ${item.sound}` : ''}`;
      return {
        insertChar: item.s,
        displayChar: item.s,
        plainLabel: fullLbl,
        notranslateLabel: true,
        compactLabel: `<span class="notranslate" translate="no">${fullLbl}</span>`,
        getTooltip: (d) => {
          const current = d.buhunKhususItems.find(x => x.s === item.s) || item;
          const lbl = `${current.label}${current.sound ? ` ${current.sound}` : ''}`;
          return current.desc ? `${lbl} — ${current.desc}` : lbl;
        },
        isBuhun: true,
        extraClass: 'buhun-tag',
        pillText: 'Buhun',
        getDesc: (d) => {
          const current = d.buhunKhususItems.find(x => x.s === item.s) || item;
          return current.desc || '';
        },
        example: EXAMPLE_DATA.buhunSpecial[item.s]
      };
    });
  }

  getBuhunDetailItems().forEach(cfg => popBuhunSpecial.appendChild(createPopBtn(cfg)));

  function renderBuhunSpecialRef(showDetails, animate = true) {
    const items = getBuhunDetailItems();
    if (!animate) {
      renderDetailGrid(refBuhunSpecial, items, showDetails, false);
      return;
    }
    animateKbGroupHeight(buhunGroupEl, () => {
      renderDetailGrid(refBuhunSpecial, items, showDetails, true);
    });
  }
  renderBuhunSpecialRef(false, false);

  // KARAKTER BINDU
  const refBindu = document.getElementById('kb-bindu');
  const popBindu = document.getElementById('pop-bindu');
  const binduNotesEl = document.getElementById('bindu-notes');
  const binduGroupEl = refBindu.closest('.kb-group');

  function getBinduDetailItems() {
    return t().binduItems.map(item => ({
      insertChar: item.char,
      displayChar: item.char,
      plainLabel: item.name,
      notranslateLabel: false,
      compactLabel: item.name,
      getTooltip: (d) => {
        const current = d.binduItems.find(x => x.char === item.char) || item;
        return current.desc ? `${current.name} (${current.category}) — ${current.desc}` : current.name;
      },
      extraClass: 'bindu-tag',
      pillText: item.category,
      getDesc: (d) => {
        const current = d.binduItems.find(x => x.char === item.char) || item;
        return current.desc || '';
      },
      example: EXAMPLE_DATA.bindu[item.char],
      isSentenceExample: true
    }));
  }

  getBinduDetailItems().forEach(cfg => popBindu.appendChild(createPopBtn(cfg)));

  function renderBinduRef(showDetails, animate = true) {
    const items = getBinduDetailItems();
    if (!animate) {
      renderDetailGrid(refBindu, items, showDetails, false);
      if (showDetails) {
        binduNotesEl.innerHTML = t().binduNotesHtml;
        binduNotesEl.classList.remove('hidden');
      } else {
        binduNotesEl.classList.add('hidden');
      }
      return;
    }

    animateKbGroupHeight(
      binduGroupEl,
      () => {
        renderDetailGrid(refBindu, items, showDetails, true);
        if (showDetails) {
          binduNotesEl.innerHTML = t().binduNotesHtml;
          binduNotesEl.classList.remove('hidden', 'is-collapsing', 'is-entering');
          void binduNotesEl.offsetWidth;
          binduNotesEl.classList.add('is-entering');
          return null;
        } else {
          binduNotesEl.classList.add('hidden');
          return () => {
            binduNotesEl.classList.remove('hidden', 'is-entering');
            binduNotesEl.classList.add('is-collapsing');
          };
        }
      },
      () => {
        if (!showDetails) {
          binduNotesEl.classList.add('hidden');
          binduNotesEl.classList.remove('is-collapsing');
        }
      }
    );
  }
  renderBinduRef(false, false);

  if (toggleRefDetailsEl) {
    toggleRefDetailsEl.addEventListener('change', (e) => {
      const show = e.target.checked;
      renderAngkaExample(show, true);
      renderSwaraRef(show, true);
      renderRarangkenRef(show, true);
      renderNgalagenaRef(show, true);
      renderBuhunSpecialRef(show, true);
      renderBinduRef(show, true);
    });
  }

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
    const dict = t();
    dockRow1.innerHTML = '';
    dockRow2.innerHTML = '';

    if (symbolState === 0) {
      const spacer = document.createElement('span');
      spacer.style.gridColumn = 'span 10';
      dockRow1.appendChild(spacer);

      dockRow1.appendChild(makeDockButton({
        label: '⌫',
        tooltip: dict.dockBackspaceTip,
        span: 2,
        extraClass: 'danger-key',
        onClick: () => backspaceAtCursor()
      }));
    } else if (symbolState === 1) {
      SYMBOL_SET_1.forEach(sym => {
        dockRow1.appendChild(makeDockButton({
          label: sym,
          tooltip: dict.dockSymbolTip(sym),
          span: 1,
          onClick: () => insertAtCursor(sym)
        }));
      });

      dockRow1.appendChild(makeDockButton({
        label: '⌫',
        tooltip: dict.dockBackspaceTip,
        span: 2,
        extraClass: 'danger-key',
        onClick: () => backspaceAtCursor()
      }));
    } else {
      SYMBOL_SET_2.forEach(sym => {
        dockRow1.appendChild(makeDockButton({
          label: sym,
          tooltip: dict.dockSymbolTip(sym),
          span: 1,
          onClick: () => insertAtCursor(sym)
        }));
      });
    }

    dockRow2.appendChild(makeDockButton({
      label: '=\\<',
      tooltip: dict.dockSymbolToggleTip,
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
      tooltip: dict.dockPunctTip(leftPunct),
      span: 1,
      onClick: () => insertAtCursor(leftPunct)
    }));

    dockRow2.appendChild(makeDockButton({
      label: dict.dockSpaceLabel,
      tooltip: dict.dockSpaceTip,
      span: 6,
      onClick: () => insertAtCursor(' ')
    }));

    dockRow2.appendChild(makeDockButton({
      label: rightPunct,
      tooltip: dict.dockPunctTip(rightPunct),
      span: 1,
      onClick: () => insertAtCursor(rightPunct)
    }));

    dockRow2.appendChild(makeDockButton({
      label: '↵',
      tooltip: dict.dockEnterTip,
      span: 2,
      onClick: () => insertAtCursor('\n')
    }));
  }

  renderDock();

  refreshKeyboardLangFn = () => {
    const dict = t();
    const popCatMap = {
      'pop-cat-angka': dict.popCatAngka,
      'pop-cat-swara': dict.popCatSwara,
      'pop-cat-rarangken': dict.popCatRarangken,
      'pop-cat-ngalagena': dict.popCatNgalagena,
      'pop-cat-buhun': dict.popCatBuhun,
      'pop-cat-bindu': dict.popCatBindu
    };

    Object.entries(popCatMap).forEach(([id, label]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = label;
    });

    localizedUpdaters.forEach(fn => fn());

    const showDetails = toggleRefDetailsEl ? toggleRefDetailsEl.checked : false;
    renderAngkaExample(showDetails, false);
    renderSwaraRef(showDetails, false);
    renderRarangkenRef(showDetails, false);
    renderNgalagenaRef(showDetails, false);
    renderBuhunSpecialRef(showDetails, false);
    renderBinduRef(showDetails, false);

    renderDock();
  };
}

// =========================================================
// 9. BOOTSTRAP APLIKASI
// =========================================================
initTheme();
initSundaKeyboards();
applyLanguage(currentLang);