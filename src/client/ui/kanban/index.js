import React, { Component } from 'react';

import KanbanStory from './story';
//import Task from './task';

import * as Style from './style';

export default class Kanban extends Component {

    static Story = KanbanStory;
    static Task = () => {};

    render () {
        const { columns } = this.props;

        return (
            <Style.Kanban>

                { [ '', ...columns ].map(column => (
                    <Style.Column key={ column }>
                        { column }
                    </Style.Column>
                )) }

            </Style.Kanban>
        )
    }

}
