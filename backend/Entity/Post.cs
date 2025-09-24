using System;

namespace backend.Entity;

public class Post : Entity<int>
{
    public string Title { get; set; }
    
    public string Content { get; set; }

    public DateTime CreatedDate { get; set; }
    
    public int UserId { get; set; }
    
    public User User { get; set; }
}
