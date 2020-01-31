//import HelloWorld from './components/HelloWorld.vue'
import HEVCDashStreamer from "./components/HEVCDashStreamer.vue";
import AVCDashStreamer from "./components/AVCDashStreamer.vue";
import axios from 'axios';

export default {
    name: 'app',
    components: {
        HEVCDashStreamer,
        AVCDashStreamer
    },
    data() {
        return {
            media: {},
            loading: true
        }
    },
    created() {
        this.loadMedia();
    },
    methods: {
        loadMedia : function() {
            axios
            .get("http://h2857701.stratoserver.net/DashPlayer/media/media.json")
            .then(response => {
                this.media = response.data.contents;
                console.log("axios media: "+JSON.stringify(this.media));
            }).finally(() => {
                
                this.loading = false;
                console.log("Finish loading")
            });
        },
        isHEVCSupported: function () {
            let video;

            if (!video) {
                video = document.createElement('video')
            }

            let h265 = video.canPlayType('video/mp4; codecs="hev1.1.6.L186.80"');
            if (h265 === 'probably' || h265 === 'maybe') {
                return true;
            }
            return false;
        }
    }
}