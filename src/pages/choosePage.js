import React from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import LoginForm from '../components/Customer'
import styled from 'styled-components';
import { Page } from "styled-icons/foundation";

class ChoosePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

            <Page>
                <div>
                    {/*<customer>*/}
                    <Customer />
                    {/*</customer>*/}
                </div>
            </Page>
        )
    }


}

export default withRouter(ChoosePage)