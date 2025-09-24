using backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Database;

public class NspkContext : DbContext
{
    public DbSet<User?> Users { get; set; }
    
    public NspkContext(DbContextOptions<NspkContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Nspk.db");
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasKey(x => x.Id);
        
        base.OnModelCreating(modelBuilder);
    }
}