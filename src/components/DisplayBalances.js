import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Grid, Segment } from 'semantic-ui-react'
function DisplayBalances() {

    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title='Incoming' value='1,500.00' color='green' size='tiny' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title='Expenses' value='1,500.00' color='red' size='tiny' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;