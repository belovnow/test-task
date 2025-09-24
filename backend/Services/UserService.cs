using backend.Database;
using backend.Entity;

namespace backend.Services;

public class UserService(NspkContext db)
{
    public User? GetUser()
    {
        return db.Users.FirstOrDefault();
    }
}