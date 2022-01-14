window.addEventListener('DOMContentLoaded', () => {
	const message = document.getElementById('message');
	let port2;

	function onMessage(e) {
		message.textContent = e.data;
		port2.postMessage(`Message received: ${e.data}`);
	}

	window.addEventListener('message', (e) => {
		const { data, ports } = e;

		if (data.name === 'init') {
			port2 = ports[0];
			port2.onmessage = onMessage;
		}
	});
});
