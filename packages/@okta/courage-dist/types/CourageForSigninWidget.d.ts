/// <reference types="jquery" />
import Class from '@okta/courage/src/util/Class';
import Handlebars from '@okta/courage/src/util/handlebars-wrapper';
import _ from '@okta/courage/src/util/underscore-wrapper';
import './util/scrollParent';
declare const Okta: {
    Backbone: any;
    $: JQueryStatic;
    _: _.UnderscoreStatic;
    Handlebars: typeof Handlebars;
    loc: (key: any, bundleName: any, params?: any) => any;
    createButton: (options: any) => any;
    createCallout: any;
    registerInput: any;
    Model: any;
    BaseModel: any;
    Collection: any;
    FrameworkView: any;
    View: any;
    ListView: any;
    Router: any;
    Controller: any;
    Form: any;
    internal: {
        util: {
            Util: {
                redirect: (url: any) => void;
                reloadPage: () => void;
                constantError: (errorMessage: any) => () => never;
                getUrlQueryString: (queries: any) => string;
                isABaseView(obj: any): boolean;
            };
            Cookie: {
                setCookie: (name: any, value: any, options: any) => void;
                getCookie: () => any;
                removeCookie: () => any;
            };
            Clipboard: {
                attach: (el: any, options: any) => any;
            };
            Logger: {
                trace: (...args: any[]) => void;
                dir: (...args: any[]) => void;
                time: (...args: any[]) => void;
                timeEnd: (...args: any[]) => void;
                group: (...args: any[]) => void;
                groupEnd: (...args: any[]) => void;
                assert: (...args: any[]) => void;
                log: (...args: any[]) => void;
                info: (...args: any[]) => void;
                warn: (...args: any[]) => void;
                error: (...args: any[]) => void;
            };
            Class: typeof Class;
            Keys: {
                UP: number;
                DOWN: number;
                DEL: number;
                TAB: number;
                RETURN: number;
                ENTER: number;
                ESC: number;
                COMMA: number;
                PAGEUP: number;
                PAGEDOWN: number;
                SPACE: number;
                BACKSPACE: number;
                __isKey: (e: any, key: any) => boolean;
                isEnter: (e: any) => any;
                isEsc: (e: any) => any;
                isSpaceBar: (e: any) => any;
            };
        };
        views: {
            components: {
                BaseDropDown: any;
                Notification: any;
            };
            forms: {
                helpers: {
                    FormUtil: any;
                    SchemaFormFactory: any;
                };
                components: {
                    Toolbar: any;
                };
                inputs: {
                    TextBox: any;
                    PasswordBox: any;
                    CheckBox: any;
                    Radio: any;
                    Select: any;
                    InputGroup: any;
                };
            };
        };
        models: {
            BaseSchema: {
                parseProperties: (resp: any) => any[];
                Model: any;
                Collection: any;
            };
            SchemaProperty: {
                Model: any;
                Collection: any;
            };
        };
    };
};
export default Okta;
