import React, { Component } from 'react';

import Master from '../master';

import Heading from '../../ui/heading';
import Kanban from '../../ui/kanban';

export default class Work extends Component {

    render () {

        return (
            <Master>

                <Heading>Current Iteration</Heading>

                <Kanban columns={ [ 'Backlog', 'In Progress', 'In Verification', 'Completed' ] }>

                    <Kanban.Story as-a='User' i-want-to='be able to add tasks to a story' points={ 8 }>

                        <Kanban.Task name='Write the code' assignedTo={ [] } status='In Progress'/>
                        <Kanban.Task name='Write more code' assignedTo={ [] } status='Backlog'/>

                    </Kanban.Story>

                    <Kanban.Story as-a='User' i-want-to='be able to add tasks to a story' points={ 8 }>

                        <Kanban.Task name='Write the code' assignedTo={ [] } status='In Progress'/>
                        <Kanban.Task name='Write more code' assignedTo={ [] } status='Backlog'/>

                    </Kanban.Story>

                </Kanban>

            </Master>
        )
    }
}
