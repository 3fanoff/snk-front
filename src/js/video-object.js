export default class VideoObject {
    video = null
    buttonNode = null
    frameNode = null
    frame = null

    constructor(item) {
        if (!item.dataset.video) return this;
        this.video = item.dataset.video;
        this.buttonNode = item.querySelector('.js-video-btn');
        this.frameNode = item.querySelector('.js-video-frame');
    }

    bindAction(type, callback) {
        this.buttonNode && this.buttonNode.addEventListener(type, callback);
    }

    createFrame () {
        const frame = document.createElement('iframe');
        frame.src = this.video + (this.video.lastIndexOf('?') > 0 ? '&' : '?') + 'autoplay=true&mute=1&q=360';
        frame.allow = 'autoplay';
        frame.allowFullscreen = true;
        frame.width = this.frameNode.clientWidth;
        frame.height = this.frameNode.clientHeight;
        this.frame = frame;
        return frame;
    }

    insertFrame () {
        this.frameNode.style.height = this.frameNode.clientHeight + 'px';
        this.frameNode.appendChild(this.frame || this.createFrame())
        this.frameNode.classList.add('active');
    }

    removeFrame () {
        this.frameNode.removeChild(this.frame);
        this.frameNode.classList.remove('active');
    }
}