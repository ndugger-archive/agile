import React, { Component } from 'react';

import * as Style from './style';

export default class Master extends Component {

    render () {
        const { children } = this.props;

        return (
            <Style.App>

                <Style.Header>
                    <Style.Nav>

                        <Style.LogoLink to='/'>

                        </Style.LogoLink>

                        <Style.PageLink to='/' data-active>Work</Style.PageLink>
                        <Style.PageLink to='/projects'>Projects</Style.PageLink>
                        <Style.PageLink to='/reports'>Reports</Style.PageLink>

                    </Style.Nav>
                </Style.Header>

                <Style.Page>
                    { children }
                </Style.Page>

            </Style.App>
        )
    }
}
