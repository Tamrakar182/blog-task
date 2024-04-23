import RegisterSection from '../../../section/RegisterSection';
import AuthLayout from '../../../layout/auth';

function RegisterRoute() {
    return (
        <AuthLayout>
            <RegisterSection />
        </AuthLayout>
    );
}

export { RegisterRoute }