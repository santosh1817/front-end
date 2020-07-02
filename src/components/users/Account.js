import React from 'react'
import axios from 'axios'

class Account extends React.Component{
    constructor(){
        super()
        this.state={
            user:{}
        }
    }
    // tokens are sending to server
    componentDidMount(){
        axios.get('http://localhost:3005/users/account',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }) 
        .then (response=>{
            console.log(response.data)
            const user=response.data
            this.setState({user}) //when our current value doesn't depend on previous value, that time 

        })
    }
    render(){
        return(
            <div>
                <h2>User Account</h2>
                <p>{this.state.user.username}</p>
            </div>
        )
    }
}
export default Account