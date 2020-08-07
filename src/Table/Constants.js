import React from 'react';
import { reactFormatter } from 'react-tabulator';
import PhoneNumber from './Formatters/PhoneNumber';
import Date from './Formatters/Date';

const resolutionOptions = {
    "Unconfirmed": "Unconfirmed",
    "Rescheduled": "Rescheduled",
    "Visit confirmed": "Visit confirmed"
};

const columns = [
    { title: 'MRN', field: 'mrn', headerFilter: "input" },
    { title: 'First Name', field: 'firstName', headerFilter: "input" },
    { title: 'Last Name', field: 'lastName', headerFilter: "input" },
    { title: 'Date of Birth', field: 'dob', headerFilter: "input", formatter: reactFormatter(<Date />) },
    { title: 'Phone Number', field: 'phoneNumber', headerFilter: 'input', formatter: reactFormatter(<PhoneNumber />) },

    { title: 'Escalation Reason', field: 'escalationReason', headerFilter: "input" },
    {
        title: 'Resolution', field: 'resolution', headerFilter: "input", editor: "select", editorParams: {
            allowEmpty: true,
            showListOnEmpty: true,
            values: resolutionOptions,
        },
    },
];

export default columns;