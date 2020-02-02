<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="6" v-bind:key="video.id" v-for="video in media">
        <div class="embed-responsive embed-responsive-16by9" style="margin: 10px;">
            <div class="embed-responsive-item">
           <div>
                <video
            id="video.id"
            data-dashjs-player
            controls
            webkit-playsinline
            allowfullscreen
            v-bind:src="video.url"
          ></video>
          <div v-if="video.omnidirectional" class="embed-responsive-item">
           <b-button class="float-right " :pressed.sync="is360Video">View in VR</b-button>
           <div v-if="is360Video == true">
              <VRDashStreamer v-bind:url="video.url"></VRDashStreamer>
            </div>
          </div> 
           </div>
           </div>     
        </div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>	

<script>
import "@/../node_modules/video.js/dist/video-js.css";
import videojs from "video.js";
import "dashjs";
import "videojs-contrib-dash";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import VRDashStreamer from "./VRDashStreamer.vue";

export default {
  name: "AVCDashStreamer",
  props: {
    is360Video: {
    default: false,
  },
    media : {}
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    VRDashStreamer
  },
   mounted() {
    this.is360Video = false;
    console.log("HEVCDashStreamer is mounted with media: "+JSON.stringify(this.media));

   },
  methods: {
    startVideo : function(video){
      console.log("video: ",video);
      if (video.omnidirectional) {
       this.is360Video = true;
      } else {
        this.is360Video = false;
      }
    }
  }
};
</script>