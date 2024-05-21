using System.ComponentModel.DataAnnotations;

namespace DataAccess.Entities;

/// <summary>
/// покемон
/// </summary>
public class Pokemon
{
    /// <summary>
    /// ИИДДД покемона
    /// </summary>
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public int BreedingId { get; set; }
    public Breeding Breeding { get; set; }
    public string Test { get; set; }
}