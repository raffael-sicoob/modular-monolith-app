type TResultAnnualPremiumAdjust = {
  annualPremium: number;
  remainingValue: number;
  monthlyPremium: number;
};
/**
 * Ajusta o valor do prêmio anual para ser divisível por 12.
 * Se o valor for divisível por 12, retorna o valor original.
 * Caso contrário, adiciona o resto para fazer o valor ser divisível por 12.
 * @param {number} annualPremium O valor do prêmio anual.
 * @returns {Object} Um objeto com as propriedades `annualPremium` e `remainingValue`.
 * `annualPremium` é o valor do prêmio anual ajustado e `remainingValue` é o valor adicionado para fazer o valor ser divisível por 12.
 */

export class CalculatedPremium {
  private readonly _value: number;
  private readonly _monthlyPremium: number;
  private readonly _insurancePremium: number;
  private readonly _remainingValue: number;
  private readonly _cooperativePremium: number;

  constructor(netPremium: number) {
    // decapitalicação
    // aplicar as taxas da corretora e cooperativa
    // tornar o valor divisivel por 12
    // deixar em duas casas decimais

    const { annualPremium, remainingValue, monthlyPremium } =
      this.ensureDivisibleAnnualPremium(netPremium);

    this._value = annualPremium;
    this._monthlyPremium = monthlyPremium;
    this._remainingValue = remainingValue;
    this._insurancePremium = netPremium;
  }

  private ensureDivisibleAnnualPremium(
    annualPremium: number,
  ): TResultAnnualPremiumAdjust {
    annualPremium = +annualPremium.toFixed(2);

    // Verifica se o valor é divisível por 12
    const monthlyValue = annualPremium / 12;
    if (+monthlyValue.toFixed(2) === monthlyValue) {
      return {
        annualPremium,
        remainingValue: 0,
        monthlyPremium: monthlyValue,
      };
    }

    // Se não for divisível por 12, adiciona o resto para ficar divisível
    const remainingValue = (12 - ((annualPremium * 100) % 12)) / 100;

    annualPremium = +(annualPremium + remainingValue).toFixed(2);

    const monthlyPremium = +(annualPremium / 12).toFixed(2);

    return {
      annualPremium,
      remainingValue: +remainingValue.toFixed(2),
      monthlyPremium,
    };
  }

  get value(): number {
    return this._value;
  }

  get insurancePremium(): number {
    return this._insurancePremium;
  }

  get monthlyPremium(): number {
    return this._monthlyPremium;
  }

  get remainingValue(): number {
    return this._remainingValue;
  }
}
