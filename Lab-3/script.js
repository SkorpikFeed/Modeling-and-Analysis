// Функція для генерації полів введення координат векторів
function generateInputs() {
  const dimension = parseInt(document.getElementById("dimension").value);
  const container = document.getElementById("vectorInputs");
  container.innerHTML = "";

  // Перевірка на коректність введеної розмірності
  if (dimension < 1 || dimension > 9) {
    alert("Введіть розмірність від 1 до 9");
    return;
  }

  // Створення полів введення для обох векторів
  ["Перший вектор", "Другий вектор"].forEach((label, vecIndex) => {
    const div = document.createElement("div");
    div.innerHTML = `<i class="d-block mb-2">${label}:</i>`;
    for (let i = 0; i < dimension; i++) {
      div.innerHTML += `<input type="number" class="form-control mb-3" id="v${
        vecIndex + 1
      }_${i}" required placeholder="V${vecIndex + 1}-${i}"/>`;
    }
    container.appendChild(div);
  });
}

// Обробник події відправки форми
document
  .getElementById("vectorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const dimension = parseInt(document.getElementById("dimension").value);
    let v1 = [],
      v2 = [];

    // Зчитування значень векторів
    for (let i = 0; i < dimension; i++) {
      v1.push(parseFloat(document.getElementById(`v1_${i}`).value));
      v2.push(parseFloat(document.getElementById(`v2_${i}`).value));
    }

    // Функція обчислення норми вектора
    const norm = (v) => Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));

    // Обчислення відстані між векторами (Евклідова метрика)
    const distance = Math.sqrt(
      v1.reduce((sum, val, i) => sum + Math.pow(val - v2[i], 2), 0)
    );

    // Обчислення скалярного добутку векторів
    const dotProduct = v1.reduce((sum, val, i) => sum + val * v2[i], 0);

    // Обчислення косинуса кута між векторами
    const cosAngle = dotProduct / (norm(v1) * norm(v2));

    // Обчислення самого кута у градусах
    const angle = Math.acos(cosAngle) * (180 / Math.PI);

    // Відображення результатів
    document.getElementById("distance").innerText = distance.toFixed(2);
    document.getElementById("v1").innerText = norm(v1).toFixed(2);
    document.getElementById("v2").innerText = norm(v2).toFixed(2);
    document.getElementById("angle").innerText = isNaN(angle)
      ? "Неможливо визначити"
      : angle.toFixed(2) + "°";
  });
