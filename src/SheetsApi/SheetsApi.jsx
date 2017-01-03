// Table columns order:
//
// - ID
// - Name
// - Phone
// - Email
// - Gender
// - Token

export default class SheetsApi {
    config = {
        CLIENT_ID: '965160155749-7jofj31f6rvuh1iqv767hq2dldhui54h.apps.googleusercontent.com',
        SCOPES: ["https://www.googleapis.com/auth/spreadsheets.readonly"], // .readonly
        SPREADSHEET_ID: '1BczBIIBU_Lp3ddhJeeB-sbbF3opVNBYxUY2AS25eq0c',
        SPREADSHEET_ID_TEST: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        SHEETS_API: 'https://sheets.googleapis.com/$discovery/rest?version=v4'
    }

    isAuthorized = false;
    apiLoaded = false;

    constructor(callback) {
        this.authorize(true, callback);
    }

    authorize(immediate, callback) {
        console.log('Authorizing with Google');

        gapi.auth.authorize( {
            'client_id': this.config.CLIENT_ID,
            'scope': this.config.SCOPES.join(' '),
            'immediate': immediate
        }, result => {
            console.log('Auth response: ', result);

            if (!immediate) this.isAuthorized = true;

            if (!this.apiLoaded) {
                gapi.client.load(this.config.SHEETS_API).then(() => {
                    this.apiLoaded = true;
                    callback();
                });
            }
            else {
                callback();
            }

        }, console.error);
    }

    getAllData(callback, fail) {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.config.SPREADSHEET_ID,
            range: 'Users!A:F',
        }).then(response => {
            callback(response.result.values);
        }, response => {
            console.log('Error when getting data: ', response.result.error.message);
            fail();
            return false;
        });
    }

    addRow(row, callback) {
        gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: this.config.SPREADSHEET_ID,
            range: 'Users!A1:F1',
            majorDimension: "ROWS",
            valueInputOption: 'RAW',
            values: [
                row
             ]
        }).then(response => {
            callback(response);
        }, response => {
            console.log('Error while writing values to Sheets: ', response.result.error.message);
        });
    }

    editRow(colNo, data, callback) {
        colNo = parseInt(colNo);
        const row = [
            data[1], data[3], data[2]
        ]

        gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: this.config.SPREADSHEET_ID,
            range: `Users!B${ colNo }:E${ colNo }`,
            majorDimension: "ROWS",
            valueInputOption: 'RAW',
            values: [
                row
            ]
        }).then(response => {
            callback(response);
        }, response => {
            console.log('Error while editing value in Sheets: ', response.result.error.message);
        });
    }

    deleteRow(colNo, callback) {
        colNo = parseInt(colNo);

        if (colNo === 0) {
            console.error('Column cannot be ', colNo);
            return false;
        }

        gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: this.config.SPREADSHEET_ID,
            range: `Users!F${ colNo }:F${ colNo }`,
            majorDimension: "ROWS",
            valueInputOption: 'RAW',
            values: [
                ['deleted']
            ]
        }).then(response => {
            callback(response);
        }, response => {
            console.log('Error while deleting value in Sheets: ', response.result.error.message);
        });
    }
}
