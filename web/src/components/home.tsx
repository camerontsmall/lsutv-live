import * as React from "react";

export interface HomeProps { compiler : string; framework : string; }

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return <h1>Home Component</h1>;
    }
}