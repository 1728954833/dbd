import { Modal, Form, Input, FormInstance } from 'antd'
import { useRef, useState } from 'react'

export interface IConnectDBModelProps { }

export interface ConnectArgs {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
}

const ConnectDBModel: React.FC<IConnectDBModelProps> = (props) => {
    const form = useRef<FormInstance | null>(null)
    const [show, setShow] = useState<boolean>()
    const [connectArgs, setConnectArgs] = useState<ConnectArgs>({
        host: 'localhost',
        port: 3306
    })


    const handleOk = async () => {
        if (!form.current) return
        const { validateFields } = form.current

        try {
            const res = await validateFields()
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    const handleCancel = () => {

    }


    return (
        <Modal
            title="Connect Database"
            visible={true}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={"Connect"}
        >
            <Form ref={form} >
                <Form.Item
                    labelCol={{ span: 5 }}
                    label="host"
                    name="host"
                    initialValue={connectArgs.host}
                    rules={[{ required: true, message: 'Please input your host!' }]}
                >
                    <Input value={connectArgs.host} />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="port"
                    name="port"
                    initialValue={connectArgs.port}
                    rules={[{ required: true, message: 'Please input your port!' }]}
                >
                    <Input value={connectArgs.port} />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={connectArgs.username} />
                </Form.Item>

                <Form.Item
                    labelCol={{ span: 5 }}
                    label="password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input value={connectArgs.password} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ConnectDBModel