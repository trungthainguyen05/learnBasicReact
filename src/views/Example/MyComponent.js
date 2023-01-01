import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Trung',
        company: 'MSC'
    }

    /*
    JSX => return block
    fragment (<> </>) 
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />

                    Hello My Component. My name is {this.state['name']}
                </div>
                <div className="second">
                    I work for {this.state.company}
                </div>

            </>
        )
    }
}

export default MyComponent;