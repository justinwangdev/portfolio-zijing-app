import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
    ? 'text-secondary-500 border-b border-secondary-500 hover:border-primary-400' 
    : 'text-secondary-600';

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-secondary-400 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton