namespace backend.Entity;

public class User : Entity<int>
{
    public string Name { get; set; }
    
    public string Surname { get; set; }

    public string MiddleName { get; set; }

    public DateOnly Birthdate { get; set; }
    
}
