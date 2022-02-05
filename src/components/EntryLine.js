import React from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import { removeEntryRedux } from '../actions/entries.action';
import { openEditModel } from '../actions/models.action';
import newContext,{NewTheme} from '../context';

function EntryLine({ id, description, value, isExpense = false, editEntry }) {

    const dispatcher = useDispatch();
    const cont = NewTheme();
    const txtcolor =isExpense ? cont.expTextColor : cont.savingsTextColor;
    return (
        <Container>
            <Segment color={txtcolor} >
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left' color={txtcolor}>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign='right' color={txtcolor}>${value}</Grid.Column>
                        <Grid.Column width={3} textAlign='right' color={txtcolor}>
                            {/* <Icon name='edit' onClick={() => editEntry(id)}></Icon> */}
                            <Icon name='edit' onClick={() => dispatcher(openEditModel(id))}></Icon>
                            <Icon name='trash' onClick={() => {
                                dispatcher(removeEntryRedux(id));
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