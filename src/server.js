require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const sampleData = [
    { mrn: 5823568594, firstName: 'Martha', lastName: 'Washington', dob: '06/13/1731', phoneNumber: '650-999-0309', escalationReason: 'fever, cough', resolution: 'Unconfirmed' },
    { mrn: 3141414328, firstName: 'Eleanor', lastName: 'Roosevelt', dob: '08/11/1884', phoneNumber: '415-294-1080', escalationReason: 'sore throat', resolution: 'Unconfirmed' },
    { mrn: 7581885102, firstName: 'Lucretia', lastName: 'Garfield', dob: '04/19/1832', phoneNumber: '415-810-7779', escalationReason: 'concerns', resolution: 'Unconfirmed' },
    { mrn: 6877721303, firstName: 'Lou', lastName: 'Hoover', dob: '03/29/1874', phoneNumber: '650-555-1234', escalationReason: 'cough', resolution: 'Unconfirmed' },
    { mrn: 5023450892, firstName: 'Abigail', lastName: 'Adams', dob: '11/22/1744', phoneNumber: '341-234-0983', escalationReason: 'headache', resolution: 'Unconfirmed' },
    { mrn: 1902345632, firstName: 'Martha', lastName: 'Jeferson', dob: '10/19/1748', phoneNumber: '510-321-5555', escalationReason: 'pain', resolution: 'Unconfirmed' },
    { mrn: 3245632465, firstName: 'Dolley', lastName: 'Madison', dob: '05/20/1768', phoneNumber: '707-489-9014', escalationReason: 'broken bone', resolution: 'Unconfirmed' },
    { mrn: 9826512982, firstName: 'Elizabeth', lastName: 'Monroe', dob: '06/30/1768', phoneNumber: '209-345-0234', escalationReason: 'fever', resolution: 'Unconfirmed' },
    { mrn: 9245694243, firstName: 'Louisa', lastName: 'Adams', dob: '02/12/1775', phoneNumber: '831-823-0982', escalationReason: 'chills', resolution: 'Unconfirmed' },
    { mrn: 5187245338, firstName: 'Rachel', lastName: 'Jackson', dob: '06/15/1767', phoneNumber: '408-092-9264', escalationReason: 'fatigue', resolution: 'Unconfirmed' },
];

// Connect to db and initialize data if necessary
const dbName = 'gyant';
const client = new MongoClient(process.env.DB_CONN_STRING);

client.connect(async function () {
    const db = client.db(dbName);
    const collection = db.collection('records');
    if (await collection.countDocuments() === 0) {
        // This is our first run, or we've wiped the DB. We need to create the test data.
        // Log a message saying so, and bring in sample data from our json file.
        console.log('Records collection does not exist yet. Populating it with test data...');
        collection.insertMany(sampleData);
    }
});

app.get('/records', function (req, res) {

    const db = client.db(dbName);
    const records = db.collection('records');
    records.find().toArray(function (err, docs) {
        return res.json(docs);
    });
});

app.listen(process.env.PORT || 8080);