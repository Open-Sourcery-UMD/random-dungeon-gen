import { Navigate, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function VerifyEmail({ user, authLoading, onVerified }) {
    const navigate = useNavigate();

    async function verifyEmail() {
        try {
            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox.");
        } catch {
            alert("Could not send the verification email. Please try again.");
        }
    }

    async function checkVerified() {
        try {
            await user.reload();
            if (user.emailVerified) {
                onVerified?.();
                navigate("/dashboard", { replace: true });
            } else {
                alert("Email not verified yet. Please check your inbox.");
            }
        } catch {
            alert("Could not check verification status. Please try again.");
        }
    }

    if (authLoading) return <p>Checking sign-in…</p>;
    if (!user) return <Navigate to="/" replace />;
    if (user.emailVerified) return <Navigate to="/dashboard" replace />;

    return (
            <div className="w-full flex flex-col items-center justify-center gap-10 pt-10">
                <Card className="w-100 p-5">
                    <CardHeader>
                        <CardTitle>Verify your email</CardTitle>
                        <CardDescription>
                        Check your inbox for the verification link.
                        </CardDescription>
                    </CardHeader>

                    <Button onClick={verifyEmail}>Resend Verification Email</Button>
                    <Button onClick={checkVerified}>Click once Verified</Button>
                </Card>
            </div>
    );
}
