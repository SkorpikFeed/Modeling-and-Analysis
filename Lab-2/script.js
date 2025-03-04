// Додаємо обробник події "submit" для форми з ідентифікатором "distanceForm"
document
  .getElementById("distanceForm")
  .addEventListener("submit", function (event) {
    // Обробник події "submit", натискання кнопки
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки при відправленні форми

    // Отримуємо значення координат з полів введення та конвертуємо у числа
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const z1 = parseFloat(document.getElementById("z1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);
    const z2 = parseFloat(document.getElementById("z2").value);

    // Отримуємо вибрану метрику з випадаючого списку
    const metric = document.getElementById("metric").value;

    let distance, v1, v2; // Змінні для збереження результатів обчислення

    // Вибираємо формулу залежно від вибраної метрики
    switch (metric) {
      case "euclidean": // Евклідова метрика
        distance = Math.sqrt(
          Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
        );
        v1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2) + Math.pow(z1, 2));
        v2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2) + Math.pow(z2, 2));
        break;
      case "manhattan": // Манхеттенська метрика
        distance = Math.abs(x2 - x1) + Math.abs(y2 - y1) + Math.abs(z2 - z1);
        v1 = Math.abs(x1) + Math.abs(y1) + Math.abs(z1);
        v2 = Math.abs(x2) + Math.abs(y2) + Math.abs(z2);
        break;
      case "chebyshev": // Чебишева метрика
        distance = Math.max(
          Math.abs(x2 - x1),
          Math.abs(y2 - y1),
          Math.abs(z2 - z1)
        );
        v1 = Math.max(Math.abs(x1), Math.abs(y1), Math.abs(z1));
        v2 = Math.max(Math.abs(x2), Math.abs(y2), Math.abs(z2));
        break;
    }

    // Виводимо результати у відповідні елементи
    document.getElementById("distance").innerText = distance.toFixed(2);
    document.getElementById("v1").innerText = v1.toFixed(2);
    document.getElementById("v2").innerText = v2.toFixed(2);
  });
