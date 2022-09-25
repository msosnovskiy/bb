const hair = {
  id: 'hair',
  name: 'Волосы',
  comment: {
    title: 'Оказываемая услуга',
    description: [
      {
        title: 'S',
        text: ' – Длина волос до мочки уха'
      },
      {
        title: 'M',
        text: ' – Длина волос до лопаток'
      },
      {
        title: 'L',
        text: ' – Длина волос до пояса'
      },
    ],
    exception: '*Цены оговариваются индивидуально, если толщина косы у основания головы свыше 4 см или длина волос ниже пояса',
  },
  service: [
    {
      name: 'Причёски & укладки',
      item: [
        {
          name: 'Сушка + мытьё',
          price: 7.9,
          unit: false,
        },
        {
          name: 'Выпрямление утюжком',
          price: 7.9,
          unit: false,
        },
        {
          name: 'Брашинг / экспресс локоны',
          price: [14, 18, 23],
          unit: false,
        },
        {
          name: 'Локоны / афрокудри',
          price: [16, 20, 30],
          unit: false,
        },
        {
          name: 'Причёска',
          price: 45,
          unit: false,
        },
      ]
    },
    {
      name: 'Стрижки',
      item: [
        {
          name: 'Прямой срез',
          price: 11.9,
          unit: false,
        },
        {
          name: 'Мужская / детская',
          price: 12.9,
          unit: false,
        },
        {
          name: 'Чёлка',
          price: 8.9,
          unit: false,
        },
        {
          name: 'Каре',
          price: 19.8,
          unit: false,
        },
        {
          name: 'Стрижка',
          price: [13.8, 19.8, 22.9],
          unit: false,
        },
        {
          name: 'Модельная',
          price: 17.5,
          unit: true,
        },
      ]
    },
    {
      name: 'Кератин и ботокс Honma tokyo',
      item: [
        {
          name: 'Кератиновое выпрямление',
          price: ['–', 169, 209],
          unit: false,
        },
        {
          name: 'Ботокс',
          price: ['–', 169, 209],
          unit: false,
        },
      ]
    },
    {
      name: 'Окрашивание Londa / Matrix',
      item: [
        {
          name: 'Консультация',
          price: 0,
          unit: false,
        },
        {
          name: 'Окрашивание корней',
          price: 89,
          unit: false,
        },
        {
          name: 'Окрашивание корней + тонирование (блонд)',
          price: 126,
          unit: false,
        },
      ]
    },
    {
      name: `Окрашивание L'Oreal professional`,
      item: [
        {
          name: 'Консультация',
          price: 0,
          unit: false,
        },
        {
          name: 'Окрашивание корней',
          price: 117,
          unit: false,
        },
        {
          name: 'Окрашивание + тонирование (блонд)',
          price: 194,
          unit: false,
        },
      ]
    },
    {
      name: 'Окрашивание с краской клиента',
      item: [
        {
          name: 'Окрашивание корней',
          price: 45,
          unit: false,
        },
        {
          name: 'Окрашивание всей длины',
          price: 52,
          unit: false,
        },
      ]
    },
  ]
}