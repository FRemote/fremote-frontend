<template>
  <div>
    <div id="demo">
      <div align="center">
        <el-button
          id="magic"
          v-on:click="magic"
          v-waves
          class="filter-item"
          type="primary"
        >
          Start Checkin
        </el-button>
        <el-button
          id="super"
          v-on:click="takeBoth"
          v-waves
          class="filter-item"
          type="primary"
        >
          Submit Checkin
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
  </div>
</template>

<script>
export default {
  name: "Screenshot",
  methods: {
    magic: async () => {
      const faceVideo = document.querySelector("#faceVideo");
      const screenVideo = document.querySelector("#screenVideo");
      //call face camera
      await navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(steam => {
          faceVideo.srcObject = steam;
        })
        .catch(err => {
          console.log(err);
        });
      //call share screen
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

      canvas.getContext("2d").drawImage(faceVideo, 0, 0);

      let dataUrlFace = canvas.toDataURL("image/png");
      //faceImage src png:base64
      console.log(dataUrlFace);

      faceImg.setAttribute("src", dataUrlFace);
      faceVideo.srcObject = undefined;

      //take screenshot
      canvas.setAttribute("width", 2000);
      canvas.setAttribute("height", 1100);
      canvas.getContext("2d").drawImage(screenVideo, 0, 0);

      let dataScreenUrl = canvas.toDataURL("image/png");
      //screenImage src png:base64
      console.log(dataScreenUrl);

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
#demo {
  width: 100%;
  height: 100%;
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
  width: 60%;
}
#faceVideo {
  width: 30%;
}
</style>
