import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ErrorMessage from './errorMessage'
import styled from 'styled-components';
import {withRouter, Redirect} from 'react-router-dom'

class Customer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            customerid: '',
        }
        this._handleChange =  this._handleChange.bind(this);
        this._handleSubmit =  this._handleSubmit.bind(this);   
    }

    _handleChange(e) {
        // this.setState({value: event.target.value});
        let id = e.target.id
        this.setState({
            [id]: e.target.value
        })
    }
    _handleSubmit(e){
        e.preventDefault();//test need

        axios({
                method: 'post',           
                url: 'api/choose',
                headers: {'Content-Type': 'application/JSON; charset=UTF-8'},
                data:{
                    "username": this.state.id,
                    "password": this.state.name,
                    
                }
            }             
            )
    }

}


export default Customer