<template>
  <Layout navBg="transparent" navType="dark">

    <!-- Parallax -->
    <div id="parallax-container">
      <div id="parallax-0"></div>
      <div id="parallax-1"></div>
      <div id="parallax-2"></div>
      <div id="parallax-3"></div>
      <div id="parallax-4"></div>
    </div>

    <div id="content">
      <b-container>
        <h1 class="hero">The MAD Corp.</h1>
        <p class="hero">Innovation & Technology Company.</p>
        <br>

        <!-- About section -->
        <About></About>

      </b-container>
    </div>
  </Layout>
</template>

<script>
import About from '~/components/home/About.vue'
export default {
  components: {
    About
  },
  metaInfo: {
    title: "Home"
  },
  mounted() {
    const nav = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    let parent =  document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    let menuBars = menuToggle.getElementsByTagName('span');
    
    // for controlling navbar transparency 
    window.onscroll = () => {
      if(window.pageYOffset <= 100) {
        nav.className = 'navbar sticky-top navbar-dark bg-transparent navbar-expand-lg';
        for(let i = 0; i < menuBars.length; i++) {
          menuBars[i].className = "dark";
        }
      }
      else {
        nav.className = 'navbar sticky-top navbar-light bg-light navbar-expand-lg scroll';
        for(let i = 0; i < menuBars.length; i++) {
          menuBars[i].className = "light";
        }
      }
    }

    // for controlling the parallax effect
    window.addEventListener('scroll', () => {
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * 1.58 * i / children.length) + 'px)';
      }
    }, false)  
  }
}

</script>

<style>
a:hover {
  text-decoration: none;
}

nav.bg-transparent {
  transition-duration: 400ms;
  background: rgba(0, 0, 0, 0.16) !important;
}

nav.bg-light {
  transition-duration: 400ms;
}

#parallax-container {
  display: block;
  height: 1000px;
}

#parallax-container div {
  position: fixed;
  top: 0;
  background-position: center !important;
  transform: translateY(0px);
  height: 570px;
  width: 100%;
  background-size: cover;
}

#content {
  display: block;
  position: relative;
  background-color: #F9FBFC;
  margin-top: -580px;
  padding-top: 10px;
  padding-bottom: 100px;
  text-align: justify;
}

@media only screen and (max-width: 512px) {
  #parallax-container div {
    height: 450px;
  }

  #content {
    margin-top: -680px;
    padding-top: 90px;
  }
}

#parallax-0 {
  background-image: url('./../assets/images/parallax/background.svg');
  position: absolute !important;
}

#parallax-1 {
  background-image: url('./../assets/images/parallax/stars.svg');
}

#parallax-2 {
  background-image: url('./../assets/images/parallax/pink-smoke.svg');
}

#parallax-3 {
  background-image: url('./../assets/images/parallax/white-smoke.svg');
}

#parallax-4 {
  background-image: url('./../assets/images/parallax/rocket.svg');
}

.container h1.hero {
  text-align: center;
  font-family: Montserrat, 'sans-serif';
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 10px;
  margin-bottom: 0.3em;
}

.container p {
  line-height: 1.8em;
}

.container p.hero {
  text-align: center;
  font-size: 18px;
  font-family: Montserrat, 'sans-serif';
}

.container .container {
  padding: 10px 30px ;
}

.container h2 {
  font-family: Montserrat, 'sans-serif';
  font-weight: 500;
}
</style>
