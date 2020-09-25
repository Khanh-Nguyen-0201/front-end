import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import ResponsiveDrawer from "../_components/ResponsiveDrawer";
// import './homepage.module.css'

const HomePage = (props) => {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div>
            <ResponsiveDrawer></ResponsiveDrawer>
        </div>
    );
}

export { HomePage };
