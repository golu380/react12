import { UserContext } from "./UserProvider";
import { useContext } from "react";


function Dashboard(){

    const user = useContext(UserContext);
    console.log(user)

    if(user === null){
        return <p>User not found!</p>
    }

    return (
    <section className="card"> 
<h2>Welcome, {user.name}!</h2> 
<p>Student ID: {user.id}</p> 
<p>Course: {user.course}</p> 
</section> 
    )


}

export default Dashboard;