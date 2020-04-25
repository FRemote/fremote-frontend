<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg'+avatarPrefix">
        <span class="username text-muted">Hoa Pham</span>
        <span class="description">Sent you a message - today</span>
      </div>
      <p>
        Lorem ipsum represents a long-held tradition for designers,
        typographers and the like. Some people hate it and argue for
        its demise, but others ignore the hate as they create awesome
        tools to help create filler text for everyone from bacon lovers
        to Charlie Sheen fans.
      </p>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/p960x960/92497429_1240585112803862_5104665409794080768_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=x54zD0gzShwAX89BkIY&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=7235ad8ae6bd2c1c913b539bb2685739&oe=5EC7A585">
        <span class="username text-muted">Truong Jackie</span>
        <span class="description">Sent you a message - today</span>
      </div>
      <p>
        Lorem ipsum represents a long-held tradition for designers,
        typographers and the like. Some people hate it and argue for
        its demise, but others ignore the hate as they create awesome
        tools to help create filler text for everyone from bacon lovers
        to Charlie Sheen fans.
      </p>
    </div>
    <div class="post">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input text comment"
        v-model="textarea">
      </el-input>
      <el-button style="margin-top: 5px;">Comment</el-button>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'
export default {
  data() {
    return {
      avatarPrefix,
      carouselPrefix,
    }
  }
}
</script>

<style lang="scss">
.user-activity {
.user-block {
  .username,
  .description {
    display: block;
    margin-left: 50px;
    padding: 2px 0;
  }
  .username{
    font-size: 16px;
    color: #000;
  }
  :after {
    clear: both;
  }
  .img-circle {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    float: left;
  }
  span {
    font-weight: 500;
    font-size: 12px;
  }
}
.post {
  font-size: 14px;
  border-bottom: 1px solid #d2d6de;
  margin-bottom: 15px;
  padding-bottom: 15px;
  color: #666;
  .image {
    width: 100%;
    height: 100%;
  }
  .user-images {
    padding-top: 20px;
  }
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
  li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 13px;
  }
  .link-black {
    &:hover,
    &:focus {
      color: #999;
    }
  }
}

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
