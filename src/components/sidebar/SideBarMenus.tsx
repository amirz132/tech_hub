import React, { useEffect, useState } from "react";
import { AppState } from "../../store/AppState";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRegistered,
    faSignInAlt,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserProfileSetType } from "../../store/user/Reducer";

const SideBarMenus = () => {
    const user = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "testUser",
            },
        });
    },
    [dispatch]);

return (
    <React.Fragment>
        <ul>
            <li>
            <FontAwesomeIcon icon = {faUser} />
                <span className="menu-name">{user?.userName}
                </span>
            </li>
            <li>
                <FontAwesomeIcon icon = { faRegistered } />
                <span className="menu-name">Register</span>
            </li>
        </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
