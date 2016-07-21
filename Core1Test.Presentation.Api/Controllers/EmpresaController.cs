using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Core1Test.Application.Interface;
using Core1Test.Domain.Entities;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Core1Test.Presentation.Api.Controllers
{
    [Route("api/[controller]")]
    public class EmpresaController : Controller
    {
        IEmpresaAppService _empresaApp;

        public EmpresaController(IEmpresaAppService empresaApp)
        {
            _empresaApp = empresaApp;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Empresa> Get()
        {
            return _empresaApp.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
