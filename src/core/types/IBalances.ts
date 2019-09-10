import { Currency } from 'questrade-api-enumerations';

export interface IBalance {
  currency: Currency;
  cash: number;
  marketValue: number;
  totalEquity: number;
  buyingPower: number;
  maintenanceExcess: number;
  isRealTime: boolean;
}

export interface IBalances {
  perCurrencyBalances: IBalance[];
  combinedBalances: IBalance[];
  sodPerCurrencyBalances: IBalance[];
  sodCombinedBalances: IBalance[];
}