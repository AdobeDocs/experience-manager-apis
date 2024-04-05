"use strict";(self.webpackChunkexperience_manager_apis=self.webpackChunkexperience_manager_apis||[]).push([[770],{19580:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return b}});var n,i=t(87462),r=t(63366),s=(t(15007),t(64983)),o=t(91515),p=["components"],c={},d=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:c},m=o.Z;function b(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.mdx)(m,(0,i.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"introducing-cloud-native-aem-events-in-aem-as-a-cloud-service"},"Introducing Cloud-Native AEM Events in AEM as a Cloud Service"),(0,s.mdx)("p",null,"A strength of AEM has always been interoperability, based on open standards. This has enabled custom extensions and integrations and created countless additional use cases with AEM as the content centerpiece. With the new development of AEM Events, AEM as a Cloud Service now offers a cloud-native solution for AEM expandability and thus pursues the following goals:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"A generic eventing platform that makes it easy to subscribe to events, process them according to your project needs in most lightweight, scalable, and secure ways"),(0,s.mdx)("li",{parentName:"ul"},"Separation of functions like AEM Events in this case into standardized dedicated services for improved scalability and maintainability"),(0,s.mdx)("li",{parentName:"ul"},"Avoidance of custom code in AEM runtimes for better robustness and reduced effort when deploying, testing, and maintaining AEM as Cloud Service")),(0,s.mdx)("p",null,"While the previous ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/events/docs/guides/using/aem/"},"AEM Eventing")," solution is still supported for AEM On Premise installations and AEM on Adobe Managed Service, the ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-eventing/overview"},"new AEM Eventing")," is by design initiated for AEM as a Cloud Service only."),(0,s.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"AEM as a Cloud Service Eventing, together with AEM as a Cloud Service APIs, is currently only available to registered users in pre-release mode. Please ",(0,s.mdx)("a",{parentName:"p",href:"mailto:grp-aem-events@adobe.com"},"contact Adobe")," if you are interested in unlocking these cloud-native extensibility capabilities of AEM as a Cloud Service."),(0,s.mdx)("h2",{id:"why-aem-events"},"Why AEM Events?"),(0,s.mdx)("p",null,"Exposing events in AEM as Cloud Service to external services, both first and third-party, can solve several problems related to integrating various systems and improving the overall functionality of AEM as Cloud Service. Here are a few specific problems that can be addressed by exposing events:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Real-time updates: By exposing events to external services, you can enable real-time updates to content and metadata within AEM. This means that changes made within AEM can be immediately reflected in other systems and platforms that are integrated with it."),(0,s.mdx)("li",{parentName:"ul"},"Cross-system integration: Many organizations use multiple systems to manage different aspects of their business. By exposing events in AEM, you can facilitate integration with other systems, such as customer relationship management (CRM) or marketing automation tools. This allows for a more seamless exchange of data between systems, reducing manual data entry and improving overall efficiency."),(0,s.mdx)("li",{parentName:"ul"},"Customization and flexibility: Exposing events in AEM allows for greater customization and flexibility in how the system is used. Developers can create custom integrations that use the events exposed by AEM to trigger specific actions in other systems or platforms. This allows for a more tailored approach to content management that can meet the unique needs of a particular organization. Traditionally, this comes at the cost of custom code integration in AEM, not so with AEM Events."),(0,s.mdx)("li",{parentName:"ul"},"Improved analytics and reporting: By exposing events in AEM, you can gather more detailed data about how content is being used and consumed across different systems and platforms. This data can be used to generate more robust analytics and reporting, which can help inform content strategy and improve overall performance.")),(0,s.mdx)("p",null,"Overall, exposing events in AEM can help to create a more integrated and efficient content ecosystem, while also providing greater flexibility and customization options for organizations."),(0,s.mdx)("h2",{id:"example-use-cases"},"Example Use Cases"),(0,s.mdx)("p",null,"For project-specific extensions and integrations with AEM, AEM Events can help to inform external systems about all possible events in AEM in real time. This means that an automated reaction can be defined or implemented upon every event in AEM. Below you will find a few use case examples to illustrate how you could use AEM Events."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"You are publishing headless content in AEM and want to forward content changes as webhooks on a native mobile app. AEM Events is the perfect real-time trigger."),(0,s.mdx)("li",{parentName:"ul"},"You want to log and archive all activities in AEM in an audit-proof manner. With AEM Events, you obtain relevant changes in AEM and forward them to an external system suitable for info retrieval and archiving."),(0,s.mdx)("li",{parentName:"ul"},"You want to integrate an external search engine for site search on AEM Publish and update the indexes in real time."),(0,s.mdx)("li",{parentName:"ul"},"You want to inform user groups about certain events in AEM in external channels. Forward the events as needed, for example to a Slack channel or to an email group.")),(0,s.mdx)("p",null,"In some use cases, it is sufficient to forward AEM events as notifications. However, in most cases AEM Events must be combined with custom business logic and AEM APIs to access AEM content. Adobe offers comprehensive support here with Adobe Developer Console, Adobe I/O, and AEM APIs. This tutorial is intended to give you an overview of AEM Events and step-by-step instructions on how you can effectively extend AEM via Events and integrate it with other systems."),(0,s.mdx)("h2",{id:"aem-events-processing-via-adobe-io"},"AEM Events processing via Adobe I/O"),(0,s.mdx)("p",null,"AEM events are routed to Adobe I/O by default and are available instantly as soon as you subscribe to them in the Adobe Developer Console. In Adobe I/O, you have the three consumption options described below for processing AEM events. It's best to familiarize yourself with the options in advance, as each has its own characteristics and it's up to you to choose a suitable strategy based on your project requirements."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Process"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"),(0,s.mdx)("th",{parentName:"tr",align:null},"Consumption"),(0,s.mdx)("th",{parentName:"tr",align:null},"Scope"),(0,s.mdx)("th",{parentName:"tr",align:null},"Documentation"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe I/O Events Webhooks"),(0,s.mdx)("td",{parentName:"tr",align:null},"Sign up a Webhook URL that receives event JSON objects as HTTP POST requests instantly."),(0,s.mdx)("td",{parentName:"tr",align:null},"PUSH"),(0,s.mdx)("td",{parentName:"tr",align:null},"Choose any webhook client or webhook automation service to forward specific AEM Events."),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/events/docs/guides/"},"Adobe I/O Events Webhooks Documentation"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe I/O Journaling API"),(0,s.mdx)("td",{parentName:"tr",align:null},"Enables enterprise integrations to consume events according to their own cadence and process them in bulk."),(0,s.mdx)("td",{parentName:"tr",align:null},"PULL"),(0,s.mdx)("td",{parentName:"tr",align:null},"Use your existing ressources, for example Java Development, to process AEM Events with custom logic from any infrastructure by using Adobe I/O Journaling API."),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/events/docs/guides/journaling_intro/"},"Adobe I/O Events Journaling API"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Adobe I/O Runtime"),(0,s.mdx)("td",{parentName:"tr",align:null},"AEM Events trigger serverless functions"),(0,s.mdx)("td",{parentName:"tr",align:null},"PUSH"),(0,s.mdx)("td",{parentName:"tr",align:null},"Use Adobe Developer App Builder and create custom business logic in NodeJS for subscribed AEM event types. AEM Events result in execution as a serverless function in Adobe I/O Runtime."),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/runtime/docs/guides/overview/what_is_runtime/"},"Adobe I/O Events Runtime"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Amazon Eventbridge"),(0,s.mdx)("td",{parentName:"tr",align:null},"Create highly scalable event-driven applications by routing events between your own applications, third-party SaaS applications, and AWS services"),(0,s.mdx)("td",{parentName:"tr",align:null},"PUSH"),(0,s.mdx)("td",{parentName:"tr",align:null},"EventBridge makes it easier to build event-driven applications by facilitating event ingestion, delivery, security, authorization, and error handling. EventBridge has over 45 pre-built partner integrations that can scale seamlessly to handle spikes in event delivery without requiring provisioning of infrastructure or ongoing operations."),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/events/docs/guides/amazon_eventbridge/"},"Adobe I/O Events and Amazon EventBridge Integration"))))),(0,s.mdx)("h2",{id:"available-event-types"},"Available Event Types"),(0,s.mdx)("p",null,"Current available event types are documented in the AEM API specification as listed below:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/experience-cloud/experience-manager-apis/api/stable/sites/"},"AEM Sites Author Events")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/experience-cloud/experience-manager-apis/api/experimental/assets/author/"},"AEM Assets Author Events"))),(0,s.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The list of available event types for AEM as a Cloud Service is being expanded on a rolling basis. If you are missing the event types you need, please ",(0,s.mdx)("a",{parentName:"p",href:"mailto:grp-aem-events@adobe.com"},"contact the AEM-Eventing team"),". We can provide you with immediate information about which event types are in progress or how quickly we can provide the event types you need. Your project success is our goal, and accordingly, the AEM Events Team will do everything possible to provide you with the event types you need as fast as possible."),(0,s.mdx)("h2",{id:"enable-aem-events-on-your-aem-cloud-service-environment"},"Enable AEM Events on your AEM Cloud Service Environment"),(0,s.mdx)("p",null,"First, you need to enable your User Role in order to be able to subscribe to AEM Events from your AEM as a Cloud Service Environment via Adobe Developer Console. The following steps are necessary for this:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Visit ",(0,s.mdx)("a",{parentName:"li",href:"https://adminconsole.adobe.com/"},"Admin Console")," and login with an Administrator account."),(0,s.mdx)("li",{parentName:"ol"},"Select “Adobe Experience Manager as a Cloud Service” from the eligible products."),(0,s.mdx)("li",{parentName:"ol"},"Select the desired AEM as a Cloud Service environment from which you want to subscribe to AEM Events"),(0,s.mdx)("li",{parentName:"ol"},"Select an associated product profile where your user is assigned as an admin user, otherwise you can make this edit in the product profile dialog.")),(0,s.mdx)("h2",{id:"how-to-subscribe-to-aem-events-in-the-adobe-developer-console"},"How to subscribe to AEM Events in the Adobe Developer Console"),(0,s.mdx)("p",null,"In order to subscribe to AEM Events, you first need to create a new project in the Adobe Developer Console. You can do this by following these steps:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Visit ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/projects"},"https://developer.adobe.com/console/projects")," and create a new project. But first, make sure you know how you want to process AEM events in Adobe I/O. If you want to use Adobe I/O Runtime, create a new project from a template. This gives you the opportunity to create your Adobe I/O project with App Builder. You can find more information about App Builder at the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/overview/"},"App Builder Developer Documentation"),".\nIf you are unsure how to handle AEM Events in your project, please see the section ",(0,s.mdx)("a",{parentName:"p",href:"#aem-events-processing-via-adobe-io"},"AEM Events processing via Adobe I/O")," of this tutorial."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.25000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/5530d/4.webp 320w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/0c8fb/4.webp 640w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/94b1e/4.webp 1280w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/0b34d/4.webp 1920w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/a31f8/4.webp 2180w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/dd4a7/4.png 320w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/0f09e/4.png 640w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/bbbf7/4.png 1280w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/ac7a9/4.png 1920w","/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/fb44e/4.png 2180w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/1c4188d22ed255ee77f918d3e6a6e99e/bbbf7/4.png",alt:"create new project",title:"create new project",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},'Add a new Service "Event" to your preferred workspace in your new Adobe Developer Console project. This will open the "Add Event" dialog for you, which shows you all Adobe product solutions to which you are entitled.'),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/5530d/9.webp 320w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/0c8fb/9.webp 640w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/94b1e/9.webp 1280w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/0b34d/9.webp 1920w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/d5269/9.webp 2560w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/fbbc7/9.webp 2645w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/dd4a7/9.png 320w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/0f09e/9.png 640w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/bbbf7/9.png 1280w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/ac7a9/9.png 1920w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/c7a69/9.png 2560w","/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/a592e/9.png 2645w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/216a086c29bd8d5e7c5e859eb539d331/bbbf7/9.png",alt:"Select solution",title:"Select solution",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},'Select the AEM Solution from which you want to subscribe to AEM Events, for example AEM Sites or AEM Assets. Once you click "Next", you will be provided with all AEM as a Cloud Service Environments, to which you are entitled as per Admin Console Configuration. See also the section ',(0,s.mdx)("a",{parentName:"p",href:"#Enable-AEM-Events-on-your-AEM-Cloud-Service-Environment"},"Enable AEM Events on your AEM Cloud Service Environment")," in this tutorial."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/5530d/10.webp 320w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/0c8fb/10.webp 640w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/94b1e/10.webp 1280w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/0b34d/10.webp 1920w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/d5269/10.webp 2560w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/6a265/10.webp 2648w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/dd4a7/10.png 320w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/0f09e/10.png 640w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/bbbf7/10.png 1280w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/ac7a9/10.png 1920w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/c7a69/10.png 2560w","/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/7f509/10.png 2648w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/64e9eccf3d250d21cea670ba276b57b3/bbbf7/10.png",alt:"Select AEM instance",title:"Select AEM instance",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},'Choose the AEM as a Cloud Service Environment, from which you want to receive AEM Events. Once you click "Next", you will be provided with a list of available AEM Events for your selected AEM Solution.')),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},'Select the Event Types to which you want to subscribe and click "Next". For a list of available event types, see ',(0,s.mdx)("a",{parentName:"p",href:"#available-event-types"},"Available Event Types"),".\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/5530d/11.webp 320w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/0c8fb/11.webp 640w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/94b1e/11.webp 1280w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/0b34d/11.webp 1920w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/d5269/11.webp 2560w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/8c55a/11.webp 2603w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/dd4a7/11.png 320w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/0f09e/11.png 640w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/bbbf7/11.png 1280w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/ac7a9/11.png 1920w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/c7a69/11.png 2560w","/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/629e6/11.png 2603w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/43a7f30384673411cfff1e46a3a36782/bbbf7/11.png",alt:"Select event types",title:"Select event types",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"You will see the preselected ",(0,s.mdx)("strong",{parentName:"p"},"OAuth Server-To-Server"),' card, edit the credential name for better identification in the Admin Console and click "Next".'),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/5530d/7.webp 320w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/0c8fb/7.webp 640w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/94b1e/7.webp 1280w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/0b34d/7.webp 1920w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/d5269/7.webp 2560w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/e202a/7.webp 2655w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/dd4a7/7.png 320w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/0f09e/7.png 640w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/bbbf7/7.png 1280w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/ac7a9/7.png 1920w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/c7a69/7.png 2560w","/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/b4b6b/7.png 2655w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/411436a84c5bc24c50d9678cf9bf6b93/bbbf7/7.png",alt:"Oauth Server-to-server card",title:"Oauth Server-to-server card",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},'Provide a name and a description for your AEM Event registration and click "Next".')),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Next, choose how you would want to consume the events in Adobe I/O for this event registration. For more information, consult the ",(0,s.mdx)("a",{parentName:"p",href:"#aem-events-processing-via-adobe-io"},"AEM Events processing via Adobe I/O")," section."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.93750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/5530d/12.webp 320w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/0c8fb/12.webp 640w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/94b1e/12.webp 1280w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/0b34d/12.webp 1920w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/2f763/12.webp 2032w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/dd4a7/12.png 320w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/0f09e/12.png 640w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/bbbf7/12.png 1280w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/ac7a9/12.png 1920w","/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/c6957/12.png 2032w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/experience-manager-apis/static/8cd37ea3bdcc42584cbb065ecc0d05e1/bbbf7/12.png",alt:"Journaling",title:"Journaling",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"The Journaling API is generally always available to access the AEM Events queue. You can copy the Journaling endpoint - specific to your event registration, to access the Journaling API."))),(0,s.mdx)("p",null,"Other AEM Event consumption options are:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Adobe I/O Webhook: Enter the URL of your webhook client and decide whether you want to forward events individually at runtime or in batches"),(0,s.mdx)("li",{parentName:"ul"},"Adobe I/O Runtime: Link the runtime action of your App Builder project to this event registration. This requires that you have initially activated (cmd: init) and deployed (cmd: deploy) your App Builder application."),(0,s.mdx)("li",{parentName:"ul"},"Adobe I/0 and Amazon Eventbridge Integration: Add your AWS account ID and select AWS region to determine the Amazon Eventbridge target for your AEM Events.")),(0,s.mdx)("p",null,'That\'s it! The AEM events from your AEM as a Cloud Service environment should now arrive in your Adobe Developer Console project. You can observe this on the Events dialog of your event registration: In the "Debug tracing" section you can see the AEM Events Requests and the Runtime Action Response in JSON format. On the ',(0,s.mdx)("strong",{parentName:"p"},"Event Browser")," section, you can view the entire AEM Event Journal in detail."),(0,s.mdx)("p",null,"You can check things like:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Whether your AEM events arrive in Adobe I/O"),(0,s.mdx)("li",{parentName:"ul"},"What the AEM event payload looks like"),(0,s.mdx)("li",{parentName:"ul"},"Identify errors via HTTP status in request/response traffic"),(0,s.mdx)("li",{parentName:"ul"},"What the response payload of your runtime action looks like")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"If you decide to use Adobe I/O Runtime for your custom business logic in your project, we recommend that you familiarize yourself with Adobe App Builder in advance. Once you learn how to initiate, develop, debug, and deploy an App Builder stand-alone application locally, you'll realize how easy it is and how much work it takes away from you. Try it out yourself!")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-events-index-md-b6a074149ad4aaaa1988.js.map