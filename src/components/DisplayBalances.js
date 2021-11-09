import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Grid, Segment } from 'semantic-ui-react'
function DisplayBalances({ expenses, income }) {

    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title='Incoming' value={`$ ${income}`} color='green' size='tiny' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title='Expenses' value={`$ ${expenses}`} color='red' size='tiny' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;