<template>
  <a-scene v-on:click="startVideo(url)">
            <a-assets>
               <video data-dashjs-player id="dashjs" class="player" webkit-playsinline></video>
          
            </a-assets>
           <a-videosphere id="videosphere" src="#dashjs"></a-videosphere>
          </a-scene> 
 </template>

<script>
import 'aframe'
import videojs from "video.js";
import "dashjs";
import "videojs-contrib-dash";
export default {
  name: "VRDashStreamer",
  props: {
    url : {}
  },
  mounted : function(){
    console.log("VRDashStreamer is mounted with media: "+JSON.stringify(this.url));
    
  },
  methods: {
    startVideo: function(url){
      const options = {
         html5: {
          nativeCaptions: false
        }
      };

        var player = videojs('dashjs',options)
        var readyState = player.readyState();
        console.log("State: "+readyState);
        if(readyState == 0){
          player.ready(function () {
            console.log("url:"+url);
            player.src({
            src: url,
            type: 'application/dash+xml'
          })
          player.play()
        });
        }
  }    
}

};
</script>