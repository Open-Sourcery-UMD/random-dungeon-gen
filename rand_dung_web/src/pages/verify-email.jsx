import { Navigate, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Countdown from 'react-countdown';
import { useState } from "react";

const COOLDOWN = 30 * 1000;

export function VerifyEmail({ user, authLoading, onVerified }) {
    const [countdownDate, setCountdownDate] = useState(Date.now() + COOLDOWN);
    const navigate = useNavigate();

    async function verifyEmail() {
        try {
            await sendEmailVerification(user);
            setCountdownDate(Date.now() + COOLDOWN);
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

                    <Countdown date={countdownDate} key={countdownDate} id="verify-email-countdown" renderer={({ seconds, completed }) => (
                        (completed) ?
                            (
                                <Button onClick={verifyEmail} disabled={false}>Resend Verification Email</Button>
                            ) : (
                                <>
                                    <Button onClick={verifyEmail} disabled={true}>Resend Verification Email</Button>
                                    <p className="text-center text-sm text-gray-500">You can resend the verification email in {seconds} seconds.</p>
                                </>
                            )
                        )} />

                    <Button onClick={checkVerified}>Click once Verified</Button>
                </Card>
            </div>
    );
}
