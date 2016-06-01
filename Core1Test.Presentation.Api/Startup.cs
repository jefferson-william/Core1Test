using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Core1Test.Application;
using Core1Test.Application.Interface;
using Core1Test.Domain.Interfaces.Repositories;
using Core1Test.Domain.Interfaces.Services;
using Core1Test.Domain.Services;
using Core1Test.Infra.Data.Contexto;
using Core1Test.Infra.Data.Repositories;

namespace Core1Test.Presentation.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            services.AddEntityFramework()
            .AddSqlServer()
            .AddDbContext<AppContexto>(options =>
            {
                options.UseSqlServer(Configuration["Data:ConnectionString"]);
            });

            services.AddTransient<IEmpresaAppService, EmpresaAppService>();

            services.AddTransient<IEmpresaService, EmpresaService>();

            services.AddTransient<IEmpresaRepository, EmpresaRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
