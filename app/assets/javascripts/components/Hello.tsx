import * as React from "react";
import i18n = require("i18next");


declare var window: any;

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {

      i18n.init({
        lng: 'en',
        resources: {
          en: {
            translation: window.locale.en
          }
        }
        })

      return <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        { i18n.t('hello') }
      </div>
    }
}
