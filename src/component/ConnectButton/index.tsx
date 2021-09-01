import { Button, ButtonProps } from 'antd'
import { ApiOutlined } from '@ant-design/icons'

export interface IConnectButtonProps { };

const ConnectButton: React.FC<IConnectButtonProps & ButtonProps> = (props) => {
    return (
        <Button type='primary' {...props}>
            <ApiOutlined />
            <span>connect</span>
        </Button>
    );
}

export default ConnectButton;