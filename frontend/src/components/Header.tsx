import { useUser } from '../contexts/UserContext';
import styles from './Header.module.css';

export function Header() {
    const { user } = useUser();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>NSPK Test</div>
            <div className={styles.user}>
                {user ? `${user.surname} ${user.name} ${user.middleName}` : 'Гость'}
            </div>
        </header>
    );
}
