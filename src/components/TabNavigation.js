import React, { memo } from 'react';

const TabContentItem = ({ children, active, tabId, dataValue, addClass }) => {

    return (
        <div
            id={`tab-${tabId}`}
            data-list={dataValue}
            className={`tab-content${Number(active) === Number(tabId) ? ' current': ''}`}
        >
            <div className={`list ${addClass ? addClass : ''}`}>
                {children}
            </div>
        </div>
    );
}

const TabNavigationContainerItem = ({ children, label, onClickHandler, addClasses }) => {
    return (
        <li className={`tab-link ${addClasses ? addClasses : ''}`}>
            <span onClick={onClickHandler}>{label}</span>
            {children && children}
        </li>
    );
}


const TabNavigationItem = memo((props) => {

    const { label, value, active, tabId, onClickHandler } = props;

    return (
        <li className="tab-link" value={value}>
            <span className={`${Number(tabId) === Number(active) ? 'active' : ''}`} onClick={onClickHandler}>{label}</span>
        </li>
    );
});


const TabNavigation = ({ children, title }) => {

    return (
        <div className="row-background the-list bg-pattern">
            <div className="row row-title">
                <div className="list-title">
                    <h1>{title}</h1>

                    <ul className="tabs list-nav" compact="List nav">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { TabNavigation, TabNavigationItem, TabContentItem, TabNavigationContainerItem };