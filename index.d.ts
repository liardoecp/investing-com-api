declare module "investing-com-api" {
  interface InvestmentData {
    date: number;
    value: number;
    price_open: number;
    price_high: number;
    price_low: number;
    price_close: number;
  }

  export function investing(
    input: string,
    period?: 'P1D' | 'P1W' | 'P1M' | 'P3M' | 'P6M' | 'P1Y' | 'P5Y' | 'MAX',
    interval?: 'PT1M' | 'PT5M' | 'PT15M' | 'PT30M' | 'PT1H' | 'PT5H' | 'P1D' | 'P1W' | 'P1M',
    pointscount?: 60 | 70 | 120,
    pptrLaunchOptions?: any,
  ): Promise<InvestmentData[]>;

  export function getHistoricalData(
    input: string,
    resolution: '5' | '60' | 'D' | 'W' | 'M',
    from: Date,
    to: Date
  ): Promise<InvestmentData[]>;
}
