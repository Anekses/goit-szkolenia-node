const getSome = (first) => {
  return first + 5;
};

const getValue = () => {
  return localStorage.getItem("storedValue");
};

export const divide = (first, second, isMulti = false) => {
  // const getSomeValue = getSome(first)

  if (isMulti) {
    return getSomeValue * second;
  }

  // if (isMulti) {
  //   return getSomeValue * second * getValue();
  // }

  if (first === 0) {
    return "lol";
  }

  if (second === 0) {
    return "You cannot";
  }

  return first / second;
};

// tests
// 1. Dwie liczby dodatnie, np 8 i 4 powinny dać 2
// expect(divide(8, 4)).toBe(2)
// 2. Nie dzielimy przez 0, np 8 i 0 powinno dać 'You cannot'
// getValue = () => 1

//Sprawdź ile razy getValue zostało wykonane dla parametrów (8, 4)

// 3. Jak 0 jest pierwszą liczbą to zwróć 'lol'
// 4. Jeśli 3 argument to "true" zwróć mnożenie zamiast dzielenia
// np 7, 4, true -> 28
