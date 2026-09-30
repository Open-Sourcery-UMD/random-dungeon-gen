import { GoogleSignInButton } from "@/components/google-sign-in-button";
import { SignInAuthForm } from "@/components/sign-in-auth-form";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    function handleSignIn(credential) {
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
                <SignInAuthForm onSignIn={handleSignIn} />
            </div>

            <h4>or</h4>

            <div class="w-100">
                <GoogleSignInButton onSignIn={handleSignIn} />
            </div>
        </div>
    )
}