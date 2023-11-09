const menu = chrome.contextMenus.create({
    'id': 'helloWorld',
    'title': 'Hello "%s"',
    'contexts': ['selection']
})

chrome.contextMenus.onClicked.addListener((clickData) => {
    const inputString = clickData.selectionText
    console.log(inputString)
});