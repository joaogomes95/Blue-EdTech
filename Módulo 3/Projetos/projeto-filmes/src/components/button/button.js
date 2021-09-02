import React from 'react';
import { Button } from 'reactstrap';



class ButtonBtn extends React.Component {
    constructor(props){  
        super(props);      
        this.state = {
            trailer: this.props.link,
        };        
    }    

    render() {                      
        return (
            <Button className="btn" href={this.state.trailer} target="_blank" color="danger">Trailer</Button>
        );
    }
}

export default ButtonBtn;

