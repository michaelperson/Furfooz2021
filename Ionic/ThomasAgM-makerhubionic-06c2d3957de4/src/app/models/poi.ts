export interface poiObject {
    Id: number;
    Name_fr: string;
    Name_nl?: string;
    Name_en?: string;
    Image?: any;
    mimeType : string;
    Description_fr?: string;
    Description_en?: string;
    Description_nl?: string;
    Latitude?: number;
    Longitude?: number;
    StartDate?: any;
    EndDate?: any;
    Interval?: number;
    IsDeleted: boolean;
    Category_id?: number;
    IsSeen:boolean;
    AlreadyShown:boolean;
    CurrentPositionDist?: number;
    Camera_Id?: number;
    isSaved?: boolean;
    ImageUrl?: string;
    DisplayClass?: string;
    CameraIsActive?: boolean;
    
}