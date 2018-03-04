import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">WG-Ausgaben</h1>
      <p className="box-layout__text">Gemeinsam die WG-Finanzen managen</p>
      <button className="btn" onClick={startLogin}>Login mit Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
