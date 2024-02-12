// Gets current cal info from CS Events
// import { gapi } from 'gapi-script'


var clientId = '104968260025-dhmu5o0n1e1e9e5u6ffk98grb3a9ueu9.apps.googleusercontent.com'
var apiKey = 'AIzaSyBQFF4eWWeO2yyBtpBEz3QEOjrJCeKDpFY'
var calId = 'c_7e49e8f281a64f29726452e52cc784f71f96f0f21b43e95989c5d1f392ceaea0@group.calendar.google.com'
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