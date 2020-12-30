chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request == 'links_count') {
		const links = document.getElementsByTagName('a');
		console.log(links.length);
		sendResponse({count: links.length})
	}
	if (request == 'SendReg') {
		const links = document.getElementsByTagName('a');
		console.log(links.length);
		sendResponse({count: links.length})
	}
})