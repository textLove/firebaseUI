import React from 'react';
import { database } from '../firebase';
const uuidv1 = require('uuid/v1');


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegisterd: false,
            name: '',
            email: '',
            type: 'free'
        }
    }
    submit() {
        const { name, type, email } = this.state;
        const ID = uuidv1();
        var that = this;
        if (name) {
            database.ref('users')
                .child(ID)
                .set({ name, type, email }).then((dt) => {
                    this.setState({
                        isRegisterd: true
                    }, () => {
                        window.setTimeout(() => {
                            that.setState({ isRegisterd: false })
                        }, 3000)
                    })
                });
        }
    }
    render() {
        return (
            <div>
                {this.state.isRegisterd ? (<div className="bg-white rounded pb_form_v1">
                    <h4>Thank you for registering :)</h4>
                </div>) :
                    (<form onSubmit={(e) => { this.submit(); e.preventDefault(); }}
                        action="#" className="bg-white rounded pb_form_v1">
                        <h2 className="mb-4 mt-0 text-center">Sign Up for Free</h2>
                        <div className="form-group">
                            <input type="text"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value.trim() })}
                                className="form-control pb_height-50 reverse"
                                placeholder="Full name" />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value.trim() })}
                                className="form-control pb_height-50 reverse"
                                placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <div className="pb_select-wrap">
                                <select
                                    value={this.state.type}
                                    onChange={(e) => this.setState({ type: e.target.value.trim() })}
                                    className="form-control pb_height-50 reverse">
                                    <option value="free">Free</option>
                                    <option value="basic">Basic</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
                                value="Register" />
                        </div>
                    </form>)}
            </div>
        )
    }
}

export default RegisterForm;