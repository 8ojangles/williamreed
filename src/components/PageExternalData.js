import React, { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PUBS } from './../api/queries';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { filterByParamRange, filterByParamValue } from './../utilities/filters';
import { Card } from './Card';
import { TabNavigation, TabNavigationItem, TabContentItem, TabNavigationContainerItem } from './TabNavigation';
import { Branding } from './Branding';
import { Header } from './Header';
import { FooterLogos } from './FooterLogos';
import { Footer } from './Footer';
import { DropDownList } from './DropDownList';
import { LoadingSpinner } from './LoadingSpinner';
import { sortListOptions, getSortLabel, getSortFunction } from './../utilities/sorting';

const Page = ({ scrollPosition }) => {
    const { loading, error, data } = useQuery(GET_PUBS);
    const [ selectedTab, setSelectedTab ] = useState(1);
    const [ openSortList, setOpenSortList ] = useState(false);
    const [ selectedSortOption, setSelectedSortOption ] = useState('rankAsc');
    
    // Have to catch menu button click to toggle body scrolling
    // Not "React way", but it works for this demo
    const catchNavMenuHandler = useCallback(() => {
        document.querySelector('body').classList.toggle('scrolling');
    }, []);

    const handleOnClickSortList = useCallback((e) => {
        setOpenSortList(!openSortList);
    }, [openSortList]);

    const closeSortList = useCallback((e) => {
        setOpenSortList(false);
    }, []);

    const sortListClickHandler = useCallback((e) => {
        const selectedOption = e.target.parentElement.getAttribute('data-value');
        if (selectedOption === selectedSortOption || selectedOption === null) {
            return;
        }
        setSelectedSortOption(selectedOption);
        closeSortList();
    }, [selectedSortOption, closeSortList]);

    const tabNavClickHandler = useCallback((e) => {
        setSelectedTab(e.target.parentElement.getAttribute('value'));
    }, []);

    const filteredItems = useMemo(() => {
        if (!data) {
            return undefined;
        }
        return {
            top50: filterByParamRange(data.pubs, 'rank', 1, 50),
            top100: filterByParamRange(data.pubs, 'rank', 51, 100),
            specialistAwards: filterByParamValue(data.pubs, 'tags', 'Top 50')
        };
    }, [data]);

    const sortedItems = useMemo(() => {
        if (!filteredItems) {
            return undefined;
        }

        const sortFn = getSortFunction(selectedSortOption);
        const dropDownLabel = getSortLabel(selectedSortOption);
        const items = {
            dropDownLabel,
            top50: filteredItems.top50.toSorted(sortFn),
            top100: filteredItems.top100.toSorted(sortFn),
            specialistAwards: filteredItems.specialistAwards.toSorted(sortFn)
        };
        return items;
    }, [filteredItems, selectedSortOption]);

    const top50List = useMemo(() => {
        if (!sortedItems) {
            return undefined;
        }
        return sortedItems.top50.map((pub, index) => {
            const delay = index * 100;
            return (<Card key={pub.id} pub={pub} introDelay={delay} scrollPosition={scrollPosition} />);
        });
    }, [sortedItems, scrollPosition]);

    const top100List = useMemo(() => {
        if (!sortedItems) {
            return undefined;
        }
        return sortedItems.top100.map((pub, index) => {
            const delay = index * 100;
            return (<Card key={pub.id} pub={pub} introDelay={delay} scrollPosition={scrollPosition} />);
        });
    }, [sortedItems, scrollPosition]);

    const specialistAwardsList = useMemo(() => {
        if (!sortedItems) {
            return undefined;
        }
        return sortedItems.specialistAwards.map((pub, index) => {
            const delay = index * 100;
            return (<Card key={pub.id} pub={pub} showRanking={false} showInfo={true} introDelay={delay} scrollPosition={scrollPosition} />);
        });
    }, [sortedItems, scrollPosition]);

    const dropDownLabel = getSortLabel(selectedSortOption);

    return (
        <> 
            <Branding />
            <Header catchNavMenuHandler={catchNavMenuHandler} />
            <TabNavigation title="The Top Gastropubs">
                <TabNavigationItem
                    key={`tab-nav-1`}
                    tabId={1}
                    label="1-50"
                    value="1"
                    onClickHandler={tabNavClickHandler}
                    active={selectedTab}
                />
                <TabNavigationItem
                    key={`tab-nav-2`}
                    tabId={2}
                    label="51-100"
                    value="2"
                    onClickHandler={tabNavClickHandler}
                    active={selectedTab}
                />
                <TabNavigationItem
                    key={`tab-nav-3`}
                    tabId={3}
                    label="Specialist
                    Awards"
                    value="3"
                    onClickHandler={tabNavClickHandler}
                    active={selectedTab}
                />
                <TabNavigationContainerItem
                    label={`Sort by: ${dropDownLabel}`} addClasses={`sort-list-menu ${openSortList ? 'active' : ''}`}
                    onClickHandler={handleOnClickSortList}
                >
                    <DropDownList
                        isOpen={openSortList}
                        listArray={sortListOptions} optionClickHandler={sortListClickHandler}
                        selectedOption={selectedSortOption}
                    />
                </TabNavigationContainerItem>
            </TabNavigation>
            <div className="row-background the-list">
                <div className="half-background bg-pattern"></div>
                <div className="row">
                    {loading && !data && (
                        <LoadingSpinner />
                    )}
                    {filteredItems && (
                        <> 
                            <TabContentItem
                                key={`tab-content-1`}
                                tabId={1}
                                active={selectedTab}
                                dataValue={"1-50"}
                                contents={top50List}
                            />
                            <TabContentItem
                                key={`tab-content-2`}
                                tabId={2}
                                active={selectedTab}
                                dataValue={"51-100"}
                                contents={top100List}
                            />
                            <TabContentItem
                                key={`tab-content-3`}
                                tabId={3}
                                active={selectedTab}
                                dataValue={"Specialist-Awards"}
                                addClass="awards"
                                contents= {specialistAwardsList}
                            />
                        </>
                    )}
                </div>
            </div>

           <FooterLogos />

           <Footer />
        </>
    );
}

export default trackWindowScroll(Page);