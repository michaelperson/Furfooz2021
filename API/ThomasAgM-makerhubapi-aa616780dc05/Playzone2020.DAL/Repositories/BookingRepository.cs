using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class BookingRepository : BaseRepository
    {
        public BookingRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<Booking> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToReservation();
            }
            _connection.Close();
        }

        public IEnumerable<Booking> Get(int offset, int limit)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking ORDER BY Id OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY;";
            cmd.Parameters.AddWithValue("offset", offset);
            cmd.Parameters.AddWithValue("limit", limit);
            SqlDataReader r = cmd.ExecuteReader();
            Booking result = null;
            while (r.Read())
            {
                yield return r.ToReservation();
            }
            _connection.Close();
        }

        public int GetCount()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT COUNT(*) FROM Booking;";
            SqlDataReader r = cmd.ExecuteReader();
            int result = 0;
            if (r.Read())
            {
                result = (int)r[0];
            }
            _connection.Close();
            return result;
        }

        public Booking Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            Booking result = null;
            if (r.Read())
            {
                result = r.ToReservation();
            }
            _connection.Close();
            return result;
        }

        public Booking GetByReference(string reference)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking WHERE Reference = @reference";
            cmd.Parameters.AddWithValue("reference", reference);
            SqlDataReader r = cmd.ExecuteReader();
            Booking result = null;
            if (r.Read())
            {
                result = r.ToReservation();
            }
            _connection.Close();
            return result;
        }

        public IEnumerable<Booking> GetByMailAdress(string mailAdress)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking WHERE MailAdress = @MailAdress AND IsCheck = @IsCheck";
            cmd.Parameters.AddWithValue("MailAdress", mailAdress);
            cmd.Parameters.AddWithValue("IsCheck", false);
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToReservation();
            }
            _connection.Close();
        }

        public bool CheckById(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = @"UPDATE Booking SET 
                IsCheck = @IsCheck
                WHERE Id = @Id;
            ";

            cmd.Parameters.AddWithValue("Id", id);
            cmd.Parameters.AddWithValue("IsCheck", true);

            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public int GetTotalByDate(string date, int hour, int minute)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT(SUM(NbAdults) + SUM(NbKids) + SUM(NbStudents)) AS Total FROM Booking WHERE[Date] = @date AND [Hour] = @hour AND [Minute] = @minute"; ;
            cmd.Parameters.AddWithValue("date", date);
            cmd.Parameters.AddWithValue("hour", hour);
            cmd.Parameters.AddWithValue("minute", minute);
            int total = (int)cmd.ExecuteScalar();
            //int result = ;
            //if (r.Read())
            //{
            //    result = r.ToReservation();
            //}
            _connection.Close();
            return total;
        }

        public IEnumerable<string> GetHoursByDate(string date)
        {
            _connection.Open();
            
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT CONCAT([Hour], ':', RIGHT( '00' + CONVERT(varchar(2),[Minute]), 2)) AS [Time] FROM Booking WHERE [Date] = @date";
            cmd.Parameters.AddWithValue("date", date);
            SqlDataReader r = cmd.ExecuteReader();

            while (r.Read())
            {
                yield return r["Time"].ToString();
            }

            _connection.Close();
        }

        public IEnumerable<(string, int)> GetHoursByDate2(string date)
        {
            _connection.Open();

            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT CONCAT([Hour], 'h', RIGHT( '00' + CONVERT(varchar(2),[Minute]), 2)) AS [Time],SUM(NbAdults) + SUM(NbKids) + SUM(NbStudents) as Total FROM Booking WHERE [Date] = @date GROUP BY CONCAT([Hour], 'h', RIGHT( '00' + CONVERT(varchar(2),[Minute]), 2))";
            cmd.Parameters.AddWithValue("date", date);
            SqlDataReader r = cmd.ExecuteReader();

            while (r.Read())
            {
                yield return (r["Time"].ToString(), (int)r["Total"]);
            }

            _connection.Close();
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM Booking WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public bool Update(Booking entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = @"UPDATE Booking SET 
                Date = @Date,
                Hour = @Hour,
                Minute = @Minute,
                NbAdults = @NbAdults,
                NbStudents = @NbStudents,
                NbKids = @NbKids,
                CombinedMosan = @CombinedMosan,
                CombinedVeves = @CombinedVeves,
                WantAGuide = @WantAGuide,
                Reference = @Reference,
                Total = @Total,
                MailAdress = @MailAdress,
                IdStripe = @IdStripe,
                PayementType = @PayementType,
                MemberNumber = @MemberNumber,
                SendEmail = @SendEmail
                WHERE Id = @Id;
            ";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Date", entity.Date);
            cmd.Parameters.AddWithValue("Hour", entity.Hour);
            cmd.Parameters.AddWithValue("Minute", entity.Minute);
            cmd.Parameters.AddWithValue("NbAdults", entity.NbAdults);
            cmd.Parameters.AddWithValue("NbStudents", entity.NbStudents);
            cmd.Parameters.AddWithValue("NbKids", entity.NbKids);
            cmd.Parameters.AddWithValue("CombinedMosan", entity.CombinedMosan);
            cmd.Parameters.AddWithValue("CombinedVeves", entity.CombinedVeves);
            cmd.Parameters.AddWithValue("WantAGuide", entity.WantAGuide);
            cmd.Parameters.AddWithValue("Reference", entity.Reference);
            cmd.Parameters.AddWithValue("Total", entity.Total);
            cmd.Parameters.AddWithValue("MailAdress", entity.MailAdress);
            cmd.Parameters.AddWithValue("IdStripe", (object)entity.IdStripe ?? DBNull.Value);
            cmd.Parameters.AddWithValue("PayementType", (object)entity.PayementType ?? DBNull.Value);
            cmd.Parameters.AddWithValue("MemberNumber", entity.MemberNumber);
            cmd.Parameters.AddWithValue("SendEmail", entity.SendEmail);

            bool result =  cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public int Insert(Booking entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO Booking (";

            cmd.CommandText += "Date,";
            cmd.CommandText += "Hour,";
            cmd.CommandText += "Minute,";
            cmd.CommandText += "NbAdults,";
            cmd.CommandText += "NbStudents,";
            cmd.CommandText += "NbKids,";
            cmd.CommandText += "CombinedMosan,";
            cmd.CommandText += "CombinedVeves,";
            cmd.CommandText += "WantAGuide,";
            cmd.CommandText += "Reference,";
            cmd.CommandText += "Total,";
            cmd.CommandText += "IsCheck,";
            cmd.CommandText += "MailAdress,";
            cmd.CommandText += "IdStripe,";
            cmd.CommandText += "PayementType,";
            cmd.CommandText += "MemberNumber";

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@Date,";
            cmd.CommandText += "@Hour,";
            cmd.CommandText += "@Minute,";
            cmd.CommandText += "@NbAdults,";
            cmd.CommandText += "@NbStudents,";
            cmd.CommandText += "@NbKids,";
            cmd.CommandText += "@CombinedMosan,";
            cmd.CommandText += "@CombinedVeves,";
            cmd.CommandText += "@WantAGuide,";
            cmd.CommandText += "@Reference,";
            cmd.CommandText += "@Total,";
            cmd.CommandText += "@IsCheck,";
            cmd.CommandText += "@MailAdress,";
            cmd.CommandText += "@IdStripe,";
            cmd.CommandText += "@PayementType,";
            cmd.CommandText += "@MemberNumber";

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("Date", entity.Date);
            cmd.Parameters.AddWithValue("Hour", entity.Hour);
            cmd.Parameters.AddWithValue("Minute", entity.Minute);
            cmd.Parameters.AddWithValue("NbAdults", entity.NbAdults);
            cmd.Parameters.AddWithValue("NbStudents", entity.NbStudents);
            cmd.Parameters.AddWithValue("NbKids", entity.NbKids);
            cmd.Parameters.AddWithValue("CombinedMosan", entity.CombinedMosan);
            cmd.Parameters.AddWithValue("CombinedVeves", entity.CombinedVeves);
            cmd.Parameters.AddWithValue("WantAGuide", entity.WantAGuide);
            cmd.Parameters.AddWithValue("Reference", entity.Reference);
            cmd.Parameters.AddWithValue("Total", entity.Total);
            cmd.Parameters.AddWithValue("IsCheck", entity.IsCheck);
            cmd.Parameters.AddWithValue("MailAdress", entity.MailAdress);
            cmd.Parameters.AddWithValue("IdStripe", (object)entity.IdStripe ?? DBNull.Value);
            cmd.Parameters.AddWithValue("PayementType", (object)entity.PayementType ?? DBNull.Value);
            cmd.Parameters.AddWithValue("MemberNumber", entity.MemberNumber);

            int result = (int)cmd.ExecuteScalar();
            _connection.Close();
            return result;
        }

        public IEnumerable<Booking> GetBetweenDate(DateTime startDate, DateTime endDate)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Booking WHERE Date BETWEEN @param1 AND @param2";
            cmd.Parameters.AddWithValue("param1", startDate.Date);
            DateTime d = endDate;
            cmd.Parameters.AddWithValue("param2", endDate.Date.AddDays(1).AddMilliseconds(-1));
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToReservation();
            }
            _connection.Close();
        }
    }
}
