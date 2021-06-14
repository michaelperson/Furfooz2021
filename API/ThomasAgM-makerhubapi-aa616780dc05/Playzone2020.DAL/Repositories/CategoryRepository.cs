using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class CategoryRepository : BaseRepository
    {
        public CategoryRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<Category> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Category";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToCategory();
            }
            _connection.Close();
        }

        public Category Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Category WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            Category result = null;
            if (r.Read())
            {
                result = r.ToCategory();
            }
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM Category WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            return cmd.ExecuteNonQuery() != 1;
        }

        public bool Update(Category entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Category SET ";

            cmd.CommandText += "Name_fr = @Name_fr,";
            cmd.CommandText += "Name_en = @Name_en,";
            cmd.CommandText += "Name_nl = @Name_nl,";

            cmd.CommandText += "IsDeleted = @IsDeleted,";

            cmd.CommandText += "PinColor = @PinColor ";

            cmd.CommandText += "WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);
            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("PinColor", (object)entity.PinColor ?? DBNull.Value);

            return cmd.ExecuteNonQuery() != 1;
        }

        public int Insert(Category entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO Category (";

            cmd.CommandText += "Name_fr,";
            cmd.CommandText += "Name_en,";
            cmd.CommandText += "Name_nl,";

            cmd.CommandText += "IsDeleted,";

            cmd.CommandText += "PinColor";

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@Name_fr,";
            cmd.CommandText += "@Name_en,";
            cmd.CommandText += "@Name_nl,";

            cmd.CommandText += "@IsDeleted,";

            cmd.CommandText += "@PinColor";

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("Name_fr", entity.Name_fr);
            cmd.Parameters.AddWithValue("Name_en", (object)entity.Name_en ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Name_nl", (object)entity.Name_nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("IsDeleted", entity.IsDeleted);
            cmd.Parameters.AddWithValue("PinColor", (object)entity.PinColor?? DBNull.Value);

            return (int)cmd.ExecuteScalar();
        }
    }
}
