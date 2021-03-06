export interface BookingModel {​​
    Id: number,
    Date: string,
    Hour: number,
    Minute: number,
    NbAdults: number,
    NbStudents: number,
    NbKids: number,
    CombinedVeves: boolean,
    CombinedMosan: boolean,
    WantAGuide: boolean,
    Reference: string,
    Total: number,
    IsCheck: boolean,
    Payed: boolean,
    MailAdress: string,
    IdStripe: string,
    PayementType: string,
    MemberNumber: number,
    SendMail: boolean
}
