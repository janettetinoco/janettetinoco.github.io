function handleGAEvent(action, event_category, event_label){
    return ((_) => {
        console.log('analytics');
        gtag('event', action, {event_category, event_label})
    })
}

document.querySelector('.js-resume-event').onclick = handleGAEvent('download_file', 'downloads','resume');

document.querySelector('.js-project-click').onclick = handleGAEvent('open_project', 'projects',`${link.href}` );

//add classnames into buttons