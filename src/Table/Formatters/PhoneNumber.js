import React from 'react';

function PhoneNumber(props) {
    const cellValue = props.cell._cell.value;
    return <a>{cellValue}</a>
}

export default PhoneNumber;