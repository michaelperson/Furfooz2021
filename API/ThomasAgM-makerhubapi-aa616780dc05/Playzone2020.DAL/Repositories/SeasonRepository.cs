using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;

namespace Playzone2020.DAL.Repositories
{
    public class SeasonRepository : BaseRepository
    {
        public SeasonRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<SeasonsOfPlants> Get(int idPlant)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = $"SELECT Seasons FROM [SeasonsOfPlants] WHERE Plant_id = {idPlant}";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToSeasonOfPlants();
            }
            _connection.Close();
        }

        public void Add(int season, int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand(); 
            cmd.CommandText = "INSERT into [SeasonsOfPlants] (";
            cmd.CommandText += "Seasons,";
            cmd.CommandText += "Plant_id";
            cmd.CommandText += ") VALUES (";
            cmd.CommandText += "@Seasons,";
            cmd.CommandText += "@Plant_id";
            cmd.CommandText += ")";
            cmd.Parameters.AddWithValue("Seasons", (object)season ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Plant_id", (object)id ?? DBNull.Value);
            cmd.ExecuteScalar();    
            _connection.Close();
        }

        public void Remove(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();        
            cmd.CommandText = $"DELETE from [SeasonsOfPlants] WHERE Plant_id = {id}";
            cmd.ExecuteScalar();
            _connection.Close();
        }




    }
}
