<template>
  <div>
    <div align="bet" style="margin-bottom: 5px">
      <el-button
        id="magic"
        v-on:click="magic"
        v-waves
        class="filter-item"
        type="info"
        icon="el-icon-check"
      >
        Start Check-in
      </el-button>
      <el-button
        id="super"
        v-on:click="takeBoth"
        v-waves
        class="filter-item"
        type="primary"
      >
        Submit
      </el-button>
    </div>
    <video id="faceVideo" autoplay></video>
    <video id="screenVideo" autoplay></video>
    <div>
      <img id="faceImg" src="" />
      <img id="screenImg" src="" />
    </div>
    <canvas style="display:none;"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      isStart: true
    }
  },
  methods: {
    magic: async () => {
      const faceVideo = document.querySelector("#faceVideo");
      const screenVideo = document.querySelector("#screenVideo");
      await navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(steam => {
          faceVideo.srcObject = steam;
        })
        .catch(err => {
          console.log(err);
        });
      await navigator.mediaDevices
        .getDisplayMedia()
        .then(steam => {
          screenVideo.srcObject = steam;
        })
        .catch(err => {
          console.log(err);
        });
    },
    takeBoth: () => {
      const faceImg = document.querySelector("#faceImg");
      const faceVideo = document.querySelector("#faceVideo");
      const desktopImg = document.querySelector("#screenImg");
      const screenVideo = document.querySelector("#screenVideo");
      const canvas = document.createElement("canvas");

      //take faceshoot
      canvas.setAttribute("width", 800);
      canvas.setAttribute("height", 500);
      // canvas.getContext("2d").drawImage(faceVideo, 0, 0);
      // let dataUrlFace = canvas.toDataURL("image/png");
      // faceImg.setAttribute("src", dataUrlFace);
      // faceVideo.srcObject = undefined;
      //take screenshot
      canvas.setAttribute("width", 1535);
      canvas.setAttribute("height", 900);
      canvas.getContext("2d").drawImage(screenVideo, 0, 0);

      let dataScreenUrl = canvas.toDataURL("image/png");

      desktopImg.setAttribute("src", dataScreenUrl);
      screenVideo.srcObject = undefined;
      //remove face, screen video
      faceVideo.remove();
      screenVideo.remove();

      //Using to download load img
      //   var hrefElement = document.createElement("a");
      //   hrefElement.href = dataUrl;
      //   document.body.append(hrefElement);
      //   hrefElement.download = "screenshot$.png";
      //   hrefElement.click();
      //   hrefElement.remove();
    }
  }
};
</script>

<style scoped>
.el-dialog__body {
  padding: 30px 0;
}
#screenImg {
  width: 100%;
}
#faceImg {
  position: absolute;
  z-index: 1;
  bottom: -1000;
  width: 30%;
}
#screenVideo {
  width: 100%;
}
#faceVideo {
  width: 25%;
  position: absolute;
}
</style>
