using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class CategoryPlantRepository : BaseRepository
    {
        public CategoryPlantRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<CategoryPlant> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM CategoryPlant";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToCategoryPlant();
            }
            _connection.Close();
        }

        //public Category Get(int id)
        //{
        //    _connection.Open();
        //    SqlCommand cmd = _connection.CreateCommand();
        //    cmd.CommandText = "SELECT * FROM Category WHERE Id = @id";
        //    cmd.Parameters.AddWithValue("id", id);
        //    SqlDataReader r = cmd.ExecuteReader();
        //    Category result = null;
        //    if (r.Read())
        //    {
        //        result = r.ToCategory();
        //    }
        //    _connection.Close();
        //    return result;
        //}
    }
}
