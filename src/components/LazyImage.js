import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgLoading from '../images/png/imageLoading64.png';
import imgNotFound from '../images/png/imageNotFound64.png';
import { baseUri } from '../api/config';

const LazyImage = ({ imgUrl, imgAlt, scrollPosition }) => {

    const [ imgLoadError, setImgLoadError ] = useState(false);
    const [ defaultVisibility, setDefaultVisibility ] = useState(false);

    const handleImageLoadSuccess = () => {
        setDefaultVisibility(true);
    }

    const handleImgLoadError = () => {
        setImgLoadError(true);
    }

    return (
        <div>
            {imgLoadError === false ? (
               <LazyLoadImage
                    threshold={250}
                    effect="opacity"
                    alt={`Image of exception food from ${imgAlt}`}
                    width={436}
                    height={245}
                    src={`${baseUri}${imgUrl}`} // use normal <img> attributes as props
                    placeholderSrc={imgLoading}
                    scrollPosition={scrollPosition}
                    onError={handleImgLoadError}
                    onLoad={handleImageLoadSuccess}
                    visibleByDefault={defaultVisibility}
                />
            ) : (
                <img width={64} height={64} src={imgNotFound} alt={`There was supposed to be an mage of exception food from ${imgAlt}, but it didnt load unfortunately, so we are showing you a placeholder instead. Enjoy!`}/>
            )}
        </div>
    );
};

export { LazyImage };