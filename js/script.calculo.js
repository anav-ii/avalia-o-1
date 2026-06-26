// FUNÇÃO CALCULAR PREMIAÇÃO
const calcPremio = (valorReceber) => {

    let premio = 0;

    if (valorReceber <= 1000) {
        premio = 0;
    } else if (valorReceber <= 10000) {
        premio = valorReceber * 0.08;
    } else if (valorReceber <= 15000) {
        premio = valorReceber * 0.10;
    } else if (valorReceber <= 25000) {
        premio = valorReceber * 0.15;
    } else {
        premio = valorReceber * 0.20;
    }

    return premio;
};

export { calcPremio };
