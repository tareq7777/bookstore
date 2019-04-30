
self.addEventListener('push', e=>{
    try {
        console.log(e)
        const data = e.data.json()
        console.log('Push Received')
        self.registration.showNotification(data.title, {
            title: "asdasd",
            body: 'Notified by Syriatel Company',
            icon: 'http://www.syriatel.sy/sites/all/themes/syriatel/images/my_syriatel.png'
        })
    } catch (error) {
        console.log('Error while receiving Push data: ', error)
    }
})
