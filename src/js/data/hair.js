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

          price: 8.95,

          unit: false,

        },

        {

          name: 'Выпрямление утюжком',

          price: 8.95,

          unit: false,

        },

        {

          name: 'Брашинг / экспресс локоны',

          price: [15, 19.5, 25.5],

          unit: false,

        },

        {

          name: 'Локоны / афрокудри',

          price: [17.5, 22, 32],

          unit: false,

        },

        {

          name: 'Причёска',

          price: 50,

          unit: false,

        },

      ]

    },

    {

      name: 'Стрижки',

      item: [

        {

          name: 'Прямой срез',

          price: 14.95,

          unit: false,

        },

        {

          name: 'Детская',

          price: 13.55,

          unit: false,

        },

        {

          name: 'Чёлка',

          price: 9.99,

          unit: false,

        },

        {

          name: 'Каре',

          price: 19.99,

          unit: false,

        },

        {

          name: 'Стрижка',

          price: [14.8, 19.99, 23.9],

          unit: false,

        },

        {

          name: 'Модельная',

          price: 19.5,

          unit: false,

        },

      ]

    },

    {

      name: 'Уход',

      item: [

        {

          name: 'К18 проф. спрей–мист для волос',

          price: 19.50,

          unit: false,

        },

        {

          name: 'К18 проф. маска для волос',

          price: 19.50,

          unit: false,

        },

        {

          name: 'Кератиновое выпрямление',

          price: ['–', 179, 219],

          unit: false,

        },

        {

          name: 'Ботокс',

          price: ['–', 179, 219],

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

          price: 95,

          unit: false,

        },

        {

          name: 'Однотонное',

          price: [109, 149, 189],

          unit: false,

        },

        {

          name: 'Тонировка волос',

          price: [74, 95, 125],

          unit: false,

        },

        {

          name: 'Мелирование + тонирование',

          price: [108, 149, 189],

          unit: false,

        },

        {

          name: 'Выход из чёрного',

          price: [165, 209, 239],

          unit: false,

        },

        {

          name: 'Растяжка цвет',

          price: ['–', 127, 167],

          unit: false,

        },

        {

          name: 'Омбре, балаяж и др.',

          price: ['–', 169, 229],

          unit: false,

        },

        {

          name: 'Окрашивание корней + тонирование (блонд)',

          price: 136,

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

          price: 129,

          unit: false,

        },

        {

          name: 'Однотонное',

          price: [171, 241, 311],

          unit: false,

        },

        {

          name: 'Тонировка волос',

          price: [116, 136, 178],

          unit: false,

        },

        {

          name: 'Мелирование + тонирование',

          price: [116, 176, 237],

          unit: false,

        },

        {

          name: 'Выход из чёрного',

          price: [207, 261, 309],

          unit: false,

        },

        {

          name: 'Растяжка цвет',

          price: ['–', 177, 231],

          unit: false,

        },

        {

          name: 'Омбре, балаяж и др.',

          price: ['–', 261, 331],

          unit: false,

        },

        {

          name: 'Окрашивание + тонирование (блонд)',

          price: 216,

          unit: false,

        },

      ]

    },

    {

      name: 'Окрашивание краской клиента',

      item: [

        {

          name: 'Окрашивание корней',

          price: 47,

          unit: false,

        },

        {

          name: 'Окрашивание всей длины',

          price: [59, 79, 99],

          unit: false,

        },

      ]

    },

  ]

}