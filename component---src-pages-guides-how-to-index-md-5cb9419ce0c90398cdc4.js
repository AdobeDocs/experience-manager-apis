"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[575],{88011:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return m}});var o,a=n(87462),r=n(63366),i=(n(15007),n(64983)),s=n(91515),l=["components"],d={},u=(o="DiscoverBlock",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:d},h=s.Z;function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(u,{slots:"heading, link, text",mdxType:"DiscoverBlock"}),(0,i.mdx)("h2",{id:"how-to-use-aem-apis"},"How to use AEM APIs"),(0,i.mdx)("h3",{id:"introduction"},"Introduction"),(0,i.mdx)("p",null,"List (GET) which returns a collection, GET, CREATE, UPDATE, DELETE, custom operations.\nFunctionality is grouped at a high level using the API name, e.g. assets or reports."),(0,i.mdx)("h3",{id:"authentication"},"Authentication"),(0,i.mdx)("p",null,"describe how to pass the Authorization header with value Bearer ",(0,i.mdx)("inlineCode",{parentName:"p"},"<IMS access token>")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'curl -H "Authorization: Bearer <your_ims_access_token>" <URI>'))),(0,i.mdx)("p",null,"Describe how to, from code, generate the access token from a JWT token"),(0,i.mdx)("h3",{id:"error-handling"},"Error handling"),(0,i.mdx)("p",null,"5xx errors imply something wrong with the service, while 4xx errors imply the service rejecting the request due to something related to permissions or the data. E.g. invalid credentials, incorrect parameters, unknown version IDs\ntype (string) - A URI reference ","[RFC3986]"," that identifies the problem type. This specification encourages that, when dereferenced, it provide human-readable documentation for the problem type (e.g., using HTML ","[W3C.REC-html5-20141028]",'). When this member is not present, its value is assumed to be "about:blank".'),(0,i.mdx)("p",null,"title (string) - A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization (e.g., using proactive content negotiation; see ","[RFC7231]",", Section 3.4).\nstatus (number) - The HTTP status code (","[RFC7231]",", Section 6) generated by the origin server for this occurrence of the problem.\ndetail (string) - A human-readable explanation specific to this occurrence of the problem.\ninstance (string) - A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced."),(0,i.mdx)("h3",{id:"data-models"},"Data Models"),(0,i.mdx)("p",null,"should be defined in an Adobe AEM repository (are they?)"),(0,i.mdx)("h3",{id:"collections-pagination-and-sorting"},"Collections: Pagination and sorting"),(0,i.mdx)("p",null,"Pagination:"),(0,i.mdx)("p",null,'typically an API will have query parameter called limit, which is a hint (but not guaranteed to be respected) to the API of how many results in the list to return. An API\'s documentation will state the default limit and any minimum or maximum values.\nIf there are more resources in the collection, the output result will include a parameter "cursor", which can be used in the LIST API call to retrieve the next set of resources in the collection.\nempty collections are an empty array\nIf API documentation states that results are sortable, pass in the sorting criteria as a comma separated list for the orderBy query parameter. The API may support an asc (ascending) or desc (descending)  value, which should follow the property name by a space. Ascending is the default.'),(0,i.mdx)("h3",{id:"defending-against-concurrent-update"},"Defending against concurrent update"),(0,i.mdx)("p",null,"If a resource is potentially update-able by multiple clients, first GET the resource, whose result will include an ETag. In the attempt to update, pass the ETag as a value in an If-Match header. If the resource has been modified by a 412 Precondition Failed error code"),(0,i.mdx)("h3",{id:"long-running-operations"},"Long-running operations"),(0,i.mdx)("p",null,"Some API operations may require many seconds or minutes to process the request and respond with the result. In those cases, the API's reference documentation will include 202 Accepted as a possible  HTTP response status, in which case the client must be coded to inspect the result; if make subsequent requests to retrieve the result."),(0,i.mdx)("p",null,'The client can include the Prefer header, whose value is set to its preference for either an asynchronous or synchronous response, which may influence, but does not guarantee, the response pattern. For asynchronous, pass in the value "respond-async"; for synchronous, pass in the value "wait" with the maximum number of seconds it would be willing to wait. If the Prefer header value is honored, the result will set the Preference-Applied header.'),(0,i.mdx)("p",null,"If a 202 Accepted is returned, the Location header will include the URI to poll, with the recommending time interval to start polling dictated by the Retry-After header."),(0,i.mdx)("p",null,"If, when polled at the URI, the operation is still running, a 202 Accepted is again returned, and Retry-After header may have a new value to signal the recommending time interval to continue polling."),(0,i.mdx)("p",null,'When the operation has completed processing, it will in many cases return with an HTTP response status "303 See Other" and a Location header indicating the URI to retrieve the output, as well as JSON output with more information about the final state of processing. Invoking that URI will return an HTTP code of "200 OK" if successful, or the appropriate error code.'),(0,i.mdx)("p",null,'However, note that in the case where the original operation was a GET, instead of a "303 See other" response status and Location header, the client may receive a response of "200 OK" with a status property set to terminated and a result in the "result" property.'),(0,i.mdx)("p",null,"If the client has taken too much time to poll, the result may be lost and the URI's HTTP status would return 404 Not Found."),(0,i.mdx)("h3",{id:"versioning"},"Versioning"),(0,i.mdx)("p",null,"The full set of AEM APIs gets a version associated with the timing of its release. For example, 2023.9."),(0,i.mdx)("p",null,"Changes to a particular API from one version to the next can only be additive and thus always backwards compatible."),(0,i.mdx)("p",null,"Adobe may deprecate an API by communicating via documentation, which will specify the API's targeted removal date."),(0,i.mdx)("h3",{id:"experimental-and-unsupported-apis"},"Experimental and Unsupported APIs"),(0,i.mdx)("p",null,'Some APIs are marked in documentation as experimental, which implies that Adobe may modify or remove them without warning. Clients must acknowledge that understanding by including a header X-Adobe-Accept-Experimental with value of "1". If the invocation of an experimental API does not include this header and value, an HTTP status code of 400 status code is returned.'),(0,i.mdx)("p",null,'Some APIs may be discoverable and even documented, but not intended for the use of customers, and are thus unsupported; they may be modified or removed by Adobe at any time. It should be noted that these APIs will only be processed if invoked with a header X-Adobe-Accept-Unsupported-API with a value of "1".'))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-how-to-index-md-5cb9419ce0c90398cdc4.js.map