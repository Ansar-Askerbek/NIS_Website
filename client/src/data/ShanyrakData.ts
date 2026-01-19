export interface Shanyrak {
  id: number;
  name: string;
  score: number;
  leader: string;
  curator: string;
  students: string;
  trend: number; // Например, изменение за неделю
}

export const shanyraksData: Shanyrak[] = [
  {
    id: 1,
    name: 'Alash',
    score: 1350,
    leader: 'Алихан Болат',
    curator: 'Айгуль Сериковна',
    students: "7A/7B/12E/12G",
    trend: 12
  },
  {
    id: 2,
    name: 'Zhalyn',
    score: 1380,
    leader: 'Диас Карим',
    curator: 'Ержан Нурланович',
    students: "9K/12F/12H",
    trend: 8
  },
  {
    id: 3,
    name: 'Almaty',
    score: 1320,
    leader: 'Мадина Асан',
    curator: 'Гульнар Абаевна',
    students: "8L/8M/12L/12O",
    trend: -5
  },
  {
    id: 4,
    name: 'Zhetisy',
    score: 1290,
    leader: 'Санжар Куаныш',
    curator: 'Бекзат Ерикович',
    students: "11K/11O/12K/12R",
    trend: 4
  },
  {
    id: 5,
    name: 'Atameken',
    score: 1250,
    leader: 'Алуа Марат',
    curator: 'Светлана Ивановна',
    students: "8A/11A/12B/12A",
    trend: 0
  },
  {
    id: 6,
    name: 'Shymbulak',
    score: 1210,
    leader: 'Ерасыл Даулет',
    curator: 'Кайрат Аскарович',
    students: "9A/12N/12Q",
    trend: 15
  },
  {
    id: 7,
    name: "Khantangri",
    score: 1180,
    students: "8G/10C/11D",
    trend: 0,
    curator: "Каип Мурат",
    leader: "qwdc"
  },
  {
    id: 8,
    name: "Altyn Emel",
    score: 1150,
    students: "7C/7D/11C/12I",
    trend: 0,
    curator: "Абзелбек Акбота",
    leader: ""
  },
  {
    id: 9,
    name: "Zhas Kanat",
    score: 1150,
    students: "7E/9E/12C",
    trend: 0,
    curator: "Есенгазиева Жанаргуль",
    leader: ""
  },
  {
    id: 10,
    name: "Tulpar",
    score: 1150,
    students: "9D/10D",
    trend: 0,
    curator: "Аязбаева Адель",
    leader: ""
  },
  {
    id: 11,
    name: "Saryarka",
    score: 1150,
    students: "9B/12M/12P",
    trend: 0,
    curator: "Джансеитова Эльмира",
    leader: ""
  },
  {
    id: 12,
    name: "Yshkonyr",
    score: 1150,
    students: "9C/10A",
    trend: 0,
    curator: "Казтаева Айымжан",
    leader: ""
  },
  {
    id: 13,
    name: "Bolashak",
    score: 1150,
    students: "8F/10G/12D",
    trend: 0,
    curator: "Дария Турсунбеккызы",
    leader: ""
  },
  {
    id: 14,
    name: "Almaly",
    score: 1150,
    students: "7M/7F/12M/12N",
    trend: 0,
    curator: "Абдибай Аружан",
    leader: ""
  },
  {
    id: 15,
    name: "Esentai",
    score: 1500,
    students: "7K/7H/10K",
    trend: 0,
    curator: "Есболат Айжан",
    leader: ""
  },
  {
    id: 16,
    name: "Zhetigen",
    score: 1150,
    students: "7G/8E/11B/11F",
    trend: 0,
    curator: "Кокенов Жакып",
    leader: ""
  },
  {
    id: 17,
    name: "Koktobe",
    score: 1150,
    students: "8C/10F/11H",
    trend: 0,
    curator: "Асанбаева Аружан",
    leader: ""
  },
  {
    id: 18,
    name: "Medeu",
    score: 1150,
    students: "7L/10E/11L",
    trend: 0,
    curator: "Пралиева Майра",
    leader: ""
  },
  {
    id: 19,
    name: "Turan",
    score: 1150,
    students: "9L/11G/11E",
    trend: 0,
    curator: "Сергазы Шугыла",
    leader: ""
  },
  {
    id: 20,
    name: "Alatau",
    score: 1150,
    students: "8D/8K/10B",
    trend: 0,
    curator: "Асил Мерей",
    leader: ""
  },
  {
    id: 21,
    name: "Synkar",
    score: 1150,
    students: "8H/8B/10L",
    trend: 0,
    curator: "Аужан Гулжайнат",
    leader: ""
  },
];