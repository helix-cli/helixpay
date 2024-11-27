import React from "react";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-gray-50 shadow-md">
            <div className="flex items-center space-x-2">
                <div className="text-green-500 font-bold text-lg flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 3H5a2 2 0 00-2 2v16a2 2 0 002 2h9M20 3v10M20 21V11"
                        />
                    </svg>
                    <span>FluxCRM</span>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex items-center space-x-6">
                <a
                    href="#"
                    className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-gray-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h6l7 9-7 9H3m12 0h6M3 12h13"
                        />
                    </svg>
                    <span>Dashboard</span>
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Analytics
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Products
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Invoices
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Calendar
                </a>
            </nav>

            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 7h.01M11 7h.01M7 7h.01M12 11v1m0 4v1m0-6a4 4 0 100-8 4 4 0 000 8z"
                        />
                    </svg>
                </button>
                <button className="relative text-gray-600 hover:text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                </button>
                <div className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/32"
                        alt="User Avatar"
                        className="h-8 w-8 rounded-full"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;
