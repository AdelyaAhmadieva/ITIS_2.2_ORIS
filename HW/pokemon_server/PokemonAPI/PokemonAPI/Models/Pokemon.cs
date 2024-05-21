using System.Drawing.Printing;

namespace PokemonAPI.Models;

public class Pokemon
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    public string ImageUrl { get; set; }
    
    public Breeding Breeding { get; set; }
    
}

public class Breeding
{
    public int Weight { get; set; }
    public int Height { get; set; }
}