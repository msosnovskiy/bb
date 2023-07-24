const nails = {

  id: 'nails',

  name: 'ногти',

  service: [

    {

      name: 'Снятие покрытия ручки',

      item: [

        {

          name: 'Лак',

          price: 2.99,

          unit: false,

        },

        {

          name: 'Гель-лак',

          price: 5.39,

          unit: false,

        },

        {

          name: 'Акрил / гель',

          price: 6.99,

          unit: false,

        },

        {

          name: 'Без дальнейшего покрытия',

          price: 11.65,

          unit: false,

        },

      ]

    },

    {

      name: 'Маникюр',

      item: [

        {

          name: 'Европейский',

          price: 4.99,

          unit: false,

        },

        {

          name: 'Классический',

          price: 9.39,

          unit: false,

        },

        {

          name: 'Комбинированный / аппаратный',

          price: 9.39,

          unit: false,

        },

        {

          name: 'Без дальнейшего покрытия гель-лак',

          price: 16.95,

          unit: false,

        },

        {

          name: 'Детский',

          price: 18.9,

          unit: false,

        },

        {

          name: 'Только форма',

          price: 4.99,

          unit: false,

        }

      ]

    },

    {

      name: 'Покрытие на ручках',

      item: [

        {

          name: 'Лак',

          price: 7.45,

          unit: false,

        },

        {

          name: 'Гель-лак',

          price: 17.55,

          unit: false,

        },

        {

          name: 'Лечебное',

          price: 7.85,

          unit: false,

        },

        {

          name: 'Укрепление гель / акрил',

          price: 17.55,

          unit: false,

        },

        {

          name: 'Укрепление перед покрытием гелем',

          price: 7.99,

          unit: false,

        },

        {

          name: 'Укрепление перед покрытием пудрой',

          price: 5.65,

          unit: false,

        },

        {

          name: 'Ремонт',

          price: 1.25,

          unit: true,

          counter: 10,

        },

      ]

    },

    {

      name: 'Покрытие материалами Luxio',

      item: [

        {

          name: 'Полное покрытие',

          price: 28.95,

          unit: false,

        },

        {

          name: 'Использование только цветника (гель-лака)',

          price: 22.95,

          unit: false,

        },

      ]

    },

    {

      name: 'Педикюр',

      item: [

        {

          name: 'Классический',

          price: 24.75,

          unit: false,

        },

        {

          name: 'Комбинированный',

          price: 24.95,

          unit: false,

        },

        {

          name: 'Гигиенический',

          price: 19.99,

          unit: false,

        },

        {

          name: 'Аппаратный',

          price: 24.95,

          unit: false,

        },

        {

          name: 'Только пальчики',

          price: 18.55,

          unit: false,

        },

        {

          name: 'Обработка стоп',

          price: 13.99,

          unit: false,

        },

        {

          name: 'Детский',

          price: 14.95,

          unit: false,

        },

        {

          name: 'Вросший ноготь',

          price: 7.95,

          unit: true,

          counter: 10,

        },

        {

          name: 'Наращивание ногтя большого пальца',

          price: 5.85,

          unit: true,

          counter: 2,

        },

      ]

    },

    {

      name: 'Покрытиe и снятие на ножках',

      item: [

        {

          name: 'Покрытие лак',

          price: 7.99,

          unit: false,

        },

        {

          name: 'Покрытие гель-лак',

          price: 17.99,

          unit: false,

        },

        {

          name: 'Дизайн',

          price: 1.5,

          unit: true,

          counter: 10,

        },

        {

          name: 'Снятие лак',

          price: 3.99,

          unit: false,

        },

        {

          name: 'Снятие гель-лак',

          price: 6.59,

          unit: false,

        },

      ]

    },

    {

      name: 'Наращивание',

      item: [

        {

          name: 'Гель / акрил + покрытие гель-лак (до 4 длины)',

          price: 39.95,

          unit: false,

        },

        {

          name: 'Гель / акрил + покрытие гель-лак (от 4 длины)',

          price: 44.95,

          unit: false,

        },

        {

          name: 'Коррекция с покрытием гель-лак + снятие',

          price: 35.5,

          unit: false,

        },

        {

          name: 'Наращивание ногтя на руке',

          price: 2.95,

          unit: true,

          counter: 10,

        },

      ]

    },

    {

      name: 'Дизайн (1 ноготь)',

      item: [

        {

          name: 'Простой',

          price: 1.55,

          unit: true,

          counter: 10,

        },

        {

          name: 'Сложный',

          price: 3.65,

          unit: true,

          counter: 10,

        },

        {

          name: 'Художественная роспись',

          price: 5.95,

          unit: true,

          counter: 10,

        },

        {

          name: 'French / лунный',

          price: 0.79,

          unit: true,

          counter: 10,

        },

        {

          name: 'Кошачий',

          price: 3.9,

          unit: false,

        },

        {

          name: 'Омбре',

          price: 1.45,

          unit: true,

          counter: 10,

        },

        {

          name: 'Втирка / фольга / блестки',

          price: 0.79,

          unit: true,

          counter: 10,

        },

      ]

    },

    {

      name: 'SPA',

      item: [

        {

          name: 'Увлажняющие перчатки',

          price: 3.5,

          unit: false,

        },

        {

          name: 'Массаж',

          price: 4.9,

          unit: false,

        },

        {

          name: 'Парафинотерапия',

          price: 7.95,

          unit: false,

        },

        {

          name: 'Уход ног (скраб-маска)',

          price: 7.5,

          unit: false,

        },

      ]

    },

  ]

}