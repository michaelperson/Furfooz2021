export interface PointOfInterestsModel {
    Id: number;
    Name_fr: string;
    Name_en: string;
    Name_nl: string;
    Description_fr: string;
    Description_en: string;
    Description_nl: string;
    IsDeleted: boolean;
    Category_id: number;
    Image: any;
    mimeType: string;
    Latitude: number;
    Longitude: number;
    Interval: number;
    StartDate: Date;
    EndDate: Date;
    ImageUrl: string;
    Camera_Id:string;
}