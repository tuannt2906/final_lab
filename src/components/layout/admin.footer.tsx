'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Fullstack Next/Nest ©{new Date().getFullYear()} Created by @Tuan Nguyen
            </Footer>
        </>
    )
}

export default AdminFooter;