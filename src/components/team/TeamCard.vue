<template>
  <div href="#" class="profileCard ">
    <div class="overlay"></div>
      <g-image
        class="circle"
        :src="require('./../../assets/images/profile/' + profile.img)"
      ></g-image>
    <h2>{{profile.name}}</h2>
    <p>{{profile.position}}</p>

    <!-- <div class="profileCard_circle transition" :style="{ background: 'url(' + require('./../../assets/images/profile/' + bg) + ')' }"></div> -->
    <g-image class="profileCard_circle transition" fit="cover" :src="require('./../../assets/images/profile/' + profile.bg)"></g-image>
    <div class="social transition">
      <a :href="profile.links[0]"><font-awesome :icon="['fab', profile.socialButtons[0]]"/></a>
      <a :href="profile.links[1]"><font-awesome :icon="['fab', profile.socialButtons[1]]"/></a>
      <a :href="profile.links[2]"><font-awesome :icon="['fab', profile.socialButtons[2]]"/></a>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'profile'
  ]
};
</script>

<style>
.wallet {
  --bg-color: #ceb2fc;
  --bg-color-light: #f0e7ff;
  --text-color-hover: #fff;
  --box-shadow-color: rgba(206, 178, 252, 0.48);
}
.profileCard {
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}

.profileCard:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}

.profileCard:hover .overlay {
  transform: scale(5) translateZ(0);
}

.profileCard:hover .circle {
  border-color: var(--bg-color-light);
  background: var(--bg-color);
}

.profileCard:hover .circle:after {
  background: var(--bg-color-light);
}

.profileCard:hover p {
  color: var(--text-color-hover);
}

.profileCard:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
    0 15px 24px var(--box-shadow-color);
}

.profileCard h2 {
  top: 20px;
  position: relative;
  font-size: 24px;
  color: #4c5656;
  margin: 0;
  z-index: 100;
  transition: color 0.3s ease-out;
}

.profileCard p {
  top: 20px;
  position: relative;
  font-size: 17px;
  color: darkgray;
  margin-top: 10px;
  z-index: 100;
  transition: color 0.3s ease-out;
}

.circle {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
}

.circle:after {
  width: 118px;
  height: 118px;
  display: block;
  position: absolute;
  background: var(--bg-color);
  border-radius: 50%;
  top: 4px;
  left: 4px;
  transition: opacity 0.3s ease-out;
}

.overlay {
  width: 118px;
  position: absolute;
  height: 118px;
  border-radius: 50%;
  background: var(--bg-color);
  top: 100px;
  left: 90px;
  z-index: 0;
  transition: transform 0.3s ease-out;
}

.profileCard_circle {
  height: 400px;
  width: 450px;
  /* background: url(https://bestwallpapers.in/wp-content/uploads/2018/04/minimal-minimalist-nature-sunrise-river-mountains-trees-8k-wallpaper-1024x576.jpg)
    no-repeat; */
  /* background-size: cover; */
  position: absolute;
  border-radius: 50%;
  margin-left: -1px;
  margin-top: -270px;
}

.profileCard:hover .profileCard_circle {
  border-radius: 0;
  margin-top: -240px;
}

.transition {
  transition: 0.7s cubic-bezier(0.3, 0, 0, 1.3);
}

.social {
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 300px;
  background-color: #fff;
  position: absolute;
  margin-left: -1px;
  margin: 0;
  margin-top: 240px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.16);
}

.profileCard:hover .social {
  margin-top: 180px;
}

.social a {
  display: inline-block;
  padding: 10px;
  font-size: 17px;
}
</style>
