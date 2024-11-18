import React, { memo } from 'react';

const TabContentItem = memo(({ active, tabId, dataValue, addClass, contents }) => {

    const parentClasses = `tab-content${Number(active) === Number(tabId) ? ' current': ''}`;
    const childClasses = `list ${addClass ? addClass : ''}`;
    const thisId = `tab-${tabId}`;
    return (
        <div
            id={thisId}
            data-list={dataValue}
            className={parentClasses}
        >
            <div className={childClasses}>
                {contents}
            </div>
        </div>
    );
});

const TabNavigationContainerItem = ({ children, label, onClickHandler, addClasses }) => {

    const classList = `tab-link ${addClasses ? addClasses : ''}`;

    return (
        <li className={classList}>
            <span onClick={onClickHandler}>{label}</span>
            {children && children}
        </li>
    );
};


const TabNavigationItem = memo(({ label, value, active, tabId, onClickHandler }) => {

    const classList = `${Number(tabId) === Number(active) ? 'active' : ''}`;

    return (
        <li className="tab-link" value={value}>
            <span className={classList} onClick={onClickHandler}>{label}</span>
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