using Playzone2020.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Mappers
{
    static class ReaderToEntityExtensions
    {
        public static PointOfInterests ToPointOfInterests(this SqlDataReader r)
        {
            return new PointOfInterests
            {
                Id = (int)r["Id"],
                Name_fr = (string)r["Name_fr"],
                Name_en = r["Name_en"] as string,
                Name_nl = r["Name_nl"] as string,
                Description_fr = r["Description_fr"] as string,
                Description_en = r["Description_en"] as string,
                Description_nl = r["Description_nl"] as string,
                //IsDeleted = !Convert.IsDBNull(r["IsDeleted"]) ? (bool?)r["IsDeleted"] : null, 
                IsDeleted = r["IsDeleted"] != DBNull.Value ? (bool?)r["IsDeleted"] : false,
                
                Category_id = (int)r["Category_id"],
                Image = r["Image"] as byte[],
                MimeType = r["MimeType"] as string,
                Latitude = r["Latitude"] as double?,
                Longitude = r["Longitude"] as double?,
                Interval = r["Interval"] as double?,
                StartDate = r["StartDate"] as DateTime?,
                EndDate = r["EndDate"] as DateTime?,
                Camera_Id = r["Camera_Id"] as int?
            };
        }

        public static Category ToCategory(this SqlDataReader r)
        {
            return new Category
            {
                Id = (int)r["Id"],
                Name_fr = (string)r["Name_fr"],
                Name_en = r["Name_en"] as string,
                Name_nl = r["Name_nl"] as string,
                IsDeleted = (bool)r["IsDeleted"],
                PinColor = (string)r["PinColor"]
            };
        }

        public static Plant ToPlant(this SqlDataReader r)
        {
            return new Plant
            {
                Id = (int)r["Id"],

                Name_fr = (string)r["Name_fr"],
                Name_en = r["Name_en"] as string,
                Name_nl = r["Name_nl"] as string,
                Name_la = r["Name_la"] as string,

                Description1_fr = r["Description1_fr"] as string,
                Description1_en = r["Description1_en"] as string,
                Description1_nl = r["Description1_nl"] as string,

                Description2_fr = r["Description2_fr"] as string,
                Description2_en = r["Description2_en"] as string,
                Description2_nl = r["Description2_nl"] as string,

                Description3_fr = r["Description3_fr"] as string,
                Description3_en = r["Description3_en"] as string,
                Description3_nl = r["Description3_nl"] as string,

                IsDeleted = (bool)r["IsDeleted"],
                CategoryPlant_id = (int)r["CategoryPlant_id"],
                
                Image = r["Image"] as byte[],

                Seasons = (int)r["Seasons"],
                MimeTypeImage = r["mimeTypeImage"] as string,

                Latitude = r["Latitude"] as double?,
                Longitude = r["Longitude"] as double?,
                //Audio = r["Audio"] as byte[],
                //MimeTypeAudio = r["mimeTypeAudio"] as string,
                //Interval = r["Interval"] as double?,
                //StartDate = r["StartDate"] as DateTime?,
                //EndDate = r["EndDate"] as DateTime?
            };
        }

        public static CategoryPlant ToCategoryPlant(this SqlDataReader r)
        {
            return new CategoryPlant
            {
                Id = (int)r["Id"],
                Name = (string)r["Name"]
            };
        }

        public static SeasonsOfPlants ToSeasonOfPlants(this SqlDataReader r)
        {
            return new SeasonsOfPlants
            {
                Seasons = (int)r["Seasons"],
            };
        }
        public static Tariff ToTariff(this SqlDataReader r)
        {
            return new Tariff
            {
                Id = (int)r["Id"],
                TicketType = (string)r["TicketType"],
                FurfoozPrice = (double)r["FurfoozPrice"],
                FurfoozReducedPrice = (double)r["FurfoozReducedPrice"],
                VevesPrice = (double)r["VevesPrice"],
                VevesReducedPrice = (double)r["VevesReducedPrice"],
                MosanPrice = (double)r["MosanPrice"],
                MosanReducedPrice = (double)r["MosanReducedPrice"]
            };
        }

        public static Parameter ToParameter(this SqlDataReader r)
        {
            return new Parameter
            {
                Id = (int)r["Id"],
                ParameterName = (string)r["ParameterName"],
                Value = (string)r["Value"]
            };
        }
        public static Booking ToReservation(this SqlDataReader r)
        {
            return new Booking
            {
                Id = (int)r["Id"],
                Date = (DateTime)r["Date"],
                Hour = (int)r["Hour"],
                Minute = (int)r["Minute"],
                NbAdults = (int)r["NbAdults"],
                NbStudents = (int)r["NbStudents"],
                NbKids = (int)r["NbKids"],
                CombinedMosan = (bool)r["CombinedMosan"],
                CombinedVeves = (bool)r["CombinedVeves"],
                WantAGuide = (bool)r["WantAGuide"],
                Reference = (string)r["Reference"],
                Total = (decimal)r["Total"],
                IsCheck = r["IsCheck"] != DBNull.Value ? (bool)r["IsCheck"] : false,
                MailAdress = r["MailAdress"] as string,
                IdStripe = r["IdStripe"] as string,
                PayementType = r["PayementType"] as string,
                MemberNumber = (int)r["MemberNumber"]
            };
        }

        public static Cameras ToCameras(this SqlDataReader r)
        {
            return new Cameras
            {
                Id = (int)r["Id"],
                Nom_Fr = (string)r["Nom_Fr"],
                Nom_En = r["Nom_En"] as string,
                Nom_Nl = r["Nom_Nl"] as string,
                Emplacement = (string)r["Emplacement"],
                EstActif = (bool)r["EstActif"],
                LienImg = (string)r["LienImg"]

            };
        }
        public static ClipVideo ToClipVideo(this SqlDataReader r)
        {
            return new ClipVideo
            {
                Id = (int)r["Id"],
                Lien = (string)r["Lien"],
                Nom_Fr = (string)r["Nom_Fr"],
                Nom_Nl = r["Nom_Nl"] as string,
                Nom_En = r["Nom_En"] as string,
                Detail = (string)r["Detail"],
                EstAffiche = (bool)r["EstAffiche"],
                Camera_Id = (int)r["Camera_Id"],
                LienImg=(string)r["LienImg"]
            };
        }
    }
}
