import { useEffect, useState } from "react";
import { apiClient } from "../api";
import { User } from "../types";

export function NewsFeed() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        apiClient.getUser().then(setUser);
    }, []);

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Новостная лента</h1>
            <p>Текущий пользователь: {user.surname} {user.name} {user.middleName}</p>
            {/* Здесь будет верстка новостной ленты */}
        </div>
    );
}
