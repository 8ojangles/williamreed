import { RestLink } from 'apollo-link-rest';

// const baseUri = "https://wrextdesign.william-reed.com/tests/practical_react/";
const baseUri = "https://www.top50gastropubs.com/";

const reqHeaders = new Headers();
reqHeaders.append("mode", "no-cors");

const restLink = new RestLink({
    uri: baseUri,
    headers: reqHeaders
});

export { restLink, baseUri };