using backend.Data;
using backend.Endpoints;
using backend.Extensions;
using backend.Middleware;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Konfigurer Entity Framework Core og DbContext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

// Registrer CV-service
builder.Services.AddScoped<ICvService, CvService>();

// Konfigurer CORS
builder.Services.AddCorsServices(builder.Configuration);

// Konfigurer OpenAPI (Scalar)
builder.Services.AddOpenApiServices();

var app = builder.Build();

// Automatisk apply databasemigrasjoner
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
}

// Global Exception handling
app.UseMiddleware<ExceptionMiddleware>();

// Aktiver OpenAPI + Scalar UI
app.UseOpenApiWithScalar();

// Aktiver CORS
app.UseCorsPolicy();

// Middleware for API-nøkkelbeskyttelse
// TODO: Skal vi ha med API-key?
// app.UseMiddleware<ApiKeyMiddleware>();

// Koble til GET-endepunkter
app.MapUserEndpoints();
app.MapExperienceEndpoints();

// Kjør applikasjonen
app.Run();