using Microsoft.Data.Entity;
using Core1Test.Domain.Interfaces.Repositories;
using Core1Test.Infra.Data.Contexto;
using System;
using System.Collections.Generic;

namespace Core1Test.Infra.Data.Repositories
{
    public class RepositoryBase<TEntity> : IDisposable, IRepositoryBase<TEntity> where TEntity : class
    {
        protected AppContexto _db { get; set; }

        public RepositoryBase(AppContexto appContexto)
        {
            _db = appContexto;
        }

        public void Add(TEntity entity)
        {
            _db.Set<TEntity>().Add(entity);
            _db.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            System.GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposing) return;

            if (_db == null) return;
            _db.Dispose();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _db.Set<TEntity>();
        }

        public void Remove(TEntity entity)
        {
            _db.Set<TEntity>().Remove(entity);
            _db.SaveChanges();
        }

        public void Update(TEntity entity)
        {
            _db.Entry(entity).State = EntityState.Modified;
            _db.SaveChanges();
        }
    }
}
