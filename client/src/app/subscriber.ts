
const pbvk = 'BN8y70PiBGqdNusT7de67a7fM9jbp1NlVdIwyZpMhE0kmB87t9la2Tn7gsDBfSWYn8i8nx8ozT54H0lsarMa4IE'

export async function send(username) {
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('Service Worker Registered')

    console.log('Registering Push')
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(pbvk)
    })
    console.log('Push Registered')

    console.log('Sending Push..')
    await fetch('http://127.0.0.1:3000/subscribe/'+username, {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    })
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}