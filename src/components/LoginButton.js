import React from "react";

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogged: false, clazz: 'primary', text: 'Login'};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({isLogged: !this.state.isLogged});

        if (this.state.isLogged) {
            this.setState({clazz: "success"});
            this.setState({text: "Logout"});
        } else {
            this.setState({clazz: "primary"});
            this.setState({text: "Login"});
        }
    }

    render() {
        return (
            <LoginLogoutButton clazz={this.state.clazz}
                               text={this.state.text}
                               onClick={this.handleClick} />
        );
    }
}

class LoginLogoutButton extends React.Component {

    render() {
        return (
            <>
            <button type="button"
                    className={`btn btn-${this.props.clazz}`} onClick={this.props.onClick}>{this.props.text}</button>
            </>
        );
    }
}

export default LoginButton;
