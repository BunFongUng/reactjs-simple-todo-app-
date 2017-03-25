import React, { Component } from 'react';
import TodoList from './todo/TodoList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            text: '',
            showMessage: false
        };
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
        
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.text === '') {
            this.setState({
                showMessage: true
            });
            // console.log('please, enter title');
        } else {
            let newItem = {
                text: this.state.text,
                id: Date.now()
            };

            this.setState((prevState) => ({
                items: prevState.items.concat(newItem),
                text: '',
                showMessage: false
            }));
        }
        
    }

    render(){
        return(
            <div>
                <h2 className="page-header">TODO</h2>

                { this.state.showMessage === true ? ( <div className="alert alert-danger alert-dismissable">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Please!</strong> enter your todo title.
                </div> ) : ''}

                <TodoList items={this.state.items}></TodoList>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control form-group" onChange={this.handleChange} value={this.state.text}/>
                    <button className="btn btn-primary">{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div> 
        );
    }   
}