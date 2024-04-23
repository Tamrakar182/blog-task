import LoginSection from '../../../section/LoginSection';
import AuthLayout from '../../../layout/auth';

function LoginRoute() {
    return (
        <AuthLayout>
            <LoginSection />
        </AuthLayout>
    );
}

export { LoginRoute }