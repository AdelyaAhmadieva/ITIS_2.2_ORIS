using System.ComponentModel.DataAnnotations;

namespace DatAccess.Entities;

public class Breeding
{
    [Key]
    public int Id { get; set; }
    public int Weight { get; set; }
    public int Height { get; set; }
}