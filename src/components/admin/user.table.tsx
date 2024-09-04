'use client'
import { IUsers } from "@/types/next-auth";
import { Button, Table } from "antd"
import { ColumnsType } from "antd/es/table";

// interface IProps {
//     users: IUsers[] | []
// }
// const UserTable = (props: IProps) => {
//     const {users} = props;
const UserTable = () => {
    const dataSource = [
        {
            _id: '1',
            username: 'Tuan Nguyen',
            email: 'nguyentuan123.yeah@gmail.com'
        },
        {
            _id: '2',
            username: 'Bao Han',
            email: 'baohantr02@gmail.com'
        }
    ];

    const columns : ColumnsType<IUsers> = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];

    return (
        <>
            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20
            }}>
                <span>Manager Users</span>
                <Button>Create User</Button>
            </div>
            <Table
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </>
    )
}

export default UserTable;