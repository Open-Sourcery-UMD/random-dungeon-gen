import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { SignUpAuthForm } from "@/components/sign-up-auth-form";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();

    function handleNewAcc(credential) {
        const user = credential?.user ?? credential;

        if (!user?.emailVerified) {
            navigate("/verify-email");
            return;
        }

        navigate("/dashboard");
    }

    return (
        <div class="w-full flex flex-col items-center justify-center gap-10 pt-10">
            <div class="w-100">
                <SignUpAuthForm onSignUp={handleNewAcc} />
            </div>

            <h4>or</h4>

            <div class="w-100">
                <GoogleSignInButton onSignIn={handleNewAcc} />
            </div>
        </div>
    )
}