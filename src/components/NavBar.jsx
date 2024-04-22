import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="sticky inset-0 bg-[#7CCFF2] w-full">
            <ul className="flex flex-row w-full h-full justify-between">
                <li className="p-6">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-6">📚Blog Reader📚</li>
                <div>
                    <li className="p-6">
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}