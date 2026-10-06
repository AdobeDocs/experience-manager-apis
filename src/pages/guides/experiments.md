---
title: AEM Experimental APIs
description: An overview of the AEM experimental API program, what it means for customers, and how customers can get engaged.
---

Customers will notice two different documents for most of the APIs on our [Experience Manager APIs landing page](/index.md), with one of the documents specifying "(Experimental)". For customers who wish to use APIs that are marked as experimental, it is important to understand what this designation denotes, how the experimental API program works, and how to engage with Adobe to get access to these APIs.

## What Are Experimental APIs?

The Experience Manager team has made a commitment that released updates to stable APIs will remain backward-compatible. While this gives clients the confidence to integrate with these APIs without fear of breaking changes, it also limits Adobe's ability to quickly iterate on these APIs, making changes as they are needed. As a result, all new APIs that the Experience Manager team builds start out as "experimental". These APIs can be changed in a backward-incompatible manner and could even be removed if Adobe were to decide that the feature exposed by the APIs is not one that we wish to launch in the product.

In many cases, experimental APIs have already been integrated with Adobe user interfaces and serve production use cases, so depending on the maturity of an experimental API, it may carry the same functional SLAs as stable APIs or other Experience Manager features.  This can be discussed with the Adobe team during onboarding.

## How Does an Experimental API Become Stable?

An API becomes stable when we have built the confidence to be sure that the API can serve the needs of the Experience Manager product _and_ our customers, without needing any future breaking changes. To build this confidence, we will wait until an API has been integrated into at least one Adobe user interface and has been vetted and adopted by one or more of our customers. Including customers in this process allows us to ensure that our APIs will serve the extensibility use cases of our customers before we lock in the API's shape in a stable specification.

## How Does the Experimental API Program Work?

When a customer reaches out to our team to express interest in an experimental API, we will route them to the appropriate team of subject-matter experts who are developing that API to discuss their use case, provide guidance, and establish direct lines of communication.

Once the use case is determined to be a good fit, the customer will be first invited to join the Adobe Feedback Program and then the Experimental API Program. This will make a new API card available to the customer in the Adobe Developer Console entitled AEM Experimental APIs. Finally, the Adobe team will allowlist the clientId for the customer's integration to access the experiment in question.

From this point forward, the Adobe team will stay in contact with the customer to gather feedback on the API, offer support in adopting it, and reach out to the customer in case of any needed breaking changes. Should all go well, the Adobe team will reach out to the customer to inform them that the API is being promoted and to ask them to cut over to the stable path so that the experiment can be concluded.

## How Can I Sign Up?

If you are interested in using an experimental API and this program sounds appealing to you, email [aem-apis@adobe.com](mailto:aem-apis@adobe.com) describing the API that you are interested in, and we will get back to you.
