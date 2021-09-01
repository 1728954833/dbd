import { Button, ButtonProps } from 'antd'
import { ApiOutlined } from '@ant-design/icons'
import cn from 'classnames'

export interface IConnectButtonProps { };

const ConnectButton: React.FC<IConnectButtonProps & ButtonProps> = (props) => {
    const { className, ...rest } = props
    return (
        <Button className={cn('w100', className)} type='primary' {...rest}>
            <ApiOutlined />
        </Button>
    );
}

export default ConnectButton;