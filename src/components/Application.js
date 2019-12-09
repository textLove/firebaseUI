import React, { PropTypes } from 'react';
// import MessagesContainer from '../containers/MessagesContainer';
// import NewMessageContainer from '../containers/NewMessageContainer';
// import SignIn from './SignIn';
// import CurrentUser from './CurrentUser';
// import Loading from './Loading';
// import './Application.css';

// const Application = ({ auth, signIn, signOut }) => {
//   return (
//     <main className="Application">
//       <div className="Application--sidebar">
//         { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
//         { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
//         { auth.status === 'SIGNED_IN' && <NewMessageContainer /> }
//         { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
//       </div>
//       <MessagesContainer />
//     </main>
//   );
// };
const Application = () => {
  return (
    <form action="#" className="bg-white rounded pb_form_v1">
      <h2 className="mb-4 mt-0 text-center">Sign Up for Free</h2>
      <div className="form-group">
        <input type="text"
          className="form-control pb_height-50 reverse"
          placeholder="Full name" />
      </div>
      <div className="form-group">
        <input type="text"
          className="form-control pb_height-50 reverse"
          placeholder="Email" />
      </div>
      <div className="form-group">
        <div className="pb_select-wrap">
          <select className="form-control pb_height-50 reverse">
            <option value="" selected>Type</option>
            <option value="">Basic</option>
            <option value="">Business</option>
            <option value="">Free</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <input type="submit"
          className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue"
          value="Register" />
      </div>
    </form>
  )
}

Application.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Application;
