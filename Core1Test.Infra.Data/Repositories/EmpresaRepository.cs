using Core1Test.Domain.Entities;
using Core1Test.Domain.Interfaces.Repositories;
using Core1Test.Infra.Data.Contexto;

namespace Core1Test.Infra.Data.Repositories
{
    public class EmpresaRepository : RepositoryBase<Empresa>, IEmpresaRepository
    {
        public EmpresaRepository(AppContexto appContexto)
            : base(appContexto)
        {
        }
    }
}
