export const getDisasterTypes = () => [
  {
    value: "earthquake",
    text: "Землетрясение",
  },
  {
    value: "flood",
    text: "Наводнение",
  },
  {
    value: "fire",
    text: "Пожар",
  },
  {
    value: "storm",
    text: "Шторм",
  },
  {
    value: "tsunami",
    text: "Цунами",
  },
];

export const getInjuriesByDisasterType = (type) => {
  const injuries = {
    earthquake: [
      {
        value: "fractures",
        text: "Переломы",
        icon: "fractures",
      },
      {
        value: "head-injury",
        text: "Травмы головы",
        icon: "head-injury",
      },
    ],
    flood: [
      {
        value: "bruises",
        text: "Ушибы",
        icon: "bruises",
      },
      {
        value: "bleeding",
        text: "Кровотечение",
        icon: "bleeding",
      },
    ],
    fire: [
      {
        value: "bruises",
        text: "Ушибы",
        icon: "bruises",
      },
      {
        value: "burns",
        text: "Ожоги",
        icon: "burns",
      },
    ],
    storm: [
      {
        value: "bruises",
        text: "Ушибы",
        icon: "bruises",
      },
      {
        value: "bleeding",
        text: "Кровотечение",
        icon: "bleeding",
      },
    ],
    tsunami: [
      {
        value: "bruises",
        text: "Ушибы",
        icon: "bruises",
      },
      {
        value: "head-injury",
        text: "Травмы головы",
        icon: "head-injury",
      },
    ],
  };
  return injuries[type];
};
