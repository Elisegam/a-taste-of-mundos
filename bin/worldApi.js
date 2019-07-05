const mongoose = require("mongoose");
const countryModel = require("../models/Country");

// const dbName = "a-taste-of-the-world";
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const country = [
  {
  flag: "https://restcountries.eu/data/afg.svg",
  name: "Afghanistan",
  capital: "Kabul",
  latlng: [
  33,
  65
  ]
  },
  {
  flag: "https://restcountries.eu/data/ala.svg",
  name: "Åland Islands",
  capital: "Mariehamn",
  latlng: [
  60.116667,
  19.9
  ]
  },
  {
  flag: "https://restcountries.eu/data/alb.svg",
  name: "Albania",
  capital: "Tirana",
  latlng: [
  41,
  20
  ]
  },
  {
  flag: "https://restcountries.eu/data/dza.svg",
  name: "Algeria",
  capital: "Algiers",
  latlng: [
  28,
  3
  ]
  },
  {
  flag: "https://restcountries.eu/data/asm.svg",
  name: "American Samoa",
  capital: "Pago Pago",
  latlng: [
  -14.33333333,
  -170
  ]
  },
  {
  flag: "https://restcountries.eu/data/and.svg",
  name: "Andorra",
  capital: "Andorra la Vella",
  latlng: [
  42.5,
  1.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/ago.svg",
  name: "Angola",
  capital: "Luanda",
  latlng: [
  -12.5,
  18.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/aia.svg",
  name: "Anguilla",
  capital: "The Valley",
  latlng: [
  18.25,
  -63.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/ata.svg",
  name: "Antarctica",
  capital: "",
  relevance: "0",
  latlng: [
  -74.65,
  4.48
  ]
  },
  {
  flag: "https://restcountries.eu/data/atg.svg",
  name: "Antigua and Barbuda",
  capital: "Saint John's",
  latlng: [
  17.05,
  -61.8
  ]
  },
  {
  flag: "https://restcountries.eu/data/arg.svg",
  name: "Argentina",
  capital: "Buenos Aires",
  latlng: [
  -34,
  -64
  ]
  },
  {
  flag: "https://restcountries.eu/data/arm.svg",
  name: "Armenia",
  capital: "Yerevan",
  latlng: [
  40,
  45
  ]
  },
  {
  flag: "https://restcountries.eu/data/abw.svg",
  name: "Aruba",
  capital: "Oranjestad",
  latlng: [
  12.5,
  -69.96666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/aus.svg",
  name: "Australia",
  capital: "Canberra",
  latlng: [
  -27,
  133
  ]
  },
  {
  flag: "https://restcountries.eu/data/aut.svg",
  name: "Austria",
  capital: "Vienna",
  latlng: [
  47.33333333,
  13.33333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/aze.svg",
  name: "Azerbaijan",
  capital: "Baku",
  latlng: [
  40.5,
  47.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/bhs.svg",
  name: "Bahamas",
  capital: "Nassau",
  latlng: [
  24.25,
  -76
  ]
  },
  {
  flag: "https://restcountries.eu/data/bhr.svg",
  name: "Bahrain",
  capital: "Manama",
  latlng: [
  26,
  50.55
  ]
  },
  {
  flag: "https://restcountries.eu/data/bgd.svg",
  name: "Bangladesh",
  capital: "Dhaka",
  latlng: [
  24,
  90
  ]
  },
  {
  flag: "https://restcountries.eu/data/brb.svg",
  name: "Barbados",
  capital: "Bridgetown",
  latlng: [
  13.16666666,
  -59.53333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/blr.svg",
  name: "Belarus",
  capital: "Minsk",
  latlng: [
  53,
  28
  ]
  },
  {
  flag: "https://restcountries.eu/data/bel.svg",
  name: "Belgium",
  capital: "Brussels",
  latlng: [
  50.83333333,
  4
  ]
  },
  {
  flag: "https://restcountries.eu/data/blz.svg",
  name: "Belize",
  capital: "Belmopan",
  latlng: [
  17.25,
  -88.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/ben.svg",
  name: "Benin",
  capital: "Porto-Novo",
  latlng: [
  9.5,
  2.25
  ]
  },
  {
  flag: "https://restcountries.eu/data/bmu.svg",
  name: "Bermuda",
  capital: "Hamilton",
  latlng: [
  32.33333333,
  -64.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/btn.svg",
  name: "Bhutan",
  capital: "Thimphu",
  latlng: [
  27.5,
  90.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/bol.svg",
  name: "Bolivia (Plurinational State of)",
  capital: "Sucre",
  latlng: [
  -17,
  -65
  ]
  },
  {
  flag: "https://restcountries.eu/data/bes.svg",
  name: "Bonaire, Sint Eustatius and Saba",
  capital: "Kralendijk",
  latlng: [
  12.15,
  -68.266667
  ]
  },
  {
  flag: "https://restcountries.eu/data/bih.svg",
  name: "Bosnia and Herzegovina",
  capital: "Sarajevo",
  latlng: [
  44,
  18
  ]
  },
  {
  flag: "https://restcountries.eu/data/bwa.svg",
  name: "Botswana",
  capital: "Gaborone",
  latlng: [
  -22,
  24
  ]
  },
  {
  flag: "https://restcountries.eu/data/bvt.svg",
  name: "Bouvet Island",
  capital: "",
  latlng: [
  -54.43333333,
  3.4
  ]
  },
  {
  flag: "https://restcountries.eu/data/bra.svg",
  name: "Brazil",
  capital: "Brasília",
  latlng: [
  -10,
  -55
  ]
  },
  {
  flag: "https://restcountries.eu/data/iot.svg",
  name: "British Indian Ocean Territory",
  capital: "Diego Garcia",
  latlng: [
  -6,
  71.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/umi.svg",
  name: "United States Minor Outlying Islands",
  capital: "",
  latlng: [ ]
  },
  {
  flag: "https://restcountries.eu/data/vgb.svg",
  name: "Virgin Islands (British)",
  capital: "Road Town",
  latlng: [
  18.431383,
  -64.62305
  ]
  },
  {
  flag: "https://restcountries.eu/data/vir.svg",
  name: "Virgin Islands (U.S.)",
  capital: "Charlotte Amalie",
  relevance: "0.5",
  latlng: [
  18.34,
  -64.93
  ]
  },
  {
  flag: "https://restcountries.eu/data/brn.svg",
  name: "Brunei Darussalam",
  capital: "Bandar Seri Begawan",
  latlng: [
  4.5,
  114.66666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/bgr.svg",
  name: "Bulgaria",
  capital: "Sofia",
  latlng: [
  43,
  25
  ]
  },
  {
  flag: "https://restcountries.eu/data/bfa.svg",
  name: "Burkina Faso",
  capital: "Ouagadougou",
  latlng: [
  13,
  -2
  ]
  },
  {
  flag: "https://restcountries.eu/data/bdi.svg",
  name: "Burundi",
  capital: "Bujumbura",
  latlng: [
  -3.5,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/khm.svg",
  name: "Cambodia",
  capital: "Phnom Penh",
  latlng: [
  13,
  105
  ]
  },
  {
  flag: "https://restcountries.eu/data/cmr.svg",
  name: "Cameroon",
  capital: "Yaoundé",
  latlng: [
  6,
  12
  ]
  },
  {
  flag: "https://restcountries.eu/data/can.svg",
  name: "Canada",
  capital: "Ottawa",
  latlng: [
  60,
  -95
  ]
  },
  {
  flag: "https://restcountries.eu/data/cpv.svg",
  name: "Cabo Verde",
  capital: "Praia",
  latlng: [
  16,
  -24
  ]
  },
  {
  flag: "https://restcountries.eu/data/cym.svg",
  name: "Cayman Islands",
  capital: "George Town",
  latlng: [
  19.5,
  -80.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/caf.svg",
  name: "Central African Republic",
  capital: "Bangui",
  latlng: [
  7,
  21
  ]
  },
  {
  flag: "https://restcountries.eu/data/tcd.svg",
  name: "Chad",
  capital: "N'Djamena",
  latlng: [
  15,
  19
  ]
  },
  {
  flag: "https://restcountries.eu/data/chl.svg",
  name: "Chile",
  capital: "Santiago",
  latlng: [
  -30,
  -71
  ]
  },
  {
  flag: "https://restcountries.eu/data/chn.svg",
  name: "China",
  capital: "Beijing",
  latlng: [
  35,
  105
  ]
  },
  {
  flag: "https://restcountries.eu/data/cxr.svg",
  name: "Christmas Island",
  capital: "Flying Fish Cove",
  latlng: [
  -10.5,
  105.66666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/cck.svg",
  name: "Cocos (Keeling) Islands",
  capital: "West Island",
  latlng: [
  -12.5,
  96.83333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/col.svg",
  name: "Colombia",
  capital: "Bogotá",
  latlng: [
  4,
  -72
  ]
  },
  {
  flag: "https://restcountries.eu/data/com.svg",
  name: "Comoros",
  capital: "Moroni",
  latlng: [
  -12.16666666,
  44.25
  ]
  },
  {
  flag: "https://restcountries.eu/data/cog.svg",
  name: "Congo",
  capital: "Brazzaville",
  latlng: [
  -1,
  15
  ]
  },
  {
  flag: "https://restcountries.eu/data/cod.svg",
  name: "Congo (Democratic Republic of the)",
  capital: "Kinshasa",
  latlng: [
  0,
  25
  ]
  },
  {
  flag: "https://restcountries.eu/data/cok.svg",
  name: "Cook Islands",
  capital: "Avarua",
  latlng: [
  -21.23333333,
  -159.76666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/cri.svg",
  name: "Costa Rica",
  capital: "San José",
  latlng: [
  10,
  -84
  ]
  },
  {
  flag: "https://restcountries.eu/data/hrv.svg",
  name: "Croatia",
  capital: "Zagreb",
  latlng: [
  45.16666666,
  15.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/cub.svg",
  name: "Cuba",
  capital: "Havana",
  latlng: [
  21.5,
  -80
  ]
  },
  {
  flag: "https://restcountries.eu/data/cuw.svg",
  name: "Curaçao",
  capital: "Willemstad",
  latlng: [
  12.116667,
  -68.933333
  ]
  },
  {
  flag: "https://restcountries.eu/data/cyp.svg",
  name: "Cyprus",
  capital: "Nicosia",
  latlng: [
  35,
  33
  ]
  },
  {
  flag: "https://restcountries.eu/data/cze.svg",
  name: "Czech Republic",
  capital: "Prague",
  latlng: [
  49.75,
  15.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/dnk.svg",
  name: "Denmark",
  capital: "Copenhagen",
  latlng: [
  56,
  10
  ]
  },
  {
  flag: "https://restcountries.eu/data/dji.svg",
  name: "Djibouti",
  capital: "Djibouti",
  latlng: [
  11.5,
  43
  ]
  },
  {
  flag: "https://restcountries.eu/data/dma.svg",
  name: "Dominica",
  capital: "Roseau",
  latlng: [
  15.41666666,
  -61.33333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/dom.svg",
  name: "Dominican Republic",
  capital: "Santo Domingo",
  latlng: [
  19,
  -70.66666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/ecu.svg",
  name: "Ecuador",
  capital: "Quito",
  latlng: [
  -2,
  -77.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/egy.svg",
  name: "Egypt",
  capital: "Cairo",
  latlng: [
  27,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/slv.svg",
  name: "El Salvador",
  capital: "San Salvador",
  latlng: [
  13.83333333,
  -88.91666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/gnq.svg",
  name: "Equatorial Guinea",
  capital: "Malabo",
  latlng: [
  2,
  10
  ]
  },
  {
  flag: "https://restcountries.eu/data/eri.svg",
  name: "Eritrea",
  capital: "Asmara",
  latlng: [
  15,
  39
  ]
  },
  {
  flag: "https://restcountries.eu/data/est.svg",
  name: "Estonia",
  capital: "Tallinn",
  latlng: [
  59,
  26
  ]
  },
  {
  flag: "https://restcountries.eu/data/eth.svg",
  name: "Ethiopia",
  capital: "Addis Ababa",
  latlng: [
  8,
  38
  ]
  },
  {
  flag: "https://restcountries.eu/data/flk.svg",
  name: "Falkland Islands (Malvinas)",
  capital: "Stanley",
  latlng: [
  -51.75,
  -59
  ]
  },
  {
  flag: "https://restcountries.eu/data/fro.svg",
  name: "Faroe Islands",
  capital: "Tórshavn",
  latlng: [
  62,
  -7
  ]
  },
  {
  flag: "https://restcountries.eu/data/fji.svg",
  name: "Fiji",
  capital: "Suva",
  latlng: [
  -18,
  175
  ]
  },
  {
  flag: "https://restcountries.eu/data/fin.svg",
  name: "Finland",
  capital: "Helsinki",
  latlng: [
  64,
  26
  ]
  },
  {
  flag: "https://restcountries.eu/data/fra.svg",
  name: "France",
  capital: "Paris",
  latlng: [
  46,
  2
  ]
  },
  {
  flag: "https://restcountries.eu/data/guf.svg",
  name: "French Guiana",
  capital: "Cayenne",
  latlng: [
  4,
  -53
  ]
  },
  {
  flag: "https://restcountries.eu/data/pyf.svg",
  name: "French Polynesia",
  capital: "Papeetē",
  latlng: [
  -15,
  -140
  ]
  },
  {
  flag: "https://restcountries.eu/data/atf.svg",
  name: "French Southern Territories",
  capital: "Port-aux-Français",
  latlng: [
  -49.25,
  69.167
  ]
  },
  {
  flag: "https://restcountries.eu/data/gab.svg",
  name: "Gabon",
  capital: "Libreville",
  latlng: [
  -1,
  11.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/gmb.svg",
  name: "Gambia",
  capital: "Banjul",
  latlng: [
  13.46666666,
  -16.56666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/geo.svg",
  name: "Georgia",
  capital: "Tbilisi",
  latlng: [
  42,
  43.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/deu.svg",
  name: "Germany",
  capital: "Berlin",
  latlng: [
  51,
  9
  ]
  },
  {
  flag: "https://restcountries.eu/data/gha.svg",
  name: "Ghana",
  capital: "Accra",
  latlng: [
  8,
  -2
  ]
  },
  {
  flag: "https://restcountries.eu/data/gib.svg",
  name: "Gibraltar",
  capital: "Gibraltar",
  latlng: [
  36.13333333,
  -5.35
  ]
  },
  {
  flag: "https://restcountries.eu/data/grc.svg",
  name: "Greece",
  capital: "Athens",
  latlng: [
  39,
  22
  ]
  },
  {
  flag: "https://restcountries.eu/data/grl.svg",
  name: "Greenland",
  capital: "Nuuk",
  latlng: [
  72,
  -40
  ]
  },
  {
  flag: "https://restcountries.eu/data/grd.svg",
  name: "Grenada",
  capital: "St. George's",
  latlng: [
  12.11666666,
  -61.66666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/glp.svg",
  name: "Guadeloupe",
  capital: "Basse-Terre",
  latlng: [
  16.25,
  -61.583333
  ]
  },
  {
  flag: "https://restcountries.eu/data/gum.svg",
  name: "Guam",
  capital: "Hagåtña",
  latlng: [
  13.46666666,
  144.78333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/gtm.svg",
  name: "Guatemala",
  capital: "Guatemala City",
  latlng: [
  15.5,
  -90.25
  ]
  },
  {
  flag: "https://restcountries.eu/data/ggy.svg",
  name: "Guernsey",
  capital: "St. Peter Port",
  latlng: [
  49.46666666,
  -2.58333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/gin.svg",
  name: "Guinea",
  capital: "Conakry",
  latlng: [
  11,
  -10
  ]
  },
  {
  flag: "https://restcountries.eu/data/gnb.svg",
  name: "Guinea-Bissau",
  capital: "Bissau",
  latlng: [
  12,
  -15
  ]
  },
  {
  flag: "https://restcountries.eu/data/guy.svg",
  name: "Guyana",
  capital: "Georgetown",
  latlng: [
  5,
  -59
  ]
  },
  {
  flag: "https://restcountries.eu/data/hti.svg",
  name: "Haiti",
  capital: "Port-au-Prince",
  latlng: [
  19,
  -72.41666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/hmd.svg",
  name: "Heard Island and McDonald Islands",
  capital: "",
  latlng: [
  -53.1,
  72.51666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/vat.svg",
  name: "Holy See",
  capital: "Rome",
  latlng: [
  41.9,
  12.45
  ]
  },
  {
  flag: "https://restcountries.eu/data/hnd.svg",
  name: "Honduras",
  capital: "Tegucigalpa",
  latlng: [
  15,
  -86.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/hkg.svg",
  name: "Hong Kong",
  capital: "City of Victoria",
  latlng: [
  22.25,
  114.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/hun.svg",
  name: "Hungary",
  capital: "Budapest",
  latlng: [
  47,
  20
  ]
  },
  {
  flag: "https://restcountries.eu/data/isl.svg",
  name: "Iceland",
  capital: "Reykjavík",
  latlng: [
  65,
  -18
  ]
  },
  {
  flag: "https://restcountries.eu/data/ind.svg",
  name: "India",
  capital: "New Delhi",
  latlng: [
  20,
  77
  ]
  },
  {
  flag: "https://restcountries.eu/data/idn.svg",
  name: "Indonesia",
  capital: "Jakarta",
  latlng: [
  -5,
  120
  ]
  },
  {
  flag: "https://restcountries.eu/data/civ.svg",
  name: "Côte d'Ivoire",
  capital: "Yamoussoukro",
  latlng: [
  8,
  -5
  ]
  },
  {
  flag: "https://restcountries.eu/data/irn.svg",
  name: "Iran (Islamic Republic of)",
  capital: "Tehran",
  latlng: [
  32,
  53
  ]
  },
  {
  flag: "https://restcountries.eu/data/irq.svg",
  name: "Iraq",
  capital: "Baghdad",
  latlng: [
  33,
  44
  ]
  },
  {
  flag: "https://restcountries.eu/data/irl.svg",
  name: "Ireland",
  capital: "Dublin",
  latlng: [
  53,
  -8
  ]
  },
  {
  flag: "https://restcountries.eu/data/imn.svg",
  name: "Isle of Man",
  capital: "Douglas",
  latlng: [
  54.25,
  -4.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/isr.svg",
  name: "Israel",
  capital: "Jerusalem",
  latlng: [
  31.5,
  34.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/ita.svg",
  name: "Italy",
  capital: "Rome",
  latlng: [
  42.83333333,
  12.83333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/jam.svg",
  name: "Jamaica",
  capital: "Kingston",
  latlng: [
  18.25,
  -77.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/jpn.svg",
  name: "Japan",
  capital: "Tokyo",
  latlng: [
  36,
  138
  ]
  },
  {
  flag: "https://restcountries.eu/data/jey.svg",
  name: "Jersey",
  capital: "Saint Helier",
  latlng: [
  49.25,
  -2.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/jor.svg",
  name: "Jordan",
  capital: "Amman",
  latlng: [
  31,
  36
  ]
  },
  {
  flag: "https://restcountries.eu/data/kaz.svg",
  name: "Kazakhstan",
  capital: "Astana",
  latlng: [
  48,
  68
  ]
  },
  {
  flag: "https://restcountries.eu/data/ken.svg",
  name: "Kenya",
  capital: "Nairobi",
  latlng: [
  1,
  38
  ]
  },
  {
  flag: "https://restcountries.eu/data/kir.svg",
  name: "Kiribati",
  capital: "South Tarawa",
  latlng: [
  1.41666666,
  173
  ]
  },
  {
  flag: "https://restcountries.eu/data/kwt.svg",
  name: "Kuwait",
  capital: "Kuwait City",
  latlng: [
  29.5,
  45.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/kgz.svg",
  name: "Kyrgyzstan",
  capital: "Bishkek",
  latlng: [
  41,
  75
  ]
  },
  {
  flag: "https://restcountries.eu/data/lao.svg",
  name: "Lao People's Democratic Republic",
  capital: "Vientiane",
  latlng: [
  18,
  105
  ]
  },
  {
  flag: "https://restcountries.eu/data/lva.svg",
  name: "Latvia",
  capital: "Riga",
  latlng: [
  57,
  25
  ]
  },
  {
  flag: "https://restcountries.eu/data/lbn.svg",
  name: "Lebanon",
  capital: "Beirut",
  latlng: [
  33.83333333,
  35.83333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/lso.svg",
  name: "Lesotho",
  capital: "Maseru",
  latlng: [
  -29.5,
  28.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/lbr.svg",
  name: "Liberia",
  capital: "Monrovia",
  latlng: [
  6.5,
  -9.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/lby.svg",
  name: "Libya",
  capital: "Tripoli",
  latlng: [
  25,
  17
  ]
  },
  {
  flag: "https://restcountries.eu/data/lie.svg",
  name: "Liechtenstein",
  capital: "Vaduz",
  latlng: [
  47.26666666,
  9.53333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/ltu.svg",
  name: "Lithuania",
  capital: "Vilnius",
  latlng: [
  56,
  24
  ]
  },
  {
  flag: "https://restcountries.eu/data/lux.svg",
  name: "Luxembourg",
  capital: "Luxembourg",
  latlng: [
  49.75,
  6.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/mac.svg",
  name: "Macao",
  capital: "",
  latlng: [
  22.16666666,
  113.55
  ]
  },
  {
  flag: "https://restcountries.eu/data/mkd.svg",
  name: "Macedonia (the former Yugoslav Republic of)",
  capital: "Skopje",
  latlng: [
  41.83333333,
  22
  ]
  },
  {
  flag: "https://restcountries.eu/data/mdg.svg",
  name: "Madagascar",
  capital: "Antananarivo",
  latlng: [
  -20,
  47
  ]
  },
  {
  flag: "https://restcountries.eu/data/mwi.svg",
  name: "Malawi",
  capital: "Lilongwe",
  latlng: [
  -13.5,
  34
  ]
  },
  {
  flag: "https://restcountries.eu/data/mys.svg",
  name: "Malaysia",
  capital: "Kuala Lumpur",
  latlng: [
  2.5,
  112.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/mdv.svg",
  name: "Maldives",
  capital: "Malé",
  latlng: [
  3.25,
  73
  ]
  },
  {
  flag: "https://restcountries.eu/data/mli.svg",
  name: "Mali",
  capital: "Bamako",
  latlng: [
  17,
  -4
  ]
  },
  {
  flag: "https://restcountries.eu/data/mlt.svg",
  name: "Malta",
  capital: "Valletta",
  latlng: [
  35.83333333,
  14.58333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/mhl.svg",
  name: "Marshall Islands",
  capital: "Majuro",
  latlng: [
  9,
  168
  ]
  },
  {
  flag: "https://restcountries.eu/data/mtq.svg",
  name: "Martinique",
  capital: "Fort-de-France",
  latlng: [
  14.666667,
  -61
  ]
  },
  {
  flag: "https://restcountries.eu/data/mrt.svg",
  name: "Mauritania",
  capital: "Nouakchott",
  latlng: [
  20,
  -12
  ]
  },
  {
  flag: "https://restcountries.eu/data/mus.svg",
  name: "Mauritius",
  capital: "Port Louis",
  latlng: [
  -20.28333333,
  57.55
  ]
  },
  {
  flag: "https://restcountries.eu/data/myt.svg",
  name: "Mayotte",
  capital: "Mamoudzou",
  latlng: [
  -12.83333333,
  45.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/mex.svg",
  name: "Mexico",
  capital: "Mexico City",
  latlng: [
  23,
  -102
  ]
  },
  {
  flag: "https://restcountries.eu/data/fsm.svg",
  name: "Micronesia (Federated States of)",
  capital: "Palikir",
  latlng: [
  6.91666666,
  158.25
  ]
  },
  {
  flag: "https://restcountries.eu/data/mda.svg",
  name: "Moldova (Republic of)",
  capital: "Chișinău",
  latlng: [
  47,
  29
  ]
  },
  {
  flag: "https://restcountries.eu/data/mco.svg",
  name: "Monaco",
  capital: "Monaco",
  latlng: [
  43.73333333,
  7.4
  ]
  },
  {
  flag: "https://restcountries.eu/data/mng.svg",
  name: "Mongolia",
  capital: "Ulan Bator",
  latlng: [
  46,
  105
  ]
  },
  {
  flag: "https://restcountries.eu/data/mne.svg",
  name: "Montenegro",
  capital: "Podgorica",
  latlng: [
  42.5,
  19.3
  ]
  },
  {
  flag: "https://restcountries.eu/data/msr.svg",
  name: "Montserrat",
  capital: "Plymouth",
  latlng: [
  16.75,
  -62.2
  ]
  },
  {
  flag: "https://restcountries.eu/data/mar.svg",
  name: "Morocco",
  capital: "Rabat",
  latlng: [
  32,
  -5
  ]
  },
  {
  flag: "https://restcountries.eu/data/moz.svg",
  name: "Mozambique",
  capital: "Maputo",
  latlng: [
  -18.25,
  35
  ]
  },
  {
  flag: "https://restcountries.eu/data/mmr.svg",
  name: "Myanmar",
  capital: "Naypyidaw",
  latlng: [
  22,
  98
  ]
  },
  {
  flag: "https://restcountries.eu/data/nam.svg",
  name: "Namibia",
  capital: "Windhoek",
  latlng: [
  -22,
  17
  ]
  },
  {
  flag: "https://restcountries.eu/data/nru.svg",
  name: "Nauru",
  capital: "Yaren",
  latlng: [
  -0.53333333,
  166.91666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/npl.svg",
  name: "Nepal",
  capital: "Kathmandu",
  latlng: [
  28,
  84
  ]
  },
  {
  flag: "https://restcountries.eu/data/nld.svg",
  name: "Netherlands",
  capital: "Amsterdam",
  latlng: [
  52.5,
  5.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/ncl.svg",
  name: "New Caledonia",
  capital: "Nouméa",
  latlng: [
  -21.5,
  165.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/nzl.svg",
  name: "New Zealand",
  capital: "Wellington",
  latlng: [
  -41,
  174
  ]
  },
  {
  flag: "https://restcountries.eu/data/nic.svg",
  name: "Nicaragua",
  capital: "Managua",
  latlng: [
  13,
  -85
  ]
  },
  {
  flag: "https://restcountries.eu/data/ner.svg",
  name: "Niger",
  capital: "Niamey",
  latlng: [
  16,
  8
  ]
  },
  {
  flag: "https://restcountries.eu/data/nga.svg",
  name: "Nigeria",
  capital: "Abuja",
  latlng: [
  10,
  8
  ]
  },
  {
  flag: "https://restcountries.eu/data/niu.svg",
  name: "Niue",
  capital: "Alofi",
  latlng: [
  -19.03333333,
  -169.86666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/nfk.svg",
  name: "Norfolk Island",
  capital: "Kingston",
  latlng: [
  -29.03333333,
  167.95
  ]
  },
  {
  flag: "https://restcountries.eu/data/prk.svg",
  name: "Korea (Democratic People's Republic of)",
  capital: "Pyongyang",
  latlng: [
  40,
  127
  ]
  },
  {
  flag: "https://restcountries.eu/data/mnp.svg",
  name: "Northern Mariana Islands",
  capital: "Saipan",
  latlng: [
  15.2,
  145.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/nor.svg",
  name: "Norway",
  capital: "Oslo",
  latlng: [
  62,
  10
  ]
  },
  {
  flag: "https://restcountries.eu/data/omn.svg",
  name: "Oman",
  capital: "Muscat",
  latlng: [
  21,
  57
  ]
  },
  {
  flag: "https://restcountries.eu/data/pak.svg",
  name: "Pakistan",
  capital: "Islamabad",
  latlng: [
  30,
  70
  ]
  },
  {
  flag: "https://restcountries.eu/data/plw.svg",
  name: "Palau",
  capital: "Ngerulmud",
  latlng: [
  7.5,
  134.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/pse.svg",
  name: "Palestine, State of",
  capital: "Ramallah",
  latlng: [
  31.9,
  35.2
  ]
  },
  {
  flag: "https://restcountries.eu/data/pan.svg",
  name: "Panama",
  capital: "Panama City",
  latlng: [
  9,
  -80
  ]
  },
  {
  flag: "https://restcountries.eu/data/png.svg",
  name: "Papua New Guinea",
  capital: "Port Moresby",
  latlng: [
  -6,
  147
  ]
  },
  {
  flag: "https://restcountries.eu/data/pry.svg",
  name: "Paraguay",
  capital: "Asunción",
  latlng: [
  -23,
  -58
  ]
  },
  {
  flag: "https://restcountries.eu/data/per.svg",
  name: "Peru",
  capital: "Lima",
  latlng: [
  -10,
  -76
  ]
  },
  {
  flag: "https://restcountries.eu/data/phl.svg",
  name: "Philippines",
  capital: "Manila",
  latlng: [
  13,
  122
  ]
  },
  {
  flag: "https://restcountries.eu/data/pcn.svg",
  name: "Pitcairn",
  capital: "Adamstown",
  latlng: [
  -25.06666666,
  -130.1
  ]
  },
  {
  flag: "https://restcountries.eu/data/pol.svg",
  name: "Poland",
  capital: "Warsaw",
  latlng: [
  52,
  20
  ]
  },
  {
  flag: "https://restcountries.eu/data/prt.svg",
  name: "Portugal",
  capital: "Lisbon",
  latlng: [
  39.5,
  -8
  ]
  },
  {
  flag: "https://restcountries.eu/data/pri.svg",
  name: "Puerto Rico",
  capital: "San Juan",
  latlng: [
  18.25,
  -66.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/qat.svg",
  name: "Qatar",
  capital: "Doha",
  latlng: [
  25.5,
  51.25
  ]
  },
  {
  flag: "https://restcountries.eu/data/kos.svg",
  name: "Republic of Kosovo",
  capital: "Pristina",
  latlng: [
  42.666667,
  21.166667
  ]
  },
  {
  flag: "https://restcountries.eu/data/reu.svg",
  name: "Réunion",
  capital: "Saint-Denis",
  latlng: [
  -21.15,
  55.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/rou.svg",
  name: "Romania",
  capital: "Bucharest",
  latlng: [
  46,
  25
  ]
  },
  {
  flag: "https://restcountries.eu/data/rus.svg",
  name: "Russian Federation",
  capital: "Moscow",
  latlng: [
  60,
  100
  ]
  },
  {
  flag: "https://restcountries.eu/data/rwa.svg",
  name: "Rwanda",
  capital: "Kigali",
  latlng: [
  -2,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/blm.svg",
  name: "Saint Barthélemy",
  capital: "Gustavia",
  latlng: [
  18.5,
  -63.41666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/shn.svg",
  name: "Saint Helena, Ascension and Tristan da Cunha",
  capital: "Jamestown",
  latlng: [
  -15.95,
  -5.7
  ]
  },
  {
  flag: "https://restcountries.eu/data/kna.svg",
  name: "Saint Kitts and Nevis",
  capital: "Basseterre",
  latlng: [
  17.33333333,
  -62.75
  ]
  },
  {
  flag: "https://restcountries.eu/data/lca.svg",
  name: "Saint Lucia",
  capital: "Castries",
  latlng: [
  13.88333333,
  -60.96666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/maf.svg",
  name: "Saint Martin (French part)",
  capital: "Marigot",
  latlng: [
  18.08333333,
  -63.95
  ]
  },
  {
  flag: "https://restcountries.eu/data/spm.svg",
  name: "Saint Pierre and Miquelon",
  capital: "Saint-Pierre",
  latlng: [
  46.83333333,
  -56.33333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/vct.svg",
  name: "Saint Vincent and the Grenadines",
  capital: "Kingstown",
  latlng: [
  13.25,
  -61.2
  ]
  },
  {
  flag: "https://restcountries.eu/data/wsm.svg",
  name: "Samoa",
  capital: "Apia",
  latlng: [
  -13.58333333,
  -172.33333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/smr.svg",
  name: "San Marino",
  capital: "City of San Marino",
  latlng: [
  43.76666666,
  12.41666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/stp.svg",
  name: "Sao Tome and Principe",
  capital: "São Tomé",
  latlng: [
  1,
  7
  ]
  },
  {
  flag: "https://restcountries.eu/data/sau.svg",
  name: "Saudi Arabia",
  capital: "Riyadh",
  latlng: [
  25,
  45
  ]
  },
  {
  flag: "https://restcountries.eu/data/sen.svg",
  name: "Senegal",
  capital: "Dakar",
  latlng: [
  14,
  -14
  ]
  },
  {
  flag: "https://restcountries.eu/data/srb.svg",
  name: "Serbia",
  capital: "Belgrade",
  latlng: [
  44,
  21
  ]
  },
  {
  flag: "https://restcountries.eu/data/syc.svg",
  name: "Seychelles",
  capital: "Victoria",
  latlng: [
  -4.58333333,
  55.66666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/sle.svg",
  name: "Sierra Leone",
  capital: "Freetown",
  latlng: [
  8.5,
  -11.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/sgp.svg",
  name: "Singapore",
  capital: "Singapore",
  latlng: [
  1.36666666,
  103.8
  ]
  },
  {
  flag: "https://restcountries.eu/data/sxm.svg",
  name: "Sint Maarten (Dutch part)",
  capital: "Philipsburg",
  latlng: [
  18.033333,
  -63.05
  ]
  },
  {
  flag: "https://restcountries.eu/data/svk.svg",
  name: "Slovakia",
  capital: "Bratislava",
  latlng: [
  48.66666666,
  19.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/svn.svg",
  name: "Slovenia",
  capital: "Ljubljana",
  latlng: [
  46.11666666,
  14.81666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/slb.svg",
  name: "Solomon Islands",
  capital: "Honiara",
  latlng: [
  -8,
  159
  ]
  },
  {
  flag: "https://restcountries.eu/data/som.svg",
  name: "Somalia",
  capital: "Mogadishu",
  latlng: [
  10,
  49
  ]
  },
  {
  flag: "https://restcountries.eu/data/zaf.svg",
  name: "South Africa",
  capital: "Pretoria",
  latlng: [
  -29,
  24
  ]
  },
  {
  flag: "https://restcountries.eu/data/sgs.svg",
  name: "South Georgia and the South Sandwich Islands",
  capital: "King Edward Point",
  latlng: [
  -54.5,
  -37
  ]
  },
  {
  flag: "https://restcountries.eu/data/kor.svg",
  name: "Korea (Republic of)",
  capital: "Seoul",
  latlng: [
  37,
  127.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/ssd.svg",
  name: "South Sudan",
  capital: "Juba",
  latlng: [
  7,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/esp.svg",
  name: "Spain",
  capital: "Madrid",
  latlng: [
  40,
  -4
  ]
  },
  {
  flag: "https://restcountries.eu/data/lka.svg",
  name: "Sri Lanka",
  capital: "Colombo",
  latlng: [
  7,
  81
  ]
  },
  {
  flag: "https://restcountries.eu/data/sdn.svg",
  name: "Sudan",
  capital: "Khartoum",
  latlng: [
  15,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/sur.svg",
  name: "Suriname",
  capital: "Paramaribo",
  latlng: [
  4,
  -56
  ]
  },
  {
  flag: "https://restcountries.eu/data/sjm.svg",
  name: "Svalbard and Jan Mayen",
  capital: "Longyearbyen",
  latlng: [
  78,
  20
  ]
  },
  {
  flag: "https://restcountries.eu/data/swz.svg",
  name: "Swaziland",
  capital: "Lobamba",
  latlng: [
  -26.5,
  31.5
  ]
  },
  {
  flag: "https://restcountries.eu/data/swe.svg",
  name: "Sweden",
  capital: "Stockholm",
  latlng: [
  62,
  15
  ]
  },
  {
  flag: "https://restcountries.eu/data/che.svg",
  name: "Switzerland",
  capital: "Bern",
  latlng: [
  47,
  8
  ]
  },
  {
  flag: "https://restcountries.eu/data/syr.svg",
  name: "Syrian Arab Republic",
  capital: "Damascus",
  latlng: [
  35,
  38
  ]
  },
  {
  flag: "https://restcountries.eu/data/twn.svg",
  name: "Taiwan, Province of China",
  capital: "Taipei",
  latlng: [
  23.5,
  121
  ]
  },
  {
  flag: "https://restcountries.eu/data/tjk.svg",
  name: "Tajikistan",
  capital: "Dushanbe",
  latlng: [
  39,
  71
  ]
  },
  {
  flag: "https://restcountries.eu/data/tza.svg",
  name: "Tanzania, United Republic of",
  capital: "Dodoma",
  latlng: [
  -6,
  35
  ]
  },
  {
  flag: "https://restcountries.eu/data/tha.svg",
  name: "Thailand",
  capital: "Bangkok",
  latlng: [
  15,
  100
  ]
  },
  {
  flag: "https://restcountries.eu/data/tls.svg",
  name: "Timor-Leste",
  capital: "Dili",
  latlng: [
  -8.83333333,
  125.91666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/tgo.svg",
  name: "Togo",
  capital: "Lomé",
  latlng: [
  8,
  1.16666666
  ]
  },
  {
  flag: "https://restcountries.eu/data/tkl.svg",
  name: "Tokelau",
  capital: "Fakaofo",
  latlng: [
  -9,
  -172
  ]
  },
  {
  flag: "https://restcountries.eu/data/ton.svg",
  name: "Tonga",
  capital: "Nuku'alofa",
  latlng: [
  -20,
  -175
  ]
  },
  {
  flag: "https://restcountries.eu/data/tto.svg",
  name: "Trinidad and Tobago",
  capital: "Port of Spain",
  latlng: [
  11,
  -61
  ]
  },
  {
  flag: "https://restcountries.eu/data/tun.svg",
  name: "Tunisia",
  capital: "Tunis",
  latlng: [
  34,
  9
  ]
  },
  {
  flag: "https://restcountries.eu/data/tur.svg",
  name: "Turkey",
  capital: "Ankara",
  latlng: [
  39,
  35
  ]
  },
  {
  flag: "https://restcountries.eu/data/tkm.svg",
  name: "Turkmenistan",
  capital: "Ashgabat",
  latlng: [
  40,
  60
  ]
  },
  {
  flag: "https://restcountries.eu/data/tca.svg",
  name: "Turks and Caicos Islands",
  capital: "Cockburn Town",
  latlng: [
  21.75,
  -71.58333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/tuv.svg",
  name: "Tuvalu",
  capital: "Funafuti",
  latlng: [
  -8,
  178
  ]
  },
  {
  flag: "https://restcountries.eu/data/uga.svg",
  name: "Uganda",
  capital: "Kampala",
  latlng: [
  1,
  32
  ]
  },
  {
  flag: "https://restcountries.eu/data/ukr.svg",
  name: "Ukraine",
  capital: "Kiev",
  latlng: [
  49,
  32
  ]
  },
  {
  flag: "https://restcountries.eu/data/are.svg",
  name: "United Arab Emirates",
  capital: "Abu Dhabi",
  latlng: [
  24,
  54
  ]
  },
  {
  flag: "https://restcountries.eu/data/gbr.svg",
  name: "United Kingdom of Great Britain and Northern Ireland",
  capital: "London",
  latlng: [
  54,
  -2
  ]
  },
  {
  flag: "https://restcountries.eu/data/usa.svg",
  name: "United States of America",
  capital: "Washington, D.C.",
  latlng: [
  38,
  -97
  ]
  },
  {
  flag: "https://restcountries.eu/data/ury.svg",
  name: "Uruguay",
  capital: "Montevideo",
  latlng: [
  -33,
  -56
  ]
  },
  {
  flag: "https://restcountries.eu/data/uzb.svg",
  name: "Uzbekistan",
  capital: "Tashkent",
  latlng: [
  41,
  64
  ]
  },
  {
  flag: "https://restcountries.eu/data/vut.svg",
  name: "Vanuatu",
  capital: "Port Vila",
  latlng: [
  -16,
  167
  ]
  },
  {
  flag: "https://restcountries.eu/data/ven.svg",
  name: "Venezuela (Bolivarian Republic of)",
  capital: "Caracas",
  latlng: [
  8,
  -66
  ]
  },
  {
  flag: "https://restcountries.eu/data/vnm.svg",
  name: "Viet Nam",
  capital: "Hanoi",
  latlng: [
  16.16666666,
  107.83333333
  ]
  },
  {
  flag: "https://restcountries.eu/data/wlf.svg",
  name: "Wallis and Futuna",
  capital: "Mata-Utu",
  latlng: [
  -13.3,
  -176.2
  ]
  },
  {
  flag: "https://restcountries.eu/data/esh.svg",
  name: "Western Sahara",
  capital: "El Aaiún",
  latlng: [
  24.5,
  -13
  ]
  },
  {
  flag: "https://restcountries.eu/data/yem.svg",
  name: "Yemen",
  capital: "Sana'a",
  latlng: [
  15,
  48
  ]
  },
  {
  flag: "https://restcountries.eu/data/zmb.svg",
  name: "Zambia",
  capital: "Lusaka",
  latlng: [
  -15,
  30
  ]
  },
  {
  flag: "https://restcountries.eu/data/zwe.svg",
  name: "Zimbabwe",
  capital: "Harare",
  latlng: [
  -20,
  30
  ]
  }
  ]

  countryModel
  .insertMany(country)
  .then(res => {
    console.log("country created");
  })
  .catch(err => {
    console.log(error), err;
  });

  