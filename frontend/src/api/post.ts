import type { Post } from "../types";

export const postApi = {
    
    getPosts: async (): Promise<Post[]> => {
        try {
            const response = await fetch('/api/post');
            if (!response.ok) {
                console.error("Не удалось получить посты:", response.statusText);
                return [];
            }
            return await response.json();
        } catch (error) {
            console.error("Произошла ошибка при получении постов:", error);
            return [];
        }
    },

    createPost: async (payload: { title: string; content: string; createdDate: string; userId: number; }): Promise<boolean> => {
        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                console.error("Не удалось создать пост:", response.statusText);
                return false;
            }
            return true;
        } catch (error) {
            console.error("Произошла ошибка при создании поста:", error);
            return false;
        }
    }
};


