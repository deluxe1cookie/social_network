import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Element} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) return <Redirect to='/profile'/>;

    return (
        <div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const Input = Element('input');
let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Input} validate={[required]} name='email' type="text" placeholder='email'/>
            <Field component={Input} validate={[required]} name='password' type="password" placeholder='password'/>
            <Field component='input' name='rememberMe' type='checkbox'/> remember me
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
LoginForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
export default connect(mapStateToProps, {login})(Login);