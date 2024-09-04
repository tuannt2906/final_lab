import UserTable from "@/components/admin/user.table";

const ManageUserPage = async () => {
    const res = await fetch("http://localhost:8080/api/v1/users", {
        method: "GET"
    });
    const data = await res.json();
    
    return (
        <div>
            <UserTable/>
        </div>
    )
}

export default ManageUserPage;