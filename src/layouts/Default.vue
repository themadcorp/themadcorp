<template>
  <div id="app">

    <!-- Navbar -->
    <b-navbar toggleable="lg" :type="navType" :variant="navBg" sticky id="navbar">
      <b-navbar-brand to="/">The MAD Corp.</b-navbar-brand>
      <b-collapse id="collapseNav" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/team">Team</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-toggle class="d-lg-none" id="menuToggle" target="menu" >
        <input type="checkbox" />
        <span :class="navType"></span>
        <span :class="navType"></span>
        <span :class="navType"></span>
        <ul id="menu">
          <li><g-link to="/">Home</g-link></li>
          <li><g-link to="/blog">Blog  </g-link></li>
          <li><g-link to="/team">Team</g-link></li>
          <li><g-link to="/contact">Contact</g-link></li>
        </ul>
      </b-navbar-toggle>
    </b-navbar>

    <!-- Main Container -->
    <main class="main">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="http://www.themadcorp.com"> The MAD Corp </a></span>
    </footer>

  </div>
</template>

<script>

export default {
  props: ['navBg', 'navType'],
  components: {
    
  }
}
</script>

<style lang="scss">

@font-face {
    font-family: Montserrat;
    src: url('../assets/montserrat-latin-400.woff');
    font-weight: normal;
  }

@font-face {
    font-family: Noto-sans;
    src: url('../assets/noto-sans-latin-400.woff');
    font-weight: normal;
  }

// Navbar Styling
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.16);

  &-toggler {
    border: none;
  }

  &-toggler:focus {
    border: unset;
  }
}

button:focus {
    outline: none;
}

#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: flex;
  width: 30px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 30px;
  height: 3px;
  margin-bottom: 6px;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  z-index: 1;
  transform-origin: 0px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.2s ease;
}

#menuToggle span.dark {
  background: rgba(255, 255, 255, 0.5);
}
#menuToggle span.light {
  background: rgba(0, 0, 0, 0.5);
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(0px, -1px);
  background: #36383F;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0px, 2px);
}

#menu
{
  position: fixed;
  width: 350px;
  height: 106vh;
  box-shadow: 0 0 10px #85888C;
  margin: -50px 0 0 -280px;
  padding: 50px;
  padding-top: 125px;
  background-color: #F5F6FA;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  font-size: 1.2em;
  padding: 20px 0;
  transition-delay: 2s;
  text-align: center;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

.main {
  padding: 0;
}

.content {
  font-family: Montserrat;
  margin: 0 auto;
  padding: 1.5em 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
  background-color:rgb(226, 226, 226);

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
