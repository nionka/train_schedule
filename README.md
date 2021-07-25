# Система бронирования ЖД билетов (в разработке)

## Материалы и стек

- Верстка по [макету в Figma](https://www.figma.com/file/7981GjEsjSpBUKolk4xFoT/%D0%97%D0%B0%D0%BA%D0%B0%D0%B7-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2?node-id=0%3A1)
- React
- Redux
- Redux-thunk
- React-router
- TypeScript
- Scss

## Описание проекта
----

### Основные элементы
- Вагон
- Направление
- Группа направлений
- Место (билет)

### Вагон
- Вагон может быть одним из типов: сидячий, люкс (СВ), купе, плацкарт
- У каждого типа вагона своя карта рассадки мест.
- У каждого вагона своя стоимость билетов.
- Для каждого вагона есть возможность выбора дополнительных услуг: бельё, кондиционер и Wi-Fi.
- Для некоторых вагонов стоимость белья включена в стоимость билета (стоимость белья не должна прибавляться при формировании конечной стоимости билета).

### Направление

- Направление - путь движения вагона из одного города в другой.
- Направление предполагает движение поезда только в одну сторону.
- Направление имеет дату отправления и дату прибытия.

### Группа направлений

- Используется для того, чтобы обеспечить возможность путешествия из одного города в другой и обратно.
- Объединяет в себе два направления

### Место (билет)

- Имеет свой номер на карте вагона
- Может быть занято другим пассажиром
- Закреплено за конкретным направлением
