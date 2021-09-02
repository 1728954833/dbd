import { Modal, Form, Input, FormInstance } from 'antd';
import { useRef } from 'react';
import { connectService } from '../../service';
import React from 'react';

export interface IConnectDBModelProps {
    show: boolean
    handleOk?: (args: ConnectArgs) => void
    handleCancel?: () => void
}

export interface ConnectArgs {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
}

const ConnectDBModel: React.FC<IConnectDBModelProps> = ({ show, handleOk, handleCancel }) => {
    const form = useRef<FormInstance | null>(null);

    const _handleOk = async () => {
        if (!form.current) return;
        const { validateFields } = form.current;

        try {
            const connectArgs = await validateFields();
            const reply = await connectService.connect(connectArgs);
            console.log(reply);
            handleOk && handleOk(connectArgs);
        } catch (err) {
            console.log(err);
        }
    };

    const _handleCancel = async () => {
        if (!form.current) return;
        const { resetFields } = form.current;
        resetFields();
        handleCancel && handleCancel();
    };

    return (
        <Modal
            title="Connect Database"
            visible={show}
            onOk={_handleOk}
            onCancel={_handleCancel}
            okText={'Connect'}
        >
            <Form ref={form} >
                <Form.Item
                    labelCol={{ span: 5 }}
                    label="host"
                    name="host"
                    initialValue={'localhost'}
                    rules={[{ required: true, message: 'Please input your host!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="port"
                    name="port"
                    initialValue={3306}
                    rules={[{ required: true, message: 'Please input your port!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ConnectDBModel;