using Core1Test.Domain.Entities;
using Core1Test.Domain.Interfaces.Repositories;
using Core1Test.Domain.Interfaces.Services;

namespace Core1Test.Domain.Services
{
    public class EmpresaService : ServiceBase<Empresa>, IEmpresaService
    {
        private readonly IEmpresaRepository _empresaRepository;
        public EmpresaService(IEmpresaRepository empresaRepository) 
            : base(empresaRepository)
        {
            _empresaRepository = empresaRepository;
        }
    }
}
