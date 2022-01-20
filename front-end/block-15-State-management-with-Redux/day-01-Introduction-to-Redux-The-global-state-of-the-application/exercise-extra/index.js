const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = (number) => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
  return {
    type: INCREMENTO,
    number,
  }
};

const actionDecremento = (number) => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
  return {
    type: DECREMENTO,
    number,
  }
};
// ========== REDUCER ==========
const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  /*      switch (action.type) {
         case INCREMENTO:
           return { value: state.value + action.number };
           case DECREMENTO:
           return { value: state.value - action.number };
         default:
           return state;
       } */

  // OU...

  const values = {
    INCREMENTO: { value: state.value + action.number },
    DECREMENTO: { value: state.value - action.number },
  }
  return values[action.type]
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter.value);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", () => store.dispatch(actionIncremento(10)));
btnDec.addEventListener("click", () => store.dispatch(actionDecremento(5)));