import { ReactNode, useEffect, useState } from "react";
import { apiClient } from "../api";
import { UserContext } from "../contexts/UserContext";
import type { User } from "../types";
import { Header } from "./Header";
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        apiClient.getUser()
            .then((data) => setUser(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoading }}>
            <div className={styles.layout}>
                <Header />
                <main className={styles.main}>
                    {isLoading ? <div>Загрузка...</div> : children}
                </main>
            </div>
        </UserContext.Provider>
    );
}
