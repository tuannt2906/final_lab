'use client'

import { CrownOutlined } from "@ant-design/icons"
import { Result, Button } from "antd"
import Link from 'next/link'

const HomePage = () => {
    return (
        <div style={{ padding: 20 }}>
            <Result
                icon={<CrownOutlined />}
                title="Fullstack Next/Nest - createdBy @Tuan Nguyen"
                extra={
                    <>
                        <Link href="/auth/login" passHref>
                            <Button type="primary" style={{ marginRight: 10, width: 100 }}>
                                Login
                            </Button>
                        </Link>
                        <Link href="/auth/register" passHref>
                            <Button type="primary" style={{ width: 100 }}>
                                Register
                            </Button>
                        </Link>
                    </>
                }
            />
        </div>
    )
}

export default HomePage;
