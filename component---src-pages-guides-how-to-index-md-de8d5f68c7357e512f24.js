"use strict";(self.webpackChunkexperience_manager_apis=self.webpackChunkexperience_manager_apis||[]).push([[575],{88011:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(15007),n(64983)),i=n(91515),s=["components"],d={},l={_frontmatter:d},p=i.Z;function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.mdx)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"using-the-openapi-based-apis"},"Using the OpenAPI-based APIs"),(0,o.mdx)("h3",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"AEM as a Cloud Service offers a variety of APIs that adhere to the ",(0,o.mdx)("a",{parentName:"p",href:"https://spec.openapis.org/oas/v3.0.3"},"OpenAPI Specification"),"."),(0,o.mdx)("p",null,"For a full list of provided APIs and supported events, see the ",(0,o.mdx)("a",{parentName:"p",href:"/experience-manager-apis/"},"APIs documentation"),"."),(0,o.mdx)("p",null,"This guide describes the common patterns applying to all APIs."),(0,o.mdx)("h3",{id:"authentication"},"Authentication"),(0,o.mdx)("p",null,"Credentials should be generated using the AEM Developer Console. A short-lived ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/generating-access-tokens-for-server-side-apis.html#generating-the-access-token"},"development access token")," can be generated for one-off API usage, while for persistent code, ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/generating-access-tokens-for-server-side-apis.html?lang=en#generate-a-jwt-token-and-exchange-it-for-an-access-token"},"a longer-lived JWT token")," can be generated to exchange for an access token.  "),(0,o.mdx)("p",null,"Pass the token as the value of the Authorization header as follows:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},'curl -H "Authorization: Bearer <access_token>" <https://<endpoint_url>')),(0,o.mdx)("h3",{id:"json-payloads"},"JSON Payloads"),(0,o.mdx)("p",null,"Clients receiving JSON payload must be forgiving when processing the payload and not fail on additional properties that might not be declared in the schema the client is using. On the other hand clients must be strict when sending a JSON document as part of a request. The document must conform to the used schema."),(0,o.mdx)("h3",{id:"collections-pagination-and-sorting"},"Collections: Pagination and sorting"),(0,o.mdx)("p",null,"Usually an API will support a ",(0,o.mdx)("strong",{parentName:"p"},"limit")," query parameter to indicate the desired number of results to return. Documentation will state the default limit and any minimum or maximum values."),(0,o.mdx)("p",null,"If there are more resources in the collection than returned, the output result will include a ",(0,o.mdx)("strong",{parentName:"p"},"cursor")," property. The cursor's value can then be used in a subsequent LIST API call to retrieve the next set of resources in the collection, by passing the returned value to the ",(0,o.mdx)("strong",{parentName:"p"},"cursor")," query parameter."),(0,o.mdx)("p",null,"Empty collections are represented as an empty array."),(0,o.mdx)("p",null,"If API documentation states that results are sortable, optionally pass the ",(0,o.mdx)("strong",{parentName:"p"},"orderBy")," query parameter a comma separated list of values, each followed by a space and either ",(0,o.mdx)("strong",{parentName:"p"},"asc")," (ascending, which is the default) or ",(0,o.mdx)("strong",{parentName:"p"},"dec")," (descending)."),(0,o.mdx)("h3",{id:"error-handling"},"Error handling"),(0,o.mdx)("p",null,"A 500 error (or other 5xx codes) implies something wrong with the service, while a 400 error (or other 4xx codes) implies the service is rejecting the request due to permissions or data; for example, invalid credentials, incorrect parameters, or unknown version IDs."),(0,o.mdx)("p",null,"Per ",(0,o.mdx)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7807"},"RFC 7808"),", the response may include the following detaiils:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Field"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"type"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"A URI reference that identifies the problem type")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"title"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"A summary of the problem type")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"status"),(0,o.mdx)("td",{parentName:"tr",align:null},"number"),(0,o.mdx)("td",{parentName:"tr",align:null},"The HTTP status code")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"detail"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"Explanation of the problem")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"instance"),(0,o.mdx)("td",{parentName:"tr",align:null},"string"),(0,o.mdx)("td",{parentName:"tr",align:null},"A URI reference that identifies the specific occurrence of the problem")))),(0,o.mdx)("h3",{id:"defending-against-concurrent-update"},"Defending against concurrent update"),(0,o.mdx)("p",null,"When updating a resource, which may also be updated by other clients, first GET the resource and store the resulting ",(0,o.mdx)("strong",{parentName:"p"},"ETag"),". When attempting to update, pass the ETag as a value in an ",(0,o.mdx)("strong",{parentName:"p"},"If-Match")," header. If the resource has been modified by a different client, a 412 Precondition Failed error code is returned."),(0,o.mdx)("h3",{id:"long-running-operations"},"Long-running operations"),(0,o.mdx)("p",null,"Some endpoints may take several seconds or minutes to process the request and respond with the result. In those cases, the API's reference documentation will include ",(0,o.mdx)("strong",{parentName:"p"},"202 Accepted")," as a possible HTTP response status, which indicates that the client must be coded to inspect the result, and be prepared to make additional requests."),(0,o.mdx)("p",null,"If a 202 Accepted is returned, the ",(0,o.mdx)("strong",{parentName:"p"},"Location header")," will include the URI to poll, with the recommending time interval to start polling dictated by the ",(0,o.mdx)("strong",{parentName:"p"},"Retry-After header"),". If, when polled at the URI, the operation is still running, a 202 Accepted is again returned, and Retry-After header may have a new value to signal the recommended time interval to continue polling."),(0,o.mdx)("p",null,"When the operation has completed processing, it will in many cases return with the HTTP response status ",(0,o.mdx)("strong",{parentName:"p"},"303 See Other"),' and a Location header indicating the URI to retrieve the output, as well as JSON output with more information about the final state of processing. Invoking that URI will return an HTTP code of "200 OK" if successful, or the appropriate error code.'),(0,o.mdx)("p",null,'However, note that in the case where the original operation was a GET, instead of a "303 See other" response status and Location header, the client may receive a response of "200 OK" with a status property set to terminated and a result in the ',(0,o.mdx)("strong",{parentName:"p"},"result")," property."),(0,o.mdx)("p",null,"The client can include the Prefer header, whose value is set to its preference for either an asynchronous or synchronous response, which may influence, but does not guarantee, the response pattern. For asynchronous, pass in the value ",(0,o.mdx)("strong",{parentName:"p"},"respond-async"),"; for synchronous, pass in the value ",(0,o.mdx)("strong",{parentName:"p"},"wait")," with the maximum number of seconds it would be willing to wait. If the Prefer header value is honored, the result will set the ",(0,o.mdx)("strong",{parentName:"p"},"Preference-Applied")," header."),(0,o.mdx)("p",null,"If the client has taken too much time to poll, the result may be lost and the URI's HTTP status would return 404 Not Found."),(0,o.mdx)("h3",{id:"versioning"},"Versioning"),(0,o.mdx)("p",null,"The full set of AEM OpenAPI-based APIs gets a version associated with the timing of its release. For example, 2023.9."),(0,o.mdx)("p",null,'Changes to a particular API from one version to the next can only be additive and are thus always backwards compatible. Note that some libraries that are used for parsing JSON have a default configuration that will cause a failure to occur when unexpected properties are found. For example, Jackson, a popular Java library for working with JSON, will throw an UnrecognizedPropertyException in these cases. To avoid these errors from occurring when Adobe adds new properties to existing APIs, the client should configure the library to be forgiving when parsing JSON. For example, in Jackson, the client can set "DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES" to false at the ObjectMapper or "ignoreUnknown" to true at the class level. See the documentation for your JSON parsing library for more information.'),(0,o.mdx)("p",null,"Adobe may deprecate an element of an API by flagging it in documentation as deprecated. If a complete endpoint is deprecated, the response returns a ",(0,o.mdx)("strong",{parentName:"p"},"Sunset")," header, indicating the targeted removal date."),(0,o.mdx)("h3",{id:"experimental-and-unsupported-apis"},"Experimental and Unsupported APIs"),(0,o.mdx)("p",null,"Some APIs are marked in documentation as experimental, which implies that Adobe may modify or remove them without warning. Clients must acknowledge that understanding by including a header ",(0,o.mdx)("strong",{parentName:"p"},"X-Adobe-Accept-Experimental"),' with value of "1". If the invocation of an experimental API does not include this header and value, a 400 status code is returned.'),(0,o.mdx)("p",null,"Some APIs may be discoverable and potentially documented, but not intended for the use of customers, and are thus unsupported; there is a risk of being modified or removed by Adobe without warning. It should be noted that these APIs will only be processed if invoked with a header ",(0,o.mdx)("strong",{parentName:"p"},"X-Adobe-Accept-Unsupported-API"),' with a value of "1".'))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-how-to-index-md-de8d5f68c7357e512f24.js.map