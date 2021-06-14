export interface BookingStatsModel {
    periodicity: string;
    year: number;
    month?: number;
    day?: number;
    weekOfYear?: number;
    amount: number;
    affluence: number;
    ticketCount: number;
    label: string;
}