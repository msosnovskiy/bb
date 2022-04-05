const nails = {
  id: 'nails',
  name: 'ногти',
  service: [
    {
      name: 'Снятие',
      item: [
        {
          name: 'Лак',
          price: [2.79, 3.5],
          // price: 2.79,
          unit: false,
        },
        {
          name: 'Гель-лак',
          price: 4.99,
          unit: false,
        },
        {
          name: 'Акрил / Гель',
          price: 6.85,
          unit: false,
        },
        {
          name: 'Без дальнейшего покрытия',
          price: 6.85,
          unit: false,
        },
      ]
    },
    {
      name: 'Маникюр',
      item: [
        {
          name: 'Европейский',
          price: 4.35,
          unit: false,
        },
        {
          name: 'Классический',
          price: 7.95,
          unit: false,
        },
        {
          name: 'Комб. / Аппаратный',
          price: 7.95,
          unit: false,
        },
        {
          name: 'Бразильский',
          price: 10.9,
          unit: false,
        },
        {
          name: 'Детский',
          price: 17.5,
          unit: false,
        },
        {
          name: 'Только форма',
          price: 3.6,
          unit: false,
        },
        {
          name: 'Без дальнейшего покрытия',
          price: 12.95,
          unit: false,
        }
      ]
    },
    {
      name: 'Покрытие LUXIO',
      item: [
        {
          name: 'Полное покрытие LUXIO',
          price: 24.95,
          unit: false,
        },
        {
          name: 'Только гель-лак LUXIO',
          price: 19.95,
          unit: false,
        },
        {
          name: 'Укрепление LUXIO',
          price: 9.55,
          unit: false,
        }
      ]
    },
    {
      name: 'Педикюр',
      item: [
        {
          name: 'Классический',
          price: 21.45,
          unit: false,
        },
        {
          name: 'Аппаратный',
          price: 22.46,
          unit: false,
        },
        {
          name: 'Гигиенический',
          price: 18.50,
          unit: false,
        },
        {
          name: 'Только стопа',
          price: 9.98,
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
          name: 'Наращивание ногтя',
          price: 5.5,
          unit: true,
          counter: 10,
        },
        {
          name: 'Только пальчики',
          price: 14.8,
          unit: false,
        },
      ]
    },
    {
      name: 'Покрытие',
      item: [
        {
          name: 'Лак',
          price: 5.96,
          unit: false,
        },
        {
          name: 'Гель-лак',
          price: 15.6,
          unit: false,
        },
        {
          name: 'Лечебное',
          price: 5.8,
          unit: false,
        },
        {
          name: 'Укрепление',
          price: 12.9,
          unit: false,
        },
        {
          name: 'Укрепление перед покр-м',
          price: 5.9,
          unit: false,
        },
        {
          name: 'Ремонт ногтя',
          price: 0.95,
          unit: true,
          counter: 10,
        },
      ]
    },
    {
      name: 'Дизайн',
      item: [
        {
          name: 'Простой',
          price: 1.3,
          unit: true,
          counter: 10,
        },
        {
          name: 'Сложный',
          price: 3.4,
          unit: true,
          counter: 10,
        },
        {
          name: 'Художественная роспись',
          price: 5.5,
          unit: true,
          counter: 10,
        },
        {
          name: 'French / Лунный',
          price: 0.75,
          unit: true,
          counter: 10,
        },
        {
          name: 'Кошачий',
          price: 0.34,
          unit: true,
          counter: 10,
        },
        {
          name: 'Обмре',
          price: 1.4,
          unit: true,
          counter: 10,
        },
        {
          name: 'Втирка / Фольга / Блетски',
          price: 0.75,
          unit: true,
          counter: 10,
        },
        {
          name: 'Стразы (1 шт.)',
          price: 0.15,
          unit: true,
          counter: 10,
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
      name: 'Наращивание',
      item: [
        {
          name: 'Гель / Акрил / Гель-лак',
          price: 32.95,
          unit: false,
        },
        {
          name: 'Коррекция с г-л + снятие',
          price: 29.5,
          unit: false,
        },
        {
          name: 'Наращивание ногтя (1/10)',
          price: 2.9,
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
          name: 'Уход ног (скраб + маска)',
          price: 5.5,
          unit: false,
        },
      ]
    },
  ]
}