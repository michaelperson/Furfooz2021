using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Data.SqlClient;
using Playzone2020.DAL.Repositories;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.OpenApi.Models;

using Playzone2020.API.services;
using System.IdentityModel.Tokens.Jwt;

using Playzone2020.API.Services;
using Stripe.Checkout;
using Stripe;
using Playzone2020.API.Utils;

namespace Playzone2020.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           

            services.AddControllers().AddNewtonsoftJson();

            services.AddCors(options => options.AddPolicy("default", builder => {
                builder.AllowAnyOrigin();
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
            }));



            services.AddTransient(sb => new SqlConnection(Configuration.GetConnectionString("default")));

            services.AddTransient<CategoryRepository>();
            services.AddTransient<PointOfInterestsRepository>();

            services.AddTransient<PlantRepository>();
            services.AddTransient<CategoryPlantRepository>();

            services.AddTransient<TariffRepository>();
            services.AddTransient<ParameterRepository>();
            services.AddTransient<CamerasRepository>();
            services.AddTransient<ClipVideoRepository>();
            services.AddTransient<SeasonRepository>();


            services.AddTransient<PlantService>();

            services.AddScoped<SecurityService>();
            services.AddScoped<JwtService>();
            services.AddScoped<JwtSecurityTokenHandler>();


            services.AddTransient<BookingRepository>();


            services.AddSwaggerGen();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Furfooz API", Version = "v1" });
            });

            services.AddControllersWithViews();
            services.AddScoped<ViewRenderService>();
            services.AddScoped<MailService>();

            StripeConfiguration.ApiKey = Configuration.GetSection("Stripe").GetSection("PriKey").Value;
            services.AddScoped<SessionService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("default");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json","Furfooz API");
            });
        }
    }
}
