const APP_ID = '3ee30362-8459-4ff8-b69c-091be04cfd7a';
const DEMO_CHANNEL_ID = 'demo channel';

const client = new TalkPlus.Client({ appId: APP_ID });

$(function () {
	// You can add Users inside JSON users section
	var _json = {
		users: [appUi.userId],
		chats: [{
			from: '도우미',
			msg: '채팅이 시작되었습니다.',
			time: '1533263925814',
			action: ''
		}]
	};

	init();
	function init() {
		renderData();

		loginChatSession();
	};

	function loginChatSession() {
		client.on('event', function (payload) {
			const parsedPayload = JSON.parse(payload);
			if (parsedPayload.type === 'message') {
				addMessage(parsedPayload.message);
			}
		});

		console.log(appUi.userId);

		// login anonymously
		client.loginAnonymous({ userId: appUi.userId, username: appUi.userName }, function (errResp, data) {
			if (errResp) {
				console.log("login error", JSON.stringify(errResp));
			}

			// join demo channel
			client.joinChannel({ channelId: DEMO_CHANNEL_ID }, function (errResp, data) {
				if (errResp) {
					if (errResp.code === '2003') { // if channel not found, create it
						client.createChannel({
							channelId: DEMO_CHANNEL_ID,
							name: DEMO_CHANNEL_ID,
							type: 'public',
							members: []
						}, function (errResp, data) {
							if (errResp) {
								console.log(errResp);
								return;
								//return alert(JSON.stringify(errResp));
							}
						});
					} else if (errResp.code === '2008') { // if user already had joined channel before, don't worry about error
						// don't handle
					} else {
						console.log(errResp);
						return;
						//return alert(JSON.stringify(errResp));
					}
				}

				client.getMessages({ channelId: DEMO_CHANNEL_ID }, function (errResp, data) {
					if (errResp) {
						console.log("getMessage error", JSON.stringify(errResp));
						return;
					}
					console.log(data);
					loadChatMessages(data.messages);
				});
			});
		});
	}

	// RENDER METHODS
	function renderData() {
		var _now = $.now();
		getDateTime(_now);
		_json.users.forEach(function (user) {
			var userID = user.replace(/ /g, "_");
			var parentString = '<div class="chatbox" id="' + userID + '">' +
				'<div id="chats" class="chats">' +
				'<ul></ul>' +
				'</div>' +
				'<div class="sendBox">' +
				'<input type="text" placeholder="메세지를 입력하고 엔터키를 누르세요....">' +
				'<button type="button">전송</button>'
				'</div>';
			$('#viewport').append(parentString);
			_json.chats.forEach(function (chat) {
				var _cl;
				(chat.from === user) ? _cl = 'you' : _cl = 'him';
				var dataString = '<li>' +
					'<div class="msg ' + _cl + '">' +
					'<span class="partner">' + chat.from + '</span>' +
					chat.msg +
					'<span class="time">' + getDateTime(chat.time) + '</span>' +
					'</div></li>';
				$('#viewport #' + userID + ' .chats>ul').append(dataString);
			});
		});
	};

	function newMsgRender(data) {
		$('#viewport .chats ul>li.pending').remove();
		_json.users.forEach(function (user) {
			var checkID = user.replace(/ /g, "_");
			var _cl = '';
			(data.from === user) ? _cl = 'you' : _cl = 'him';
			$('#viewport .chatbox#' + checkID + ' .chats ul')
				.append('<li><div class="msg ' + _cl + '">' +
					'<span class="partner">' + data.from + '</span>' +
					data.msg +
					'<span class="time">' + getDateTime(data.time) + '</span>' +
					'</div>' +
					'</li>');
		});
	}

	function pendingRender(typingUser) {
		var pending = '<li class="pending">' +
			'<div class="msg load">' +
			'<div class="dot"></div>' +
			'<div class="dot"></div>' +
			'<div class="dot"></div>' +
			'</div>' +
			'</li>';
		_json.users.forEach(function (user) {
			user = user.replace(/ /g, "_");
			if (user !== typingUser) {
				if (!($('#' + user + ' .chats ul>li').hasClass('pending')))
					$('#' + user + ' .chats ul').append(pending);
			}
		});
	}

	// HELPER FUNCTION
	function getDateTime(t) {
		var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var d = new Date(t / 1000),
			month = (month[d.getMonth()]),
			day = d.getDate().toString(),
			hour = d.getHours().toString(),
			min = d.getMinutes().toString();
		(day.length < 2) ? day = '0' + day : '';
		(hour.length < 2) ? hour = '0' + hour : '';
		(min.length < 2) ? min = '0' + min : '';
		var res = '' + month + ' ' + day + ' ' + hour + ':' + min;
		return res;
	}

	function enterNewMassage(from, msg) {
		var _id = $('.chatbox').attr('id');
		
		msg = msg.replace(/\"/g, '\\"');
		var t = $.now();
		$('#' + _id + ' .sendBox>input').val('');

		if (msg.replace(/\s/g, '') !== '') {
			var temp = {
				from: from,
				msg: msg,
				time: t.toString(),
				action: ''
			}
			_json.chats.push(temp);
			console.log(_json);
			newMsgRender(temp);

			gotoBottom("chats");
		}
	}

	// KEYPRESS EVENTS HANDLER
	$('#viewport .sendBox>input').keypress(function (e) {
		if (e.which == 13) {
			sendMessage();
		}
		// var _id = $(this).closest('.chatbox').attr('id');
		// pendingRender(_id);
		// if (e.which == 13) {

			

		// 	var msgFrom;
		// 	_json.users.forEach(function (user) {
		// 		if (user.replace(/ /g, "_") === _id)
		// 			msgFrom = user;
		// 	});
		// 	var msg = $('#' + _id + ' .sendBox>input').val();
		// 	msg = msg.replace(/\"/g, '\\"');
		// 	var t = $.now();
		// 	$('#' + _id + ' .sendBox>input').val('');
		// 	if (msg.replace(/\s/g, '') !== '') {
		// 		const result = addMessageText(msg);
				
		// 	} else {
		// 		$('#viewport .chats ul>li.pending').remove();
		// 	}
		// }
	});

	// KEYPRESS EVENTS HANDLER
	$('#viewport .sendBox>button').click(function (e) {
		$('#viewport .sendBox>input').focus();
		sendMessage();
	});

	// EVENT HANDLER
	$('#viewport .sendBox>input').focusout(function () {
		$('#viewport .chats ul>li.pending').remove();
	});

	function sendMessage() {
		var _id = $('.chatbox').attr('id');
		//pendingRender(_id);
		
		var msgFrom;
		_json.users.forEach(function (user) {
			if (user.replace(/ /g, "_") === _id)
				msgFrom = user;
		});
		var msg = $('#' + _id + ' .sendBox>input').val();
		msg = msg.replace(/\"/g, '\\"');
		var t = $.now();
		$('#' + _id + ' .sendBox>input').val('');
		if (msg.replace(/\s/g, '') !== '') {
			const result = addMessageText(msg);
		} else {
			$('#viewport .chats ul>li.pending').remove();
		}
	}

	function loadChatMessages(messages) {
		for (let i = messages.length - 1; i >= 0; i--) {
			const message = messages[i];
			enterNewMassage(message.userId, message.text);
			// $('#users').append($('<p></p>').text(message.userId));
			// $('#messages').append($('<p></p>').text(message.text));
			// $('#timestamps').append($('<p></p>').text(new Date(message.createdAt).toLocaleTimeString()));
		}
	}

	function addMessageText(messageText) {
		client.sendMessage({ channelId: DEMO_CHANNEL_ID, type: 'text', text: messageText }, function (err, data) {
			if (err) {
				console.log("sendMessage error", err);
				return;
			}

			var temp = {
				from: data.message.userId,
				msg: messageText,
				time: data.message.createdAt.toString(),
				action: ''
			}
			
			_json.chats.push(temp);
			console.log(_json);
			
			newMsgRender(temp);

			gotoBottom("chats");
		});
	}

	function addMessage(messageObj) {
		enterNewMassage(messageObj.userId, messageObj.text);
		// $('#users').append($('<p></p>').text(messageObj.userId));
		// $('#messages').append($('<p></p>').text(messageObj.text));
		// $('#timestamps').append($('<p></p>').text(new Date(messageObj.createdAt).toLocaleTimeString()));
	  }
});

function gotoBottom(id) {
	var element = document.getElementById(id);
	element.scrollTop = element.scrollHeight - element.clientHeight;
}