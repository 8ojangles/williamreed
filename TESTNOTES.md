# William Reed Test - Notes

Using the provided base as a foundation I have ported the majority (if not all) of the UI functionality to REACT, such as menus and fixed header on scroll. Some of these were achieved via custom hooks or refactoring the original javascript to REACT functionality.

## Data

As reported to the team previously there was a CORS issue with calling the data from the external test folder. Originally I overcame this through a Chrome plug-in (available through the Chrome Extenstions web-store - CORS Unblock, many others are available). Without changes to the server configuration to allow access this would not work when deployed.

I have, therefore, created a mocked data fetch using a local data file, simulating a data fetch for the purposes of the demo/test. I have left that version in the repository if the team wishes to look at it (PageExternalData.js).

If running the project locally (with a CORS browser plug-in) change the import in `App.js`:

From:
#### `import Page from './components/Page';`
To:
#### `import Page from './components/PageExternalData';`

Note that this version of the page was halted and will not contain all of the functionality.

## Filtering and Sorting
The Page operates as a tabbed content page, initially loading with the first tab content displayed.

This is the "Top 50" restaurants filtered list.

The other tabs ("51-100" and "Specialist Awards") will show filtered data based on the requirements. "Specialist Awards" will show a list of restaurants where the respective data contains a "Tags" array containing items (from the data "Top 50").

I have added the sorting functionality as part of the Tab menu. Clicking the "Sort by" label will open the sorting options, and selecting an available option will resort and render the list.

I have persisted the list sorting across the tabbed filtered lists. Therefore sorting for "Name (ascending)", for example, and clicking on another tab will show that data set sorted via that sort option. This is UX choice, and in the real world, should a Designer/UX/Product owner wish to reset the sorting across tab changes that would be a one-liner code change.

Filter and Sort functionality are in their respective files in the `utilities` folder.

## Libraries

Of the installed node libraries there are a few of note:

### `react-lazy-load-image-component`
This is used for the purposes of lazy loading images across the tabs based on visibility within the browser window.

Although this could have been achieved with an custom intersection-observer hook, I have used this library before. The significant functionality it offers is the ability to, instead of attaching observers to each image (which can lead to performance bottle-necks in itself), multiple images attach to a single scroll-position observer on a parent element, reducing calculations and improving perfdormance greatly. This is highly beneficial in the case of catalogue pages like this with numerous images.

Image loading can be observed via the network tab of the browsers developer tools.

### `@apollo/client apollo-link-rest graphql qs`
These are all for the purposes of data fetching. Although they are not used within the final demo I have left these as the old `PageExternalData` utilises them.
One thing of note is `apollo-link-rest` which allows for fetching to standard REST endpoints but in a `graphql` style.

### `gh-pages`
Used to deploy a built React application to Github Pages.

## Performance
Within the application files, where possible, I have used techniques to minimise re-renders and expensive computations, for example the initial filtering on data load, or sorting.

These generate "memo"ed lists of components that should only re-compute and re-render when changes occur (such as the sort option).

## Code
Where possible the components have been created to follow a composition methodology. In a larger application this would be key for reusablility and maintainability. Some components are naturally linked together (such as the tab navigation and tab content components) but even these could be decomposed into smaller and smaller pieces of functionality as requirements or technical choices are made during an applications lifecycle.

Within a commercial/production setting there would be a low level component Style library for primitives (such as text compomonents, images, icons, etc...) which would be used within compositions, then features and finally pages.

## Easter Egg

If you've got this far, well done. As a prize, if you have cloned the repository to run locally, open `Page.js` in VS-Code (or your preferred code editor) and change line 161 (or there abouts) from:
#### `<LoadingSpinner alternate={false} />`
to
#### `<LoadingSpinner alternate={true} />`
Save, run `npm start` in the terminal and open `localhost:3000` in your browser!