using Microsoft.Data.Entity;
using Core1Test.Domain.Entities;

namespace Core1Test.Infra.Data.Contexto
{
    public class AppContexto : DbContext
    {
        public DbSet<Empresa> Empresas { get; set; }
    }
}
