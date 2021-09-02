import React from 'react';

class Images extends React.Component {
    render() {
        return (
            <img src={this.props.images} alt={this.props.alt}></img>
        );
    }
}

export default Images;