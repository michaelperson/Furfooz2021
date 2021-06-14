using Playzone2020.DAL.Base;
using Playzone2020.DAL.Entities;
using Playzone2020.DAL.Mappers;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Repositories
{
    public class TariffRepository : BaseRepository
    {
        public TariffRepository(SqlConnection connection) : base(connection)
        {
        }

        public IEnumerable<Tariff> Get()
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Tariff";
            SqlDataReader r = cmd.ExecuteReader();
            while (r.Read())
            {
                yield return r.ToTariff();
            }
            _connection.Close();
        }

        public Tariff Get(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Tariff WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            SqlDataReader r = cmd.ExecuteReader();
            Tariff result = null;
            if (r.Read())
            {
                result = r.ToTariff();
            }
            _connection.Close();
            return result;
        }

        public bool Delete(int id)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "DELETE FROM Tariff WHERE Id = @id";
            cmd.Parameters.AddWithValue("id", id);
            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public bool Update(Tariff entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "UPDATE Tariff SET ";

            cmd.CommandText += "TicketType = @TicketType,";

            cmd.CommandText += "FurfoozPrice = @FurfoozPrice,";
            cmd.CommandText += "FurfoozReducedPrice = @FurfoozReducedPrice,";

            cmd.CommandText += "VevesPrice = @VevesPrice,";
            cmd.CommandText += "VevesReducedPrice = @VevesReducedPrice,";

            cmd.CommandText += "MosanPrice = @MosanPrice,";
            cmd.CommandText += "MosanReducedPrice = @MosanReducedPrice";

            cmd.CommandText += " WHERE Id = @Id";

            cmd.Parameters.AddWithValue("Id", entity.Id);
            cmd.Parameters.AddWithValue("TicketType", entity.TicketType);
            cmd.Parameters.AddWithValue("FurfoozPrice", entity.FurfoozPrice);
            cmd.Parameters.AddWithValue("FurfoozReducedPrice", entity.FurfoozReducedPrice);
            cmd.Parameters.AddWithValue("VevesPrice", entity.VevesPrice);
            cmd.Parameters.AddWithValue("VevesReducedPrice", entity.VevesReducedPrice);
            cmd.Parameters.AddWithValue("MosanPrice", entity.MosanPrice);
            cmd.Parameters.AddWithValue("MosanReducedPrice", entity.MosanReducedPrice);

            bool result = cmd.ExecuteNonQuery() == 1;
            _connection.Close();
            return result;
        }

        public int Insert(Tariff entity)
        {
            _connection.Open();
            SqlCommand cmd = _connection.CreateCommand();
            cmd.CommandText = "INSERT INTO Tariff (";

            cmd.CommandText += "TicketType,";

            cmd.CommandText += "FurfoozPrice,";
            cmd.CommandText += "FurfoozReducedPrice,";

            cmd.CommandText += "VevesPrice,";
            cmd.CommandText += "VevesReducedPrice,";

            cmd.CommandText += "MosanPrice,";
            cmd.CommandText += "MosanReducedPrice";

            cmd.CommandText += ") OUTPUT INSERTED.Id VALUES (";

            cmd.CommandText += "@TicketType,";

            cmd.CommandText += "@FurfoozPrice,";
            cmd.CommandText += "@FurfoozReducedPrice,";

            cmd.CommandText += "@VevesPrice,";
            cmd.CommandText += "@VevesReducedPrice,";

            cmd.CommandText += "@MosanPrice,";
            cmd.CommandText += "@MosanReducedPrice";

            cmd.CommandText += ")";

            cmd.Parameters.AddWithValue("TicketType", entity.TicketType);
            cmd.Parameters.AddWithValue("FurfoozPrice", entity.FurfoozPrice);
            cmd.Parameters.AddWithValue("FurfoozReducedPrice", entity.FurfoozReducedPrice);
            cmd.Parameters.AddWithValue("VevesPrice", entity.VevesPrice);
            cmd.Parameters.AddWithValue("VevesReducedPrice", entity.VevesReducedPrice);
            cmd.Parameters.AddWithValue("MosanPrice", entity.MosanPrice);
            cmd.Parameters.AddWithValue("MosanReducedPrice", entity.MosanReducedPrice);

            int result = (int)cmd.ExecuteScalar();
            _connection.Close();
            return result;
        }
    }
}
