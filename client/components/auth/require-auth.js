import React, { Component } from 'react';  
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/auth_actions';


export default function(ComposedComponent) {  
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() { 
      const key = 'Andelahellobooks';
      const token = localStorage.getItem('token');
      if (token) {
        jwt.verify(token, key, (error) => {
          if (error) {
          this.props.actions.logout();
          this.context.router.history.push('/');
          }
        });
      }
      if (!this.props.authenticated) {
        this.context.router.history.push('/');
      }
      if(!this.props.authenticated) {
        this.context.router.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        logout,
      }, dispatch)
    };
  }

   function mapStateToProps(state) {
    return { 
      authenticated: state.auth.authenticated,
      user: state.auth.user
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}