import { Button, Form, Input, message } from 'antd';
import { useMemo } from 'react';
import type { User } from "../types/user";
import { postApi } from '../api/post';

interface PostFormProps {
    user: User | null;
    onPostCreated: () => void;
}

export function PostForm({ user, onPostCreated }: PostFormProps) {
    const [form] = Form.useForm();

    const initialValues = useMemo(() => ({ title: '', content: '' }), []);

    const handleFinish = async (values: { title: string; content: string }) => {
        if (!user) {
            message.error('Пользователь не загружен. Подождите...');
            return;
        }

        const payload = {
            ...values,
            createdDate: new Date().toISOString(),
            userId: user.id
        };

        try {
            const success = await postApi.createPost(payload);
            if (success) {
                message.success('Пост успешно создан');
                form.resetFields();
                await onPostCreated();
            } else {
                message.error('Не удалось создать пост');
            }
        } catch (error) {
            message.error('Ошибка при создании поста');
        }
    };

    return (
        <Form form={form} layout="vertical" initialValues={initialValues} onFinish={handleFinish}>
            <Form.Item
                label="Заголовок"
                name="title"
                rules={[{ required: true, message: 'Введите заголовок' }]}
            >
                <Input placeholder="Например: Обновление проекта" allowClear />
            </Form.Item>

            <Form.Item
                label="Содержимое"
                name="content"
                rules={[{ required: true, message: 'Введите содержимое поста' }]}
            >
                <Input.TextArea placeholder="Поделитесь новостями..." rows={4} allowClear />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={!user}>
                    Опубликовать
                </Button>
            </Form.Item>
        </Form>
    );
}
