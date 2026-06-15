using Scalar.AspNetCore;

namespace backend.Extensions;

public static class OpenApiExtensions
{
    public static void AddOpenApiServices(this IServiceCollection services)
    {
        services.AddOpenApi();
    }

    public static void UseOpenApiWithScalar(this WebApplication app)
    {
        app.MapOpenApi();
        app.MapScalarApiReference(options =>
        {
            options
                .WithTitle("CV-Backend")
                .WithDefaultHttpClient(ScalarTarget.JavaScript, ScalarClient.Fetch);
        });
    }
}
