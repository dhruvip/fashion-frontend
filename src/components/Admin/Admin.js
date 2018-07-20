import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Paper, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


class CustomTable extends Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>
                            <TableCell>Test1</TableCell>    
                        </TableRow>                    
                    </TableHead>
                    <TableBody>
                        <TableRow>
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
const ItemsTable = withStyles(theme => ({}))(CustomTable)


export default class Admin extends Component {
    render() {
        return (<div>Admin
            <CustomTable />
        </div>);
    }
}