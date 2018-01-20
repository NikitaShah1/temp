import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            success:(data)=> {
                console.log(data);
                this.setState({
                    users:[...data]
                });
            }
        });
    }
    render(){

        return(
                <div>
                    <ul>
                    {
                        this.state.users.map((user) =>{
                        return <li key={user.id}>{JSON.stringify(user)}</li>
                        })
                    }
                    </ul>
                </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

