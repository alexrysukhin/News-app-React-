export interface IPost {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: String;
  fields: {
    headline: string;
    standfirst: string;
    trailText: string;
    main: string;
    body: string;
    wordcount: 410;
    firstPublicationDate: string;
    isInappropriateForSponsorship: boolean;
    isPremoderated: boolean;
    lastModified: string;
    productionOffice: string;
    publication: string;
    shortUrl: string;
    shouldHideAdverts: boolean;
    showInRelatedContent: boolean;
    thumbnail: string;
    legallySensitive: boolean;
    lang: string;
    isLive: boolean;
    bodyText: string;
  };
}
