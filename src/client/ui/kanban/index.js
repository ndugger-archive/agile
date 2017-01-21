import React, { Component } from 'react';

import KanbanStory from './story';
//import Task from './task';

import * as Style from './style';

export default class Kanban extends Component {

    static Story = KanbanStory;
    static Task = () => {};

    render () {
        const { children, columns } = this.props;
        const stories = children.map(story => React.cloneElement(story, { ...story.props, columns }));
        const kanbanColumns = [ '', ...columns ];

        return (
            <Style.Kanban>

                { kanbanColumns.map(column => (
                    <Style.Column key={ column }>
                        { column }
                    </Style.Column>
                )) }

                { stories }

            </Style.Kanban>
        )
    }

}
