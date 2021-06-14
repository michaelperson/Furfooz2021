using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class ParameterRepository : BaseRepository
    {
        public ParameterRepository(SqlConnection connection) : base(connection)
        {

        }

        public IEnumerable<Parameter> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM [Parameters]";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToParameter();
            }
            _connection.Close();
        }

        public int Insert(Parameter entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO [Parameters] (";

            cmd.CommandText += "[ParameterName],";
            cmd.CommandText += "[Value]";

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@ParameterName,";
            cmd.CommandText += "@Value";

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("ParameterName", entity.ParameterName);
            cmd.Parameters.AddWithValue("Value", entity.Value);

            int result = (int)cmd.ExecuteScalar();
            _connection.Close();
            return result;
        }

        public bool Update(Parameter entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE [Parameters] SET ";

            cmd.CommandText += "[ParameterName] = @ParameterName,";
            cmd.CommandText += "[Value] = @Value ";

            cmd.CommandText += "WHERE ParameterName = @ParameterName";

            cmd.Parameters.AddWithValue("ParameterName", entity.ParameterName);
            cmd.Parameters.AddWithValue("Value", entity.Value);

            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM [Parameters] WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }
    }
}
