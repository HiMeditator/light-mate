export function onMessage(event: any) {
    const message = event.data;
    console.log('[Frontend Recevie]', JSON.stringify(message));
    switch (message.command) {
    }
}
