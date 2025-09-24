import { List, Empty } from 'antd';
import type { Post } from '../types/post';

interface PostListProps {
    posts: Post[];
    loading: boolean;
}

export function PostList({ posts, loading }: PostListProps) {
    return (
        <List
            dataSource={posts}
            loading={loading}
            locale={{ emptyText: <Empty description="Постов пока нет" /> }}
            renderItem={(item: Post) => (
                <List.Item>
                    <List.Item.Meta
                        title={item.title}
                        description={
                            <div>
                                <div style={{ marginBottom: 8 }}>{item.content}</div>
                                <div style={{ color: '#999' }}>
                                    {new Date(item.createdDate).toLocaleString()} · Автор: {item.name}
                                </div>
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    );
}
