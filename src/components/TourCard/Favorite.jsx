import React, { useState } from 'react';

const SvgButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button onClick={handleClick}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isActive ? 'currentColor' : 'none'}
                stroke={isActive ? 'none' : 'gray'}
                strokeWidth="2"
                className={isActive ? 'text-red-600' : 'text-gray-400'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
            </svg>
        </button>
    );
};

export default SvgButton;