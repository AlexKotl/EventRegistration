//import {GoogleSheets} from 'google-drive-sheets';

export default class SheetsApi {
    config = {
        CLIENT_ID: '965160155749-7jofj31f6rvuh1iqv767hq2dldhui54h.apps.googleusercontent.com',
        SCOPES: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        SPREADSHEET_ID: '1BczBIIBU_Lp3ddhJeeB-sbbF3opVNBYxUY2AS25eq0c',
        SPREADSHEET_ID_TEST: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms'
    }

    handleAuthResult(result) {
        console.log('Auth response: ', result);

        var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

        gapi.client.load(discoveryUrl).then(() => {

            gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: this.config.SPREADSHEET_ID,
                range: 'Users!A:A',
            }).then(response => {
                console.log('RESPONSE: ', response.result.values);
            }, response => {
                console.log('Error: ', response.result.error.message);
            });

        });
    }


    addRow() {
        console.log(gapi);

        gapi.auth.authorize( {
            'client_id': this.config.CLIENT_ID,
            'scope': this.config.SCOPES.join(' '),
            'immediate': true
        }, ::this.handleAuthResult);

    }
}