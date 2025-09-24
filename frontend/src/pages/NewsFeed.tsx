import { Card, Space, Typography } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import type { Post } from '../types/post';
import { useUser } from '../contexts/UserContext';
import { postApi } from '../api/post';
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';

const { Title } = Typography;

export function NewsFeed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();

    const fetchPosts = useCallback(async () => {
        setIsLoading(true);
        try {
            const data = await postApi.getPosts();
            setPosts(data);
        } catch (error) {
            console.error('Ошибка при загрузке постов', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2} style={{ margin: 0 }}>Новостная лента</Title>

            <Card title="Создать новый пост">
                <PostForm user={user} onPostCreated={fetchPosts} />
            </Card>

            <Card title="Все посты">
                <PostList posts={posts} loading={isLoading} />
            </Card>
        </Space>
    );
}
