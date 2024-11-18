import React, { memo } from 'react';
import { FacebookSvgIcon } from './FacebookSvgIcon';
import { InstagramSvgIcon } from './InstagramSvgIcon';
import { TwitterSvgIcon } from './TwitterSvgIcon';

const SocialLinks = memo(() => {
    return (
        <div className="social">
            <a href="/#">
                <FacebookSvgIcon />
            </a>
            <a href="/#">
                <InstagramSvgIcon />
            </a>
            <a href="/#">
                <TwitterSvgIcon />
            </a>
        </div>
    );
});

export { SocialLinks };