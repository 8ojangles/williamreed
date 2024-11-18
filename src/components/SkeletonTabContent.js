import React, { memo } from 'react';
import { SkeletonCard } from './SkeletonCard';

const SkeletonTabContent = memo(({ numberCards }) => {
    return (
        <div
            id="Skeleton-loader-tab-content"
            className="tab-content current"
        >
            <div className="list">
                {[...Array(numberCards)].map((card, index) => <SkeletonCard key={`Skeleton-card-${index}`} />)}
            </div>
        </div>
    );
});

export { SkeletonTabContent };