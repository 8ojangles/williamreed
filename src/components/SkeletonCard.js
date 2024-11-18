import React, { memo } from 'react';

const SkeletonCard = memo(() => {
    return (
        <a href="/" className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="the-list-meta">
                <p className="the-list-number"><span></span></p>
                <div className="the-list-info">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    );
});

export { SkeletonCard };