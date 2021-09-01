import { Button, ButtonProps } from 'antd'
import { ApiOutlined } from '@ant-design/icons'
import cn from 'classnames'
import ConnectDBModel from '../ConnectDBModel'
import { useState } from 'react'

export interface IConnectButtonProps { };

const ConnectButton: React.FC<IConnectButtonProps & ButtonProps> = (props) => {
    const { className, ...rest } = props
    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            <ConnectDBModel
                show={show}
                handleCancel={() => setShow(false)}
                handleOk={(res) => console.log(res)}
            />
            <Button
                onClick={() => setShow(true)}
                className={cn('w100', className)}
                type='primary'
                {...rest}
            >
                <ApiOutlined />
            </Button>
        </>
    );
}

export default ConnectButton;