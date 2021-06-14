using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Playzone2020.DAL.Base
{
    public abstract class BaseRepository
    {
        protected readonly SqlConnection _connection;

        protected BaseRepository(SqlConnection connection)
        {
            _connection = connection;
        }
    }
}
