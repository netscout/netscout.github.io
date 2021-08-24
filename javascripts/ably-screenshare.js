var membersList = [];
var connections = {};
var currentCall;
var localStream;
var constraints = { video: { mediaSource: "screen" }, audio: false };
var apiKey = "A6PWGQ.l9dbsw:QUdY2dQooAnoQOhJ";
var clientId = "client-" + Math.random().toString(36).substr(2, 16);
var realtime = new Ably.Realtime({ key: apiKey, clientId: clientId });
var AblyRealtime = realtime.channels.get("ChatChannel");

AblyRealtime.presence.subscribe("enter", function (member) {
  AblyRealtime.presence.get((err, members) => {
    membersList = members;
    renderMembers();
  });
});
AblyRealtime.presence.subscribe("leave", (member) => {
  AblyRealtime.presence.get((err, members) => {
    membersList = members;
    renderMembers();
  });
});
AblyRealtime.presence.enter();

function renderMembers() {
  var list = document.getElementById("memberList");
  var online = document.getElementById("online");
  online.innerHTML =
    "Users online (" +
    (membersList.length === 0 ? 0 : membersList.length - 1) +
    ")";
  var html = "";
  if (membersList.length === 1) {
    html += "<li> No member online </li>";
    list.innerHTML = html;
    return;
  }
  for (var index = 0; index < membersList.length; index++) {
    var element = membersList[index];
    if (element.clientId !== clientId) {
      html +=
        "<li><small>" +
        element.clientId +
        ' <button class="btn btn-xs btn-success" onclick=call("' +
        element.clientId +
        '")>call now</button> </small></li>';
    }
  }
  list.innerHTML = html;
}

function call(client_id) {
  if (client_id === clientId) return;
  alert(`attempting to call ${client_id}`);
  AblyRealtime.publish(`incoming-call/${client_id}`, {
    user: clientId,
  });
}
AblyRealtime.subscribe(`incoming-call/${clientId}`, (call) => {
  if (currentCall != undefined) {
    // user is on another call
    AblyRealtime.publish(`call-details/${call.data.user}`, {
      user: clientId,
      msg: "User is on another call",
    });
    return;
  }
  var isAccepted = confirm(
    `You have a call from ${call.data.user}, do you want to accept?`
  );
  if (!isAccepted) {
    // user rejected the call
    AblyRealtime.publish(`call-details/${call.data.user}`, {
      user: clientId,
      msg: "User declined the call",
    });
    return;
  }
  currentCall = call.data.user;
  AblyRealtime.publish(`call-details/${call.data.user}`, {
    user: clientId,
    accepted: true,
  });
});
AblyRealtime.subscribe(`call-details/${clientId}`, (call) => {
  if (call.data.accepted) {
    initiateCall(call.data.user);
  } else {
    alert(call.data.msg);
  }
});
