import { createContext, useContext } from "react";
import type { User } from "../types";

interface UserContextType {
    user: User | null;
    isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export { UserContext };
