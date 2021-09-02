import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className="flex justify-center align-center" style={{ height: 64 }}>
            <img className="mr-2" height="36" width="36" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="antd" />
            MYSQL Document
        </div>
    );
};

export default Banner;