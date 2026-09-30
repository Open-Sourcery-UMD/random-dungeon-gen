import { Navigate } from "react-router-dom";

export function RequireVerifiedUser({ user, authLoading, children }) {
    if (authLoading) return <p>Checking sign-in…</p>;
    if (!user) return <Navigate to="/login" replace />;
    if (!user.emailVerified) return <Navigate to="/verify-email" replace />;

    return children;
}
