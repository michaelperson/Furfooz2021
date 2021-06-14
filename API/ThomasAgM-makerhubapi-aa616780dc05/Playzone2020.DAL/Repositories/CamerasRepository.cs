using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class CamerasRepository: BaseRepository
    {
        public CamerasRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<Cameras> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Cameras";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToCameras();
            }
            _connection.Close();
        }
        public Cameras Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Cameras WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            Cameras result = null;
            if (r.Read())
            {
                result = r.ToCameras();
            }
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM Cameras WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            return cmd.ExecuteNonQuery() == 1;
        }

        public bool Update(Cameras entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Cameras SET ";

            cmd.CommandText += "Nom_Fr = @Nom_Fr,";
            cmd.CommandText += "Nom_En = @Nom_En,";
            cmd.CommandText += "Nom_Nl = @Nom_Nl,";
            cmd.CommandText += "Emplacement = @Emplacement,";
            cmd.CommandText += "EstActif = @EstActif,";
            cmd.CommandText += "LienImg = @LienImg ";

            cmd.CommandText += "WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Nom_Fr", entity.Nom_Fr);
            cmd.Parameters.AddWithValue("Nom_En", (object)entity.Nom_En ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Nom_Nl", (object)entity.Nom_Nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Emplacement", entity.Emplacement);
            cmd.Parameters.AddWithValue("EstActif", entity.EstActif);

            cmd.Parameters.AddWithValue("Lienimg", entity.LienImg);


            return cmd.ExecuteNonQuery() == 1;
        }

        public int Insert(Cameras entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO Cameras (";


            cmd.CommandText += "Nom_Fr,";
            cmd.CommandText += "Nom_En,";
            cmd.CommandText += "Nom_Nl,";
            cmd.CommandText += "Emplacement,";

            cmd.CommandText += "EstActif,";
            cmd.CommandText += "Lienimg";


            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";


            cmd.CommandText += "@Nom_Fr,";
            cmd.CommandText += "@Nom_En,";
            cmd.CommandText += "@Nom_Nl,";
            cmd.CommandText += "@Emplacement,";

            cmd.CommandText += "@EstActif,";
            cmd.CommandText += "@Lienimg";


            cmd.CommandText += ")";


            cmd.Parameters.AddWithValue("Nom_Fr", entity.Nom_Fr);
            cmd.Parameters.AddWithValue("Nom_En", (object)entity.Nom_En ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Nom_Nl", (object)entity.Nom_Nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Emplacement", entity.Emplacement);
            cmd.Parameters.AddWithValue("EstActif", entity.EstActif);

            cmd.Parameters.AddWithValue("Lienimg", entity.LienImg);


            return (int)cmd.ExecuteScalar();
        }

    }
}
