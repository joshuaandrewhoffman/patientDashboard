import React from 'react';
import moment from 'moment';

function Date(props) {
    const cellValue = props.cell._cell.value;
    const formatted = moment(cellValue).format("MMM D, YYYY");
    return formatted;
}

export default Date;