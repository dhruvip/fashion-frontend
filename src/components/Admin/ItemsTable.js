import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Paper, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

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

    onDelete = (toBeDeleted) => {
        console.log(toBeDeleted)
        this.props.onDelete(toBeDeleted);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            { 
                                this.props.schema.map((col, index) => {
                                    return (<TableCell className={classes.headRow}
                                        key={ col.columnName + index }>
                                        {col.columnName}
                                    </TableCell>);
                                })
                            }
                            <TableCell className={classes.headRow}>Actions</TableCell>    
                        </TableRow>                    
                    </TableHead>
                    <TableBody>
                            {
                                this.props.data.map((eachEntry, i) => {
                                    return (<TableRow className={classes.bodyRow} key={'tableRow'+i}>
                                        {
                                            this.props.schema.map((col, index) => {
                                                return (<TableCell key={eachEntry[col.modelName]+index}>
                                                    {eachEntry[col.modelName]}
                                                </TableCell>)
                                            })
                                        }
                                        <TableCell><Delete className={classes.icons} onClick={e => this.onDelete(eachEntry)}/></TableCell>
                                    </TableRow>)
                                })
                            }
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
        },
        icons: {
            cursor: 'pointer'
        }
    });
};
export default withStyles(tableStyles)(ItemsTable);