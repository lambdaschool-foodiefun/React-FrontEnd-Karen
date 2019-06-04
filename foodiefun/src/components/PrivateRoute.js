// import React from 'react';
// import { Route, Redirect, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

// const PrivateRoute = ({
//   component: Component,
//   token,
//   errorStatusCode,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         token && errorStatusCode !== 403 ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// const mapStateToProps = ({ token, errorStatusCode }) => ({
//   errorStatusCode,
//   token
// });


// export default withRouter(
//   connect(
//     mapStateToProps,
//     {}
//   )(PrivateRoute)
// );
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
