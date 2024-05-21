using DatAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DatAccess;

public class AppDbContext : DbContext
{
    public DbSet<Breeding> Breedings { get; set; }
    public DbSet<Pokemon>  Pokemons { get; set; }
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options){}
}
