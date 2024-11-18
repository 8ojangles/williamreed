import React, { memo } from 'react';
import { simpleAddressFormatter } from './../utilities/address';
import { LazyImage } from './LazyImage';

const Card = memo(({ pub, showRanking = true, showInfo = false, introDelay, scrollPosition }) => {
    const addressString = simpleAddressFormatter(pub.address);
    if (pub.id === '1590314') {
        console.log('Card render', pub.id);
    }
    const classList = 'card-intro';

    return (
        <a href={pub.content_url}>
            <div className={classList} style={{ animationDelay: `${introDelay}ms`}}>
                <LazyImage imgUrl={pub.picture} imgAlt={pub.name} />
                <div className="the-list-meta">
                    {showRanking ? (
                        <>
                            <p className="the-list-number"><span>{pub.rank}</span></p>
                            <div className="the-list-info">
                                <h2>{pub.name}</h2>
                                <p>{addressString}</p>
                            </div>
                        </>
                    ) : (
                    <>
                        <h2>{pub.name}</h2>
                        {showInfo ? (
                            <p>{pub.tags[0]} ({pub.rank})</p>
                        ) : (
                            <p>{addressString}</p>
                        )}
                    </> 
                    )}
                </div>
            </div>
        </a>
    );
});

export { Card };