<template>
  <Layout navBg="light" navType="light">
    <b-container class="text-center content">
      <h2>Team</h2>
      <p>
        We're are an Innovation & Technology Company. Driven by the idea of conquering the world,
        we intend to change the world in a better way through Technology & Science.
        The MAD Corp. has been established with the motive of delivering the most Creative
        and Eminent Innovations to all the inhabitants of this planet.
        <br>
      </p>

      <b-row class="d-flex justify-content-between mx-auto">
      <b-col><ProfileCard :profile="dev"></ProfileCard></b-col>
      <b-col><ProfileCard :profile="adi"></ProfileCard></b-col>
      <b-col><ProfileCard :profile="may"></ProfileCard></b-col>
      </b-row>
    </b-container>
    <br>
  </Layout>
</template>

<script>
import ProfileCard from "~/components/team/TeamCard.vue";
export default {
  data () {
    return {
      adi: {
        name: "Aditya Sharma",
        position: "CTO",
        img: "aditya.jpg",
        bg: "bg2.png",
        socialButtons: [
          'twitter',
          'github',
          'linkedin'
        ],
        links: [
          'https://twitter.com/Aditya_s_26',
          'https://github.com/adityaas26',
          'https://www.linkedin.com/in/aditya-sharma26/'
        ]
      },
      dev: {
        name: "Devendra Sikarwar",
        position: "CEO",
        img: "devendra.jpg",
        bg: "bg1.png",
        socialButtons: [
          'instagram',
          'twitter',
          'linkedin'
        ],
        links: [
          'https://www.instagram.com/notdevendra/',
          '',
          'https://www.linkedin.com/in/devendra-sikarwar-6b5a51160/'
        ]
      },
      may: {
        name: "Mayank Shukla",
        position: "COO",
        img: "mayank.jpg",
        bg: "bg3.png",
        socialButtons: [
          'instagram',
          'twitter',
          'linkedin'
        ],
        links: [
          'https://www.instagram.com/mayank.shukla_ms/',
          '',
          'https://www.linkedin.com/in/mayank-shukla-115a03156/'
        ]
      },

    }
  },
  components: {
    ProfileCard
  }
};
</script>

<style>
.container {
  text-align: justify !important;
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
