using System.Collections.Generic;

namespace Core1Test.Application.Interface
{
    public interface IAppServiceBase<TEntity> where TEntity : class
    {
        void Add(TEntity entity);

        void Update(TEntity entity);

        void Remove(TEntity entity);

        //TEntity GetById(int id);

        IEnumerable<TEntity> GetAll();

        void Dispose();
    }
}
