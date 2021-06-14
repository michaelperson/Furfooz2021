using Playzone2020.API.Dto.Category;
using Playzone2020.API.Dto.CategoryPlant;
using Playzone2020.API.Dto.Plants;
using Playzone2020.API.Dto.PointOfInterests;
using Playzone2020.API.Dto.Reservation;
using Playzone2020.API.Dto.Tariff;
using Playzone2020.API.Dto.Nichoir;
using Playzone2020.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Playzone2020.API.Dto.Parameter;
using System.Globalization;

namespace Playzone2020.API.Mappers
{
    public static class MapperExtensions
    {
        public static CategoryDto ToDto(this Category entity)
        {
            return new CategoryDto
            {
                Id = entity.Id,
                Name_fr = entity.Name_fr,
                Name_en = entity.Name_en,
                Name_nl = entity.Name_nl,
                IsDeleted = entity.IsDeleted,
                PinColor = entity.PinColor
            };
        }

        public static Category ToEntity(this CategoryFormDto dto)
        {
            return new Category
            {
                Id = dto.Id,
                Name_fr = dto.Name_fr,
                Name_en = dto.Name_en,
                Name_nl = dto.Name_nl,
                IsDeleted = dto.IsDeleted,
                PinColor = dto.PinColor
            };
        }

        public static PointOfInterestsDto ToDto(this PointOfInterests entity)
        {
            return new PointOfInterestsDto
            {
                Id = entity.Id,
                Name_fr = entity.Name_fr,
                Name_en = entity.Name_en,
                Name_nl = entity.Name_nl,
                Description_fr = entity.Description_fr,
                Description_en = entity.Description_en,
                Description_nl = entity.Description_nl,
                Category_id = entity.Category_id,
                IsDeleted = (entity.IsDeleted),
                EndDate = entity.EndDate,
                StartDate = entity.StartDate,
                ImageUrl = (entity.Image != null) ? "pointinteret/image/" + entity.Id : null,
                Interval = entity.Interval,
                Latitude = entity.Latitude,
                Longitude = entity.Longitude,
                Camera_Id = entity.Camera_Id
            };
        }

        public static PointOfInterests ToEntity(this PointOfInterestsFormDto dto)
        {
            return new PointOfInterests
            {
                Id = dto.Id,
                Name_fr = dto.Name_fr,
                Name_en = dto.Name_en,
                Name_nl = dto.Name_nl,
                IsDeleted = dto.IsDeleted,
                Description_fr = dto.Description_fr,
                Description_en = dto.Description_en,
                Description_nl = dto.Description_nl,
                Category_id = dto.Category_id,
                Image = dto.Image,
                MimeType = dto.MimeType,
                Interval = dto.Interval,
                Latitude = dto.Latitude,
                Longitude = dto.Longitude,
                EndDate = dto.EndDate,
                StartDate = dto.StartDate,
                Camera_Id = dto.Camera_Id
            };
        }

        //private static int GetSeason(DateTime date)
        //{
        //    float value = (float)date.Month + (float)date.Day / 100;   // <month>.<day(2 digit)>
        //    if (value < 3.21 || value >= 12.22) return 0;   // Winter
        //    if (value < 6.21) return 1; // Spring
        //    if (value < 9.23) return 2; // Summer
        //    return 3;   // Autumn
        //}
        public static PlantDto ToDto(this Plant entity)
        {
            //if(entity.StartDate == null || entity.EndDate == null)
            //{
            //    Seasons.Add(0);
            //    Seasons.Add(1);
            //    Seasons.Add(2);
            //    Seasons.Add(3);
            //}
            //else
            //{
            //    if (GetSeason((DateTime)entity.StartDate) == 0)
            //    {
            //        Seasons.Add(0);
            //        int endSeason = GetSeason((DateTime)entity.EndDate);
            //        for (int i = 1; i <= endSeason; i++)
            //        {
            //            Seasons.Add(i);
            //        }
            //    }
            //    if (GetSeason((DateTime)entity.StartDate) == 1)
            //    {
            //        Seasons.Add(1);
            //        int endSeason = GetSeason((DateTime)entity.EndDate);
            //        for (int i = 2; i <= endSeason; i++)
            //        {
            //            Seasons.Add(i);
            //        }
            //        if(endSeason == 0)
            //        {
            //            Seasons.Add(2);
            //            Seasons.Add(3);
            //            Seasons.Add(0);
            //        }
            //    }
            //    if (GetSeason((DateTime)entity.StartDate) == 2)
            //    {
            //        Seasons.Add(2);
            //        int endSeason = GetSeason((DateTime)entity.EndDate);
            //        for (int i = 3; i <= endSeason; i++)
            //        {
            //            Seasons.Add(i);
            //        }
            //        if (endSeason == 0)
            //        {
            //            Seasons.Add(3);
            //            Seasons.Add(0);
            //        }
            //        if (endSeason == 1)
            //        {
            //            Seasons.Add(3);
            //            Seasons.Add(0);
            //            Seasons.Add(1);
            //        }
            //    }
            //    if(GetSeason((DateTime)entity.StartDate) == 3)
            //    {
            //        int endSeason = GetSeason((DateTime)entity.EndDate);
            //        Seasons.Add(3);
            //        if (endSeason == 0)
            //        {
            //            Seasons.Add(0);
            //        }
            //        if (endSeason == 1)
            //        {
            //            Seasons.Add(1);
            //            Seasons.Add(0);
            //        }
            //        if (endSeason == 2)
            //        {
            //            Seasons.Add(1);
            //            Seasons.Add(2);
            //            Seasons.Add(0);
            //        }
            //    }
            //}


            PlantDto temp = new PlantDto
            {
                Id = entity.Id,
                Name_fr = entity.Name_fr,
                Name_en = entity.Name_en,
                Name_nl = entity.Name_nl,
                Name_la = entity.Name_la,

                Description1_fr = entity.Description1_fr,
                Description1_en = entity.Description1_en,
                Description1_nl = entity.Description1_nl,

                Description2_fr = entity.Description2_fr,
                Description2_en = entity.Description2_en,
                Description2_nl = entity.Description2_nl,

                Description3_fr = entity.Description3_fr,
                Description3_en = entity.Description3_en,
                Description3_nl = entity.Description3_nl,

                CategoryPlant_id = entity.CategoryPlant_id,

                IsDeleted = entity.IsDeleted,
                ImageUrl = (entity.Image != null) ? "plant/image/" + entity.Id : null,
                Latitude = entity.Latitude,
                Longitude = entity.Longitude

                //EndDate = entity.EndDate,
                //StartDate = entity.StartDate,
                //AudioUrl = (entity.Audio != null) ? "plant/audio/" + entity.Id : null,
                //Interval = entity.Interval,
                };

            if(temp.Seasons==null)
            {
                temp.Seasons = new List<int>();
            }
            return temp;
        }

        public static Plant ToEntity(this PlantDto dto)
        {
            return new Plant
            {
                Id = dto.Id,
                Name_fr = dto.Name_fr,
                Name_en = dto.Name_en,
                Name_nl = dto.Name_nl,
                Name_la = dto.Name_la,

                IsDeleted = dto.IsDeleted,

                Description1_fr = dto.Description1_fr,
                Description1_en = dto.Description1_en,
                Description1_nl = dto.Description1_nl,

                Description2_fr = dto.Description2_fr,
                Description2_en = dto.Description2_en,
                Description2_nl = dto.Description2_nl,

                Description3_fr = dto.Description3_fr,
                Description3_en = dto.Description3_en,
                Description3_nl = dto.Description3_nl,

                CategoryPlant_id = dto.CategoryPlant_id,

                Image = dto.Image,

                MimeTypeImage = dto.MimeTypeImage,

                Latitude = dto.Latitude,
                Longitude = dto.Longitude,
                //MimeTypeAudio = dto.MimeTypeAudio,
                // Interval = dto.Interval,
                // Audio = dto.Audio,
                //EndDate = dto.EndDate,
                //StartDate = dto.StartDate
            };
        }

        public static CategoryPlantDto ToDto(this CategoryPlant entity)
        {
            return new CategoryPlantDto
            {
                Id = entity.Id,
                Name = entity.Name,
            };
        }

        public static CategoryPlant ToEntity(this CategoryPlantDto dto)
        {
            return new CategoryPlant
            {
                Id = dto.Id,
                Name = dto.Name,
            };
        }

        public static TariffDto ToDto(this Tariff entity)
        {
            return new TariffDto
            {
                Id = entity.Id,
                TicketType = entity.TicketType,
                FurfoozPrice = entity.FurfoozPrice,
                FurfoozReducedPrice = entity.FurfoozReducedPrice,
                VevesPrice = entity.VevesPrice,
                VevesReducedPrice = entity.VevesReducedPrice,
                MosanPrice = entity.MosanPrice,
                MosanReducedPrice = entity.MosanReducedPrice
            };
        }

        public static Tariff ToEntity(this TariffFormDto dto)
        {
            return new Tariff
            {
                Id = dto.Id,
                TicketType = dto.TicketType,
                FurfoozPrice = dto.FurfoozPrice,
                FurfoozReducedPrice = dto.FurfoozReducedPrice,
                VevesPrice = dto.VevesPrice,
                VevesReducedPrice = dto.VevesReducedPrice,
                MosanPrice = dto.MosanPrice,
                MosanReducedPrice = dto.MosanReducedPrice
            };
        }

        public static ParameterDto ToDto(this Parameter entity)
        {
            return new ParameterDto
            {
                Id = entity.Id,
                ParameterName = entity.ParameterName,
                Value = entity.Value
            };
        }

        public static Parameter ToEntity(this ParameterFormDto dto)
        {
            return new Parameter
            {
                Id = dto.Id,
                ParameterName = dto.ParameterName,
                Value = dto.Value
            };
        }

        public static BookingDto ToDto(this Booking entity)
        {
            return new BookingDto
            {
                Id = entity.Id,
                Date = entity.Date,
                Hour = entity.Hour,
                Minute = entity.Minute,
                NbAdults = entity.NbAdults,
                NbStudents = entity.NbStudents,
                NbKids = entity.NbKids,
                CombinedMosan = entity.CombinedMosan,
                CombinedVeves = entity.CombinedVeves,
                WantAGuide = entity.WantAGuide,
                Reference = entity.Reference,
                Total = entity.Total,
                IsCheck = entity.IsCheck,
                Payed = entity.IdStripe == null,
                MailAdress = entity.MailAdress,
                IdStripe = entity.IdStripe,
                PayementType = entity.PayementType,
                MemberNumber = entity.MemberNumber,
                SendEmail = entity.SendEmail
            };
        }

        public static Booking ToEntity(this BookingFormDto dto)
        {
            return new Booking
            {
                Id = dto.Id,
                Date = dto.Date,
                Hour = dto.Hour,
                Minute = dto.Minute,
                NbAdults = dto.NbAdults,
                NbStudents = dto.NbStudents,
                NbKids = dto.NbKids,
                CombinedMosan = dto.CombinedMosan,
                CombinedVeves = dto.CombinedVeves,
                WantAGuide = dto.WantAGuide,
                Reference = dto.Reference,
                Total = dto.Total,
                IsCheck = dto.IsCheck,
                MailAdress = dto.MailAdress,
                IdStripe = dto.IdStripe,
                PayementType = dto.PayementType,
                MemberNumber = dto.MemberNumber,
                SendEmail = dto.SendEmail
            };
        }
        public static CamerasDto ToDto(this Cameras entity)
        {
            return new CamerasDto
            {
                Id = entity.Id,
                Nom_Fr = entity.Nom_Fr,
                Nom_Nl = entity.Nom_Nl,
                Nom_En = entity.Nom_En,
                Emplacement = entity.Emplacement,
                EstActif = entity.EstActif,

                LienImg = entity.LienImg

            };
        }

        public static Cameras ToEntity(this CamerasFormDto dto)
        {
            return new Cameras
            {
                Id = dto.Id,
                Nom_Fr = dto.Nom_Fr,
                Nom_En = dto.Nom_En,
                Nom_Nl = dto.Nom_Nl,
                Emplacement = dto.Emplacement,
                EstActif = dto.EstActif,

                LienImg = dto.LienImg
            };
        }


        public static ClipVideoDto ToDto(this ClipVideo entity)
        {
            return new ClipVideoDto
            {
                Id = entity.Id,
                Lien=entity.Lien,
                Nom_Fr = entity.Nom_Fr,
                Nom_En = entity.Nom_En,
                Nom_Nl = entity.Nom_Nl,
                Detail = entity.Detail,
                EstAffiche=entity.EstAffiche,
                Camera_Id = entity.Camera_Id,
                LienImg=entity.LienImg
            };
        }

        public static ClipVideo ToEntity(this ClipVideoFormDto dto)
        {
            return new ClipVideo
            {
                Id = dto.Id,
                Lien = dto.Lien,
                Nom_Fr = dto.Nom_Fr,
                Nom_En = dto.Nom_En,
                Nom_Nl = dto.Nom_Nl,
                Detail = dto.Detail,
                EstAffiche = dto.EstAffiche,
                Camera_Id = dto.Camera_Id,
                LienImg=dto.LienImg
            };
        }

        public static IEnumerable<BookingStatDto> ToStatDto(this IEnumerable<Booking> list, string periodicity)
        {
            if(periodicity == "daily")
            {
                return list.Where(x => x.PayementType == "stripe" || x.PayementType == null)
                    .GroupBy(x => x.Date.Date)
                    .Select(x => new BookingStatDto {
                        Periodicity = periodicity,
                        Year = x.Key.Year,
                        Month = x.Key.Month,
                        Day = x.Key.Day,
                        Affluence = x.Sum(y => y.NbAdults + y.NbKids + y.NbStudents),
                        Amount = (double)x.Sum(y => y.Total),
                        TicketCount = x.Count(),
                        Label = $"{x.Key.Day}/{x.Key.Month}/{x.Key.Year}"
                    }).OrderBy(x => x.Year).ThenBy(x => x.Month).ThenBy(x => x.Day);
            }
            else if (periodicity == "weekly")
            {
                return list.Where(x => x.PayementType == "stripe" || x.PayementType == null)
                    .GroupBy(x => (x.Date.Year, WeekOfYear: CultureInfo.CurrentCulture.Calendar.GetWeekOfYear(
                        x.Date, CalendarWeekRule.FirstDay, DayOfWeek.Monday
                    )))
                    .Select(x => new BookingStatDto
                    {
                        Periodicity = periodicity,
                        Year = x.Key.Year,
                        WeekOfYear = x.Key.WeekOfYear,
                        Affluence = x.Sum(y => y.NbAdults + y.NbKids + y.NbStudents),
                        Amount = (double)x.Sum(y => y.Total),
                        TicketCount = x.Count(),
                        Label = $"{x.Key.Year} - {x.Key.WeekOfYear}"
                    }).OrderBy(x => x.Year).ThenBy(x => x.WeekOfYear);
            }
            else if (periodicity == "monthly")
            {
                return list.Where(x => x.PayementType == "stripe" || x.PayementType == null)
                    .GroupBy(x => (x.Date.Year, x.Date.Month))
                    .Select(x => new BookingStatDto
                    {
                        Periodicity = periodicity,
                        Year = x.Key.Year,
                        Month = x.Key.Month,
                        Affluence = x.Sum(y => y.NbAdults + y.NbKids + y.NbStudents),
                        Amount = (double)x.Sum(y => y.Total),
                        TicketCount = x.Count(),
                        Label = $"{x.Key.Month}/{x.Key.Year}"
                    }).OrderBy(x => x.Year).ThenBy(x => x.Month);
            }
            else
            {
                throw new ArgumentException("Bad Periodicity");
            }
        }
    }
}
