import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

function EntryLine({ description, value, isExpense = false }) {

    return (
        <Segment color={isExpense ? 'green' : 'red'} >
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left' color='yellow'>{description}</Grid.Column>
                    <Grid.Column width={3} textAlign='right' color='blue'>{value}</Grid.Column>
                    <Grid.Column width={3} textAlign='right' color='grey'>
                        <Icon name='edit'></Icon>
                        <Icon name='trash'></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </ Segment>
    )
}
export default EntryLine