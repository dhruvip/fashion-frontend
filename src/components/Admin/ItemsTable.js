import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Paper, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

class ItemsTable extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>    
                        </TableRow>                    
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.bodyRow}>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const tableStyles = theme => {
    console.log(theme);
    return ({
        root: {
            width: '80%',
            overFlowX: 'auto',
        },
        table: {
        },
        headRow: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black
        },

    });
};
export default withStyles(tableStyles)(ItemsTable);