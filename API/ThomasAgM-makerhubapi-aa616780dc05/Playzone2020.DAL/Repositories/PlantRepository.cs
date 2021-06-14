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
    public class PlantRepository : BaseRepository
    {
        public PlantRepository(SqlConnection connection) : base(connection)
        {
        }
        public IEnumerable<Plant> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM V_PlantSeason";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToPlant();
            }
            _connection.Close();
        }

        public IEnumerable<Plant> Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM V_PlantSeason WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToPlant();
            }
            _connection.Close();
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM Plant WHERE Id = @id";
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

        public bool DeleteAudio(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Plant SET ";
            cmd.CommandText += "Audio = null, ";
            cmd.CommandText += "MimeTypeAudio = null ";
            cmd.CommandText += "WHERE Id = @Id";
            cmd.Parameters.AddWithValue("Id", id);
            return cmd.ExecuteNonQuery() != 1;
        }

        public bool Update(Plant entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Plant SET ";

            cmd.CommandText += "Name_fr = @Name_fr,";
            cmd.CommandText += "Name_en = @Name_en,";
            cmd.CommandText += "Name_nl = @Name_nl,";
            cmd.CommandText += "Name_la = @Name_la,";

            cmd.CommandText += "Description1_fr = @Description1_fr,";
            cmd.CommandText += "Description1_en = @Description1_en,";
            cmd.CommandText += "Description1_nl = @Description1_nl,";

            cmd.CommandText += "Description2_fr = @Description2_fr,";
            cmd.CommandText += "Description2_en = @Description2_en,";
            cmd.CommandText += "Description2_nl = @Description2_nl,";

            cmd.CommandText += "Description3_fr = @Description3_fr,";
            cmd.CommandText += "Description3_en = @Description3_en,";
            cmd.CommandText += "Description3_nl = @Description3_nl,";

            cmd.CommandText += "IsDeleted = @IsDeleted,";

            cmd.CommandText += "CategoryPlant_id = @CategoryPlant_id,";
            if (entity.Image != null)
            {
                cmd.CommandText += "Image = @Image,";
                cmd.CommandText += "MimeTypeImage = @MimeTypeImage,";
            }
            cmd.CommandText += "Latitude = @Latitude,";
            cmd.CommandText += "Longitude = @Longitude";

            cmd.CommandText += " WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);
            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_la", (object)entity.Name_la ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description1_fr", (object)entity.Description1_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description1_en", (object)entity.Description1_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description1_nl", (object)entity.Description1_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("Description2_fr", (object)entity.Description2_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description2_en", (object)entity.Description2_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description2_nl", (object)entity.Description2_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("Description3_fr", (object)entity.Description3_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description3_en", (object)entity.Description3_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description3_nl", (object)entity.Description3_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("CategoryPlant_id", entity.CategoryPlant_id);
            if (entity.Image != null)
            {
                cmd.Parameters.Add(new SqlParameter("Image", (object)entity.Image ?? DBNull.Value) { SqlDbType = SqlDbType.Binary });
                cmd.Parameters.AddWithValue("MimeTypeImage", (object)entity.MimeTypeImage ?? DBNull.Value);
            }
            cmd.Parameters.AddWithValue("Latitude", (object)entity.Latitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Longitude", (object)entity.Longitude ?? DBNull.Value);

            return cmd.ExecuteNonQuery() != 1;
        }

        public int Insert(Plant entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO Plant (";

            cmd.CommandText += "Name_fr,";
            cmd.CommandText += "Name_en,";
            cmd.CommandText += "Name_nl,";
            cmd.CommandText += "Name_la,";

            cmd.CommandText += "Description1_fr,";
            cmd.CommandText += "Description1_en,";
            cmd.CommandText += "Description1_nl,";

            cmd.CommandText += "Description2_fr,";
            cmd.CommandText += "Description2_en,";
            cmd.CommandText += "Description2_nl,";

            cmd.CommandText += "Description3_fr,";
            cmd.CommandText += "Description3_en,";
            cmd.CommandText += "Description3_nl,";

            cmd.CommandText += "IsDeleted,";

            cmd.CommandText += "CategoryPlant_id,";

            cmd.CommandText += "Image,"; 
            cmd.CommandText += "MimeTypeImage,"; 

            cmd.CommandText += "Latitude,";
            cmd.CommandText += "Longitude";
             

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@Name_fr,";
            cmd.CommandText += "@Name_en,";
            cmd.CommandText += "@Name_nl,";
            cmd.CommandText += "@Name_la,";

            cmd.CommandText += "@Description1_fr,";
            cmd.CommandText += "@Description1_en,";
            cmd.CommandText += "@Description1_nl,";

            cmd.CommandText += "@Description2_fr,";
            cmd.CommandText += "@Description2_en,";
            cmd.CommandText += "@Description2_nl,";

            cmd.CommandText += "@Description3_fr,";
            cmd.CommandText += "@Description3_en,";
            cmd.CommandText += "@Description3_nl,";

            cmd.CommandText += "@IsDeleted,";

            cmd.CommandText += "@CategoryPlant_id,";

            cmd.CommandText += "@Image,"; 
            cmd.CommandText += "@MimeTypeImage,"; 

            cmd.CommandText += "@Latitude,";
            cmd.CommandText += "@Longitude";
             

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);

            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_la", (object)entity.Name_la ?? DBNull.Value);

            cmd.Parameters.AddWithValue("Description1_fr", (object)entity.Description1_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description1_en", (object)entity.Description1_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description1_nl", (object)entity.Description1_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("Description2_fr", (object)entity.Description2_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description2_en", (object)entity.Description2_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description2_nl", (object)entity.Description2_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("Description3_fr", (object)entity.Description3_fr ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description3_en", (object)entity.Description3_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Description3_nl", (object)entity.Description3_nl ?? DBNull.Value);

            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("CategoryPlant_id", entity.CategoryPlant_id);

            cmd.Parameters.AddWithValue("MimeTypeImage", (object)entity.MimeTypeImage ?? DBNull.Value);
            cmd.Parameters.Add(new SqlParameter("Image", (object)entity.Image ?? DBNull.Value) { SqlDbType = SqlDbType.Binary });


            cmd.Parameters.AddWithValue("Latitude", (object)entity.Latitude ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Longitude", (object)entity.Longitude ?? DBNull.Value);


            return (int)cmd.ExecuteScalar();
        }
    }
}
