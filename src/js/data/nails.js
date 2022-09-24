const nails = {
  id: 'nails',
  name: 'ногти',
  service: [
    {
      name: 'Снятие покрытия ручки',
      item: [
        {
          name: 'Лак',
          price: 2.79,
          unit: false,
        },
        {
          name: 'Гель-лак',
          price: 4.99,
          unit: false,
        },
        {
          name: 'Акрил / гель',
          price: 6.85,
          unit: false,
        },
        {
          name: 'Без дальнейшего покрытия',
          price: 9.85,
          unit: false,
        },
      ]
    },
    {
      name: 'Маникюр',
      item: [
        {
          name: 'Европейский',
          price: 4.85,
          unit: false,
        },
        {
          name: 'Классический',
          price: 8.95,
          unit: false,
        },
        {
          name: 'Комбинированный / аппаратный',
          price: 8.95,
          unit: false,
        },
        {
          name: 'Без дальнейшего покрытия гель-лак',
          price: 14.95,
          unit: false,
        },
        // {
        //   name: 'Masura (Японский)',
        //   price: 0,
        //   unit: false,
        // },
        {
          name: 'Бразильский',
          price: 9.9,
          unit: false,
        },
        {
          name: 'Детский',
          price: 17.5,
          unit: false,
        },
        {
          name: 'Только форма',
          price: 4.6,
          unit: false,
        }
      ]
    },
    {
      name: 'Покрытие на ручках',
      item: [
        {
          name: 'Лак',
          price: 6.96,
          unit: false,
        },
        {
          name: 'Гель-лак',
          price: 16.6,
          unit: false,
        },
        {
          name: 'Лечебное',
          price: 6.96,
          unit: false,
        },
        {
          name: 'Укрепление гель / акрил',
          price: 10.9,
          unit: false,
        },
        {
          name: 'Укрепление перед покрытием пудрой',
          price: 4.9,
          unit: false,
        },
        {
          name: 'Укрепление перед покрытием гелем',
          price: 7.9,
          unit: false,
        },
        {
          name: 'Ремонт',
          price: 0.95,
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
          price: 27.95,
          unit: false,
        },
        {
          name: 'Укрепление',
          price: 9.55,
          unit: false,
        },
        {
          name: 'Использование только цветника (гель-лака)',
          price: 21.95,
          unit: false,
        },
      ]
    },
    {
      name: 'Педикюр',
      item: [
        {
          name: 'Классический',
          price: 23.45,
          unit: false,
        },
        {
          name: 'Гигиенический',
          price: 19.9,
          unit: false,
        },
        {
          name: 'Аппаратный',
          price: 23.9,
          unit: false,
        },
        {
          name: 'Комбинированный',
          price: 23.9,
          unit: false,
        },
        {
          name: 'Только пальчики',
          price: 17.6,
          unit: false,
        },
        {
          name: 'Обработка стоп',
          price: 12.98,
          unit: false,
        },
        {
          name: 'Детский',
          price: 14.6,
          unit: false,
        },
        {
          name: 'Вросший ноготь',
          price: 7.4,
          unit: true,
          counter: 10,
        },
        {
          name: 'Протезирование ногтя',
          price: 12.9,
          unit: true,
          counter: 10,
        },
        {
          name: 'Наращивание ногтя большого пальца',
          price: 5.5,
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
          price: 7.96,
          unit: false,
        },
        {
          name: 'Покрытие гель-лак',
          price: 16.6,
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
          price: 3.9,
          unit: false,
        },
        {
          name: 'Снятие гель-лак',
          price: 5.99,
          unit: false,
        },
      ]
    },
    {
      name: 'Наращивание',
      item: [
        // {
        //   name: 'Гель / акрил',
        //   price: 0,
        //   unit: false,
        // },
        {
          name: 'Гель / акрил + покрытие гель-лак',
          price: 34.95,
          unit: false,
        },
        // {
        //   name: 'Коррекция',
        //   price: 0,
        //   unit: false,
        // },
        {
          name: 'Коррекция с покрытием гель-лак + снятие',
          price: 31.5,
          unit: false,
        },
        {
          name: 'Наращивание ногтя на руке',
          price: 2.9,
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
          price: 1.5,
          unit: true,
          counter: 10,
        },
        {
          name: 'Сложный',
          price: 3.6,
          unit: true,
          counter: 10,
        },
        {
          name: 'Художественная роспись',
          price: 5.9,
          unit: true,
          counter: 10,
        },
        // {
        //   name: 'Акриловая лепка',
        //   price: 0,
        //   unit: true,
        //   counter: 10,
        // },
        {
          name: 'French / лунный',
          price: 0.79,
          unit: true,
          counter: 10,
        },
        {
          name: 'Кошачий',
          price: 3.9,
          unit: true,
          counter: 10,
        },
        {
          name: 'Омбре',
          price: 1.4,
          unit: true,
          counter: 10,
        },
        {
          name: 'Втирка / фольга / блестки',
          price: 0.79,
          unit: true,
          counter: 10,
        },
        {
          name: 'Стразы (1 шт.)',
          price: 0.15,
          unit: true,
          counter: 500,
        },
        {
          name: 'Царь ноготь',
          price: 5.5,
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
          price: 2.9,
          unit: false,
        },
        {
          name: 'Парафинотерапия',
          price: 7.5,
          unit: false,
        },
        {
          name: 'Уход ног (скраб-маска)',
          price: 5.5,
          unit: false,
        },
      ]
    },
  ]
}