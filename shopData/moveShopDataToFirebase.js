export const addCollectionAndDocuments = async(
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc(); //.doc() is telling firebase that create a ref and randomly give it an unique ID
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};


//after adding this code inside your firebase.utils.js
// we need to run this code from somewhere we can access shop data
// AND WE ONLY NEED TO RUN THIS FUNCTION ONCE
// NATURALLY we will use App.js to do that

// ONLY RUN THIS **** ONCE ONCE ONCE ****
// run NPM start only after adding all of this code
// Remove all the code form app.js once its done

// APP.js
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'; //EDITED

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'; //EDITED
class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser, collectionsArray } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
            addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items }))); //EDITED -> main line
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return ( <
            div >
            <
            Header / >
            <
            Switch >
            <
            Route exact path = '/'
            component = { HomePage }
            /> <
            Route path = '/shop'
            component = { ShopPage }
            /> <
            Route exact path = '/checkout'
            component = { CheckoutPage }
            /> <
            Route exact path = '/signin'
            render = {
                () =>
                this.props.currentUser ? ( <
                    Redirect to = '/' / >
                ) : ( <
                    SignInAndSignUpPage / >
                )
            }
            /> < /
            Switch > <
            /div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview //EDITED
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);