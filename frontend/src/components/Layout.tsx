import { Layout as AntLayout, Spin, Typography } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { userApi } from "../api/user";
import { UserContext } from "../contexts/UserContext";
import type { User } from "../types/user";

const { Header, Content } = AntLayout;
const { Title, Text } = Typography;

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        userApi.getUser()
            .then((data) => setUser(data))
            .finally(() => setIsLoading(false));
    }, []);

    const headerStyle: React.CSSProperties = {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        backgroundColor: '#001529'
    };

    const contentStyle: React.CSSProperties = {
        padding: '24px',
        margin: 0,
        minHeight: 280,
        background: '#fff',
        borderRadius: '8px'
    };

    return (
        <UserContext.Provider value={{ user, isLoading }}>
            <AntLayout style={{ minHeight: '100vh' }}>
                <Header style={headerStyle}>
                    <Title level={3} style={{ color: 'white', margin: 0 }}>NSPK Test</Title>
                    {user && <Text style={{ color: 'white' }}>{`${user.surname} ${user.name} ${user.middleName}`}</Text>}
                </Header>
                <AntLayout style={{ padding: '24px' }}>
                    <Content style={contentStyle}>
                        <Spin spinning={isLoading} size="large" style={{width: '100%'}}>
                            {!isLoading && children}
                        </Spin>
                    </Content>
                </AntLayout>
            </AntLayout>
        </UserContext.Provider>
    );
}
