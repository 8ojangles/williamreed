import { WrSvgIcon } from './WrSvgIcon';

const LoadingSpinner = ({ alternate }) => {
    return (
        <div id="loader" role="status">
        {alternate ? (
            <div id="loader" role="status">
                <WrSvgIcon />
            </div>
        ) : (
            <div className="spinner">
                <span className="sr-only">Loading...</span>
            </div>
        )}
        </div>
    );
};

export { LoadingSpinner };