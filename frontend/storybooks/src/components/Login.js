import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/')
            .then(res => res.text())
            .then(data =>  this.setState({ data: data }))
    }

    render(){
        return(
        <div className="text-center">
            <h3>login</h3>
            <p>Create public and private stories from you're life</p>
            <a href="/auth/google">log in with google</a>
            
        </div>
        )
    }
}

export default Login