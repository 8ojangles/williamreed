const LoadingSpinner = () => {
    return (
        <div id="loader" role="status">
            <div className="spinner">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        // <div id="loader" role="status">
        //     <svg className="loading-text-anim">
        //         <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        //             WR
        //         </text>
        //     </svg>
        // </div>
    );
};

export { LoadingSpinner };