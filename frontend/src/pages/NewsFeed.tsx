import { useEffect, useState } from "react";
import { apiClient } from "../api";
import type { User } from "../types";

export function NewsFeed() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        apiClient.getUser()
            .then((data) => setUser(data))
            .finally(()=>setIsLoading(false))
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Новостная лента</h1>
            <p>Текущий пользователь: {user?.surname} {user?.name} {user?.middleName}</p>
            {/* Здесь будет верстка новостной ленты */}
        </div>
    );
}
