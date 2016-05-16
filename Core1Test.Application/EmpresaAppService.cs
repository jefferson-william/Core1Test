using Core1Test.Application.Interface;
using Core1Test.Domain.Entities;
using Core1Test.Domain.Interfaces.Services;

namespace Core1Test.Application
{
    public class EmpresaAppService : AppServiceBase<Empresa>, IEmpresaAppService
    {
        private IEmpresaService _empresaService;
        public EmpresaAppService(IEmpresaService empresaService) 
            : base(empresaService)
        {
            _empresaService = empresaService;
        }
    }
}
