import type { User } from "../types";

export const apiClient = {
    getUser: async (): Promise<User | null> => {
        try {
            const response = await fetch('/api/user');
            if (!response.ok) {
                console.error("Failed to fetch user:", response.statusText);
                return null;
            }
            return await response.json();

        } catch (error) {
            console.error("An error occurred while fetching user:", error);
            return null;
        }
    }
};
