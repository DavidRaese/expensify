import numeral from 'numeral';
// load a locale
numeral.register('locale', 'de', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  currency: {
      symbol: '€'
  }
});

// switch between locales
numeral.locale('de');