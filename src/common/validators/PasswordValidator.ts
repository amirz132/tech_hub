export interface passWordTestResult {
    message: string;
    isValid: boolean;
}

export const isPassWordValid = (password: string): passWordTestResult => {
    const passWordTestResult: passWordTestResult = {
        message: "",
        isValid: true,
    };

    if (password.length < 8) {
        passWordTestResult.message = "Password must be at least 8 characters";
        passWordTestResult.isValid = false;
        return passWordTestResult;
    }

    const strongPassword = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!strongPassword.test(password)) {
        passWordTestResult.message = 
            "Password must contain at least 1 special character, 1 cap letter, and 1 number";
        passWordTestResult.isValid = false;
    }

        return passWordTestResult;
};