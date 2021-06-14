export interface Event {
    Name: string;
    Latitude: number;
    Longitude: number;
    IsSee: boolean;
    Interval: number;
    AlreadyShown: boolean;
    CurrentPositionDist?: number;
}