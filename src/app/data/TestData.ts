import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Сім\'я'},
    {id: 3, title: 'Навчання'},
    {id: 4, title: 'Відих'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Їжа'},
    {id: 7, title: 'Фінанси'},
    {id: 8, title: 'Гаджети'},
    {id: 9, title: 'Здоров\'я'},
    {id: 10, title: 'Автомобіль'},
    {id: 11, title: 'Ремонт'},
  ];


  static priorities: Priority[] = [
    {id: 1, title: 'Низький', color: '#e5e5e5'},
    {id: 2, title: 'Середній', color: '#85D1B2'},
    {id: 3, title: 'Високий', color: '#F1828D'},
    {id: 4, title: 'Найвищий', color: '#F1128D'}
  ];


  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залити повний бак дизеля',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2019-04-10')
    },

    {
      id: 2,
      title: 'Передати компютер в ремонт',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2019-04-11')
    },

    {
      id: 3,
      title: 'Поприбирати квартиру і обовязково винести смітя',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },

    {
      id: 4,
      title: 'Задати питання в групі по ремонту техніки',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2019-08-17')
    },
    {
      id: 5,
      title: 'Прочитати книгу по оптимізації',
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходити на семінар по Angular',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2019-06-11')
    },

    {
      id: 7,
      title: 'Забронювати білети в готелі. + виїзд з дому',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Приготувати вечерю (Лосось з картоплею по Французьки)',
      completed: false,
      category: TestData.categories[5]
    },
    {
      id: 9,
      title: 'Вибрати новий зарядний пристрій',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-12')
    },
    {
      id: 10,
      title: 'В суботу виїзд в Карпати на велосипедах',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[4]
    },

    {
      id: 11,
      title: 'Поміняти фільтра в машині + не забути про масло',
      completed: false
    },

    {
      id: 12,
      title: 'Піти в центр прогулятися',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 13,
      title: 'Закупитися продуктами в АТБ',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2019-05-11')
    },

    {
      id: 14,
      title: 'Збігати за фотографіями',
      completed: true,
      category: TestData.categories[0]
    },

    {
      id: 15,
      title: 'Вивести старий диван',
      priority: TestData.priorities[2],
      completed: true
    },


    {
      id: 16,
      title: 'Підстригти шерсть в Людвіга і Луни',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 17,
      title: 'Заплатити за комуналку',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[6]
    },

    {
      id: 18,
      title: 'Пройти тести по Англійській',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2020-12-11')

    },

    {
      id: 19,
      title: 'Вибрати новий девайс для тесту',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-10-11')

    },

    {
      id: 20,
      title: 'Піти в басейн',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2019-03-17')

    }

  ];

}
