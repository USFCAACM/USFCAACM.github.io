// Gets current cal info from CS Events
// import { gapi } from 'gapi-script'


var clientId = ''
var apiKey = ''
var calId = ''
var timeZone = "Los_Angeles"
var maxRows = 100
var calName = 'CS Events'
var scopes = 'https://www.googleapis.com/auth/calendar'

function handleClientLoad() {
    gapi.client.setApiKey(apiKey)
    checkAuth()
}

function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult)
}

function handleAuthResult(authResult) {
    if (authResult) {
        makeApiCall()
    }
}

function makeApiCall() {
    var today = new Date()
    gapi.client.load('calendar', 'v3', function () {
        // @ts-ignore
        var request = gapi.client.calendar.events.list({
            'calendarId' : calId,
            'timeZone' : timeZone,
            'singleEvents' : true,
            'timeMin': today.toISOString(),
            'maxResults' : maxRows,
            'orderBy' : 'startTime'
        })

        request.execute( function (resp) {
            // print(resp.items[0])
            console.log(resp.items[0])
        })

        })
    // })
}
