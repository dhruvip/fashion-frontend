import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Paper, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

class ItemsTable extends Component {
    /**
     * var items   = new Schema({
        itemName: { type: String, required: true },
        itemId: { type: String, required: true },
        productId : { type: String, required: true, ref: 'Products'},
        brandId : { type: String, required: true, ref: 'Brands'},
        itemModel : { type: String, required: true },
        itemRetailCost: { type: Number, required: true },
        });
     */
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            { 
                                this.props.columns.map((col, index) => {
                                    return (<TableCell className={classes.headRow}
                                        key={ col + index }>
                                        {col}
                                    </TableCell>);
                                })
                            }    
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
    return ({
        root: {
            width: '80%',
            overFlowX: 'auto',
        },
        table: {
            fontWeight: 502
        },
        headRow: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
        },
        headCell: {
            fontSize: '1em',
        }
    });
};
export default withStyles(tableStyles)(ItemsTable);