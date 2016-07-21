using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using Core1Test.Infra.Data.Contexto;
using Microsoft.AspNet.Hosting;

namespace Core1Test.Infra.Data
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
            .AddSqlServer()
            .AddDbContext<AppContexto>(options =>
            {
                options.UseSqlServer(Configuration["Data:ConnectionString"]);
            });
        }

    }
}
