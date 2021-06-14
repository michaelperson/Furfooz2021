using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class PointOfInterestsRepository : BaseRepository
    {
        public PointOfInterestsRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<PointOfInterests> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM PointOfInterests";
            SqlDataReader r = cmd.ExecuteReader();
            while(r.Read())
            {
                yield return r.ToPointOfInterests();
            }
            _connection.Close();
        }

        public PointOfInterests Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM PointOfInterests WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            PointOfInterests result = null;
            if (r.Read())
            {
                result = r.ToPointOfInterests();
            }
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM PointOfInterests WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            return cmd.ExecuteNonQuery() != 1;
        }

        public bool DeletePic(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Plant SET ";
            cmd.CommandText += "Image = null, ";
            cmd.CommandText += "MimeTypeImage = null ";
            cmd.CommandText += "WHERE Id = @Id";
            cmd.Parameters.AddWithValue("Id", id);
            return cmd.ExecuteNonQuery() != 1;
        }

        public bool Update(PointOfInterests entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE PointOfInterests SET ";

            cmd.CommandText += "Name_fr = @Name_fr,";
            cmd.CommandText += "Name_en = @Name_en,";
            cmd.CommandText += "Name_nl = @Name_nl,";

            cmd.CommandText += "Description_fr = @Description_fr,";
            cmd.CommandText += "Description_en = @Description_en,";
            cmd.CommandText += "Description_nl = @Description_nl,";

            cmd.CommandText += "IsDeleted = @IsDeleted,";

            cmd.CommandText += "Category_id = @Category_id,";
            if(entity.Image != null)
            {
                cmd.CommandText += "Image = @Image,";
                cmd.CommandText += "MimeType = @MimeType,";
            }

            cmd.CommandText += "Latitude = @Latitude,";
            cmd.CommandText += "Longitude = @Longitude,";

            cmd.CommandText += "Interval = @Interval,";

            cmd.CommandText += "StartDate = @StartDate,";
            cmd.CommandText += "EndDate = @EndDate, ";
            cmd.CommandText += "Camera_Id = @Camera_Id ";

            cmd.CommandText += "WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);
            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_fr", (object)entity.Description_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_en", (object)entity.Description_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_nl", (object)entity.Description_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("Category_id", entity.Category_id);
            if (entity.Image != null)
            {
                cmd.Parameters.Add(new SqlParameter("Image", (object)entity.Image ?? DBNull.Value) { SqlDbType = SqlDbType.Binary });
                cmd.Parameters.AddWithValue("MimeType", (object)entity.MimeType ?? DBNull.Value);
            }
            cmd.Parameters.AddWithValue("Latitude", (object)entity.Latitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Longitude", (object)entity.Longitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Interval", (object)entity.Interval ?? DBNull.Value);
            cmd.Parameters.AddWithValue("StartDate", (object)entity.StartDate ?? DBNull.Value);
            cmd.Parameters.AddWithValue("EndDate", (object)entity.EndDate ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Camera_Id", (object)entity.Camera_Id ?? DBNull.Value);

            return cmd.ExecuteNonQuery() != 1;
        }

        public int Insert(PointOfInterests entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO PointOfInterests (";

            cmd.CommandText += "Name_fr,";
            cmd.CommandText += "Name_en,";
            cmd.CommandText += "Name_nl,";

            cmd.CommandText += "Description_fr,";
            cmd.CommandText += "Description_en,";
            cmd.CommandText += "Description_nl,";

            cmd.CommandText += "IsDeleted,";

            cmd.CommandText += "Category_id,";

            cmd.CommandText += "Image,";
            cmd.CommandText += "MimeType,";

            cmd.CommandText += "Latitude,";
            cmd.CommandText += "Longitude,";

            cmd.CommandText += "Interval,";

            cmd.CommandText += "StartDate,";
            cmd.CommandText += "EndDate,";
            cmd.CommandText += "Camera_Id";

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@Name_fr,";
            cmd.CommandText += "@Name_en,";
            cmd.CommandText += "@Name_nl,";

            cmd.CommandText += "@Description_fr,";
            cmd.CommandText += "@Description_en,";
            cmd.CommandText += "@Description_nl,";

            cmd.CommandText += "@IsDeleted,";

            cmd.CommandText += "@Category_id,";

            cmd.CommandText += "@Image,";
            cmd.CommandText += "@MimeType,";

            cmd.CommandText += "@Latitude,";
            cmd.CommandText += "@Longitude,";

            cmd.CommandText += "@Interval,";

            cmd.CommandText += "@StartDate,";
            cmd.CommandText += "@EndDate,";
            cmd.CommandText += "@Camera_Id";

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);
            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_fr", (object)entity.Description_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_en", (object)entity.Description_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description_nl", (object)entity.Description_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("Category_id", entity.Category_id);
            cmd.Parameters.AddWithValue("MimeType", (object)entity.MimeType ?? DBNull.Value);
            cmd.Parameters.Add(new SqlParameter("Image", (object)entity.Image ?? DBNull.Value) { SqlDbType = SqlDbType.Binary });
            cmd.Parameters.AddWithValue("Latitude", (object)entity.Latitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Longitude", (object)entity.Longitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Interval", (object)entity.Interval ?? DBNull.Value);
            cmd.Parameters.AddWithValue("StartDate", (object)entity.StartDate ?? DBNull.Value);
            cmd.Parameters.AddWithValue("EndDate", (object)entity.EndDate ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Camera_Id", (object)entity.Camera_Id ?? DBNull.Value);

            return (int)cmd.ExecuteScalar();
        }
    }
}
