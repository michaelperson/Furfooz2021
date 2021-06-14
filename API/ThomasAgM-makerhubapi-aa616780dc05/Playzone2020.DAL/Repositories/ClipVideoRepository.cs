using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class ClipVideoRepository : BaseRepository
    {
        public ClipVideoRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<ClipVideo> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM ClipVideo";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToClipVideo();
            }
            _connection.Close();
        }

        public IEnumerable<ClipVideo> GetCameraId(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM ClipVideo WHERE Camera_Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToClipVideo();
            }
            _connection.Close();
        }
        public ClipVideo Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM ClipVideo WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            ClipVideo result = null;
            if (r.Read())
            {
                result = r.ToClipVideo();
            }
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM ClipVideo WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            return cmd.ExecuteNonQuery() != 1;
        }

        public bool Update(ClipVideo entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE ClipVideo SET ";

            cmd.CommandText += "Lien = @Lien,";
            cmd.CommandText += "Nom_Fr = @Nom_Fr,";
            cmd.CommandText += "Nom_En = @Nom_En,";
            cmd.CommandText += "Nom_Nl = @Nom_Nl,";
            cmd.CommandText += "Detail = @Detail,";
            cmd.CommandText += "EstAffiche = @EstAffiche,";
            cmd.CommandText += "LienImg = @LienImg,";
            cmd.CommandText += "Camera_Id = @Camera_Id "; 
            


            cmd.CommandText += "WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Lien", entity.Lien);
            cmd.Parameters.AddWithValue("Nom_Fr", entity.Nom_Fr);
            cmd.Parameters.AddWithValue("Nom_Nl", (object)entity.Nom_Nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Nom_En", (object)entity.Nom_En ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Detail", entity.Detail);
            cmd.Parameters.AddWithValue("EstAffiche", entity.EstAffiche);
            cmd.Parameters.AddWithValue("LienImg", entity.LienImg);
            cmd.Parameters.AddWithValue("Camera_Id", entity.Camera_Id);


            return cmd.ExecuteNonQuery() == 1;
        }

        public int Insert(ClipVideo entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO ClipVideo (";


            cmd.CommandText += "Lien,";
            cmd.CommandText += "Nom_Fr,";
            cmd.CommandText += "Nom_En,";
            cmd.CommandText += "Nom_Nl,";
            cmd.CommandText += "Detail,";
            cmd.CommandText += "EstAffiche,";
            cmd.CommandText += "Lienimg,";
            cmd.CommandText += "Camera_Id";



            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@Lien,";
            cmd.CommandText += "@Nom_Fr,";
            cmd.CommandText += "@Nom_En,";
            cmd.CommandText += "@Nom_Nl,";
            cmd.CommandText += "@Detail,";
            cmd.CommandText += "@EstAffiche,";
            cmd.CommandText += "@LienImg,";
            cmd.CommandText += "@Camera_Id";


            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("Lien", entity.Lien);
            cmd.Parameters.AddWithValue("Nom_Fr", entity.Nom_Fr);
            cmd.Parameters.AddWithValue("Nom_Nl", (object)entity.Nom_Nl ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Nom_En", (object)entity.Nom_En ?? DBNull.Value);
            cmd.Parameters.AddWithValue("Detail", entity.Detail);
            cmd.Parameters.AddWithValue("EstAffiche", entity.EstAffiche);
            cmd.Parameters.AddWithValue("LienImg", entity.LienImg);
            cmd.Parameters.AddWithValue("Camera_Id", entity.Camera_Id);


            return (int)cmd.ExecuteScalar();
        }

    }
}
