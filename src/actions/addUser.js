


export const startListeningToRegister = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signedIn(user));
                database.ref('users')
                    .child(user.uid)
                    .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
                database.ref('admins').child(user.uid)
                    .once('value')
                    .then((snapshot => {
                        if (snapshot.val()) dispatch({ type: 'SET_AS_ADMIN' });
                    }));
                registerMessaging(user);
            } else {
                dispatch(signedOut());
            }
        });
    };
};
