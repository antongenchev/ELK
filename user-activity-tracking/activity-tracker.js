document.addEventListener('click', function(event_input) {
    const trackableClasses = ['track-click']
    const trackableIds = ['important-section', 'btn1', 'link1']

    // Check if the event is trackable
    const shouldTrack = trackableClasses.some(cls => event_input.target.classList.contains(cls)) ||
        trackableIds.includes(event_input.target.id);

    if (!shouldTrack) {
        // Do nothing if the event is not trackable
        return;
    }

    // Create the event data
    const eventData = {
        timestamp: new Date().toISOString(),
        eventType: 'click',
        pageUrl: window.location.href,
        userId: 'test_user',
        elementId: event_input.target.id || null,
    };

    // Send data to the backend
    fetch('/api/user-activity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
    });
});