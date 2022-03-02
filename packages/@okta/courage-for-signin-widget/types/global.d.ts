declare namespace OktaCourage {

  interface settings {
    orgId?: string;
    orgName?: string;
    serverStatus?: string;
    persona?: string;
    isDeveloperConsole?: boolean;
    isPreview?: boolean;
    permissions?: string[];
  }

  interface okta {
    debug: boolean;
    cdnUrlHostname?: string;
    userId?: string;
    deployEnv?: string;
    locale?: string;
    settings?: settings;
    theme?: string;
  }

}


declare var okta: OktaCourage.okta;
declare var define: (fn: Function) => {};

interface JQuery {
  scrollParent: (includeHidden:boolean) => JQuery;
}

interface Window {
  jQueryCourage?: JQueryStatic;
  _features?: string[];
}