const videoModal = function () {
    let localRefs;
    return {
        // Initialize the video modal reference
        setup(refs) {
            localRefs = refs;
        },
        play() {
            this.showVideo = true;
            localRefs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command", "func":"playVideo", "args": ""}', '*');
        },
        hide() {
            this.showVideo = false;
            localRefs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args": ""}', '*');
        },
        showVideo: false,
    };
};

window.$home = videoModal;
