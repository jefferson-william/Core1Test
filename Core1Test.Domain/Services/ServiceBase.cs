using Core1Test.Domain.Interfaces.Repositories;
using Core1Test.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace Core1Test.Domain.Services
{
    public class ServiceBase<TEntity> : IDisposable, IServiceBase<TEntity> where TEntity : class
    {
        private readonly IRepositoryBase<TEntity> _repositoryBase;

        public ServiceBase(IRepositoryBase<TEntity> repositoryBase)
        {
            _repositoryBase = repositoryBase;
        }

        public void Add(TEntity entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Dispose()
        {
            _repositoryBase.Dispose();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _repositoryBase.GetAll();
        }

        public void Remove(TEntity entity)
        {
            _repositoryBase.Remove(entity);
        }

        public void Update(TEntity entity)
        {
            _repositoryBase.Update(entity);
        }
    }
}
