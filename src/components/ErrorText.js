import React from 'react';

const ErrorText = () => {
    return (
        <div className="error">
            <p>There was an error fetching the data.</p>
            <p>Please try again later.</p>
        </div>
    );
};

export { ErrorText };