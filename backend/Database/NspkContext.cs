using System;
using backend.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Database;

public class NspkContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }
    
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
        modelBuilder.Entity<Post>().HasKey(x => x.Id);
        
        modelBuilder.Entity<Post>()
            .HasOne<User>(p => p.User)
            .WithMany()
            .HasForeignKey(p => p.UserId);

        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Name = "Иван", Surname = "Иванов", MiddleName = "Иванович", Birthdate = new DateOnly(1990, 1, 1) },
            new User { Id = 2, Name = "Петр", Surname = "Петров", MiddleName = "Петрович", Birthdate = new DateOnly(1985, 5, 15) }
        );
        
        base.OnModelCreating(modelBuilder);
    }
}
