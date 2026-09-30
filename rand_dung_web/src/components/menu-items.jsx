import { Link } from 'react-router-dom';

export function VerifiedMenuItems() {
    return (
        <Link className="block rounded px-3 py-2 hover:bg-slate-100" to="/dashboard">
            Dashboard
        </Link>
    );
}

export function VerifyEmailItems() {
    return (
        <Link className="block rounded px-3 py-2 hover:bg-slate-100" to="/verify-email">
            Verify Email
        </Link>
    );
}

export function UnverifiedMenuItems() {
    return (
        <>
            <Link className="block rounded px-3 py-2 hover:bg-slate-100" to="/login">
                Login
            </Link>
            <Link className="block rounded px-3 py-2 hover:bg-slate-100" to="/signup">
                Sign Up
            </Link>
        </>
    );
}
