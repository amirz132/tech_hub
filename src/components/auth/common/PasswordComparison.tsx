import React, { FC } from "react";
import { allowSubmit } from "./Helpers";
import {
    isPassWordValid,
    passWordTestResult,
} from "../../../common/validators/PasswordValidator";

interface PasswordComparisonProps {
    dispatch: React.Dispatch<any>;
    password: string;
    passwordConfirm: string;
}

const PasswordComparison: FC<PasswordComparisonProps> = ({
    dispatch,
    password,
    passwordConfirm,
}) => {
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "password" });
        const passwordCheck: passWordTestResult = isPassWordValid(e.target.value);

        if(!passwordCheck.isValid) {
            allowSubmit(dispatch, passwordCheck.message, true);
            return;
        }
        passwordsSame(passwordConfirm, e.target.value);
    };

    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "passwordConfirm" });
        passwordsSame(password, e.target.value);
    };

    const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowSubmit(dispatch, "Passwords do not match", true);
            return false;
        } else {
            allowSubmit(dispatch, "", false);
            return true;
        }
    };

    return (
        <React.Fragment>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div>
                <label>Password Confirmation</label>
                <input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={onChangePasswordConfirm}
                />
            </div>
        </React.Fragment>
    );
};

export default PasswordComparison;