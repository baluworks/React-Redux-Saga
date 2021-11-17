import React from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import { removeEntryRedux } from '../actions/entries.action';
import { openEditModel } from '../actions/models.action';
function EntryLine({ id, description, value, isExpense = false, editEntry }) {

    const actionDispatcher = useDispatch();
    return (
        <Container>
            <Segment color={isExpense ? 'red' : 'green'} >
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>${value}</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>
                            {/* <Icon name='edit' onClick={() => editEntry(id)}></Icon> */}
                            <Icon name='edit' onClick={() => actionDispatcher(openEditModel(id))}></Icon>
                            <Icon name='trash' onClick={() => {
                                actionDispatcher(removeEntryRedux(id));
                                //deleteEntry(id)
                            }} ></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </ Segment>

        </Container>
    )
}
export default EntryLine