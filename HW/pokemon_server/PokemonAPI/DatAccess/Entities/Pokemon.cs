using System.ComponentModel.DataAnnotations;

namespace DatAccess.Entities;

public class Pokemon
{
     [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public int BreedingId { get; set; }
        public Breeding Breeding { get; set; }
        public string Test { get; set; }
}