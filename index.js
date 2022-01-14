window.addEventListener('DOMContentLoaded', () => {
	const message = document.getElementById('message');
	const sendButton = document.getElementById('send-message');
	const iframe = document.querySelector('iframe');
	const channel = new MessageChannel();
	const port1 = channel.port1;
	const { log } = console;

	function onMessage(e) {
		log(e.data);
	}

	function onClick() {
		port1.postMessage(message.value);
	}

	function onLoad() {
		sendButton.addEventListener('click', onClick);
		port1.onmessage = onMessage;
		iframe.contentWindow.postMessage({ name: 'init' }, '*', [channel.port2]);
	}

	iframe.addEventListener('load', onLoad);
});
