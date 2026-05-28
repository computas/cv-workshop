FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /app

COPY backend/ .

RUN dotnet restore backend.csproj && \
    dotnet publish \
      backend.csproj \
      --configuration Release \
      --output ./out


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runner

WORKDIR /app

RUN groupadd --gid 1001 application-group && \
    useradd --uid 1001 --gid application-group --no-create-home application-user


COPY --from=build /app/out .

RUN chown --recursive application-user .
USER application-user

EXPOSE 8080

ENTRYPOINT ["dotnet", "backend.dll"]
