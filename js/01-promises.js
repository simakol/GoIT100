/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// проміс - це обʼєкт, який представляє результат асинхронної операції (мікрозадачі)

/*
* Проміс має 3 стани:
- Pending: коли проміс ще не виконався
- Fullfilled: коли проміс виконався успішно
- Rejected: коли проміс виконався не успішно


Ще виділяють таке поняття як Settled (завершений), це не є станом прмоісу, але це поняття використовують для того, щоб описати два стани: або Fullfilled або Rejected
*/

const promise = new Promise((resolve, reject) => {
  // resolve - фукнція, яка переводить проміс у стан Fullfilled
  // reject - фукнція, яка переводить проміс у стан Rejected

  // створення промісу, тобто, наша фукнція executor є абсолютно синхронною операцією

  const canFullfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullfill) {
      resolve(
        "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
      );
    }

    reject("Проміс виконався з помилкою (відхилений, rejected)");
  }, 1000);
});

//.then((res) => ...) - оброблює успішне виконання промісу, завжди повертає проміс, якщо у нас йде ланцюг з методів then, то кожен наступний then отримає в якості результату те, що повернув попердній

// .catch((err) => ...) - оброблює неуспішне виконання промісу (тобто, стан rejected)

// promise
//   .then((res) => {
//     console.log(`Успішна обробка методом then - ${res}`);
//   })
//   .catch((err) => {
//     console.log(`Обробка неуспішного виконання методом catch - ${err}`);
//   })
//   .finally(() => {
//     console.log(
//       "Блок finally виконається в не залежності від того, який стан у промісу!"
//     );
//   });

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

promise
  .then((res) => {
    console.log(`Успішна обробка методом then - ${res}`);
    return 5;
  })
  .then((res) => {
    console.log(`2й then - ${res}`);
    return 10;
  })
  .then((res) => {
    console.log(`3й then - ${res}`);
    return 15;
  })
  .then((res) => {
    console.log(`4й then - ${res}`);
  })
  .catch((err) => {
    console.log(`Обробка неуспішного виконання методом catch - ${err}`);
  })
  .finally(() => {
    console.log(
      "Блок finally виконається в не залежності від того, який стан у промісу!"
    );
  });
