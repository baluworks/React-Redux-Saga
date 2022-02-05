import React from "react";
import { Container, List } from "semantic-ui-react";
import EntryLine from "./EntryLine";
function EntryLines({ entries, deleteEntry, editEntry }) {
    
    return (
        <List>
            <Container>
                {
                    entries.map(entry =>
                        <EntryLine key={entry.id} {...entry} editEntry={editEntry} />
                    )
                }
            </Container>
        </List>
    )
}

export default EntryLines;