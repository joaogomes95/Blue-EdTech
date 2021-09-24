import React from 'react';


class Link extends React.Component {
    render() {
        return (
            <a href={this.props.trailer} target="_blank"></a>
        );
    }
}

export default Link;