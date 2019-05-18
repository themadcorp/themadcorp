<template>
  <Layout navBg="light" navType="light">
    <b-container class="text-center content">
      <h2>Contact</h2>
      <p>
        We'd love your feedback!
        <br>
        Swing by for a cup of <font-awesome :icon="['fab', 'java']"/> , or leave us a note:
        <br>
      </p>

      <b-form @submit="onSubmit" v-if="showForm">
        <div class="form-row">

          <b-form-group class="col-md-6" label="Name" label-for="name-input">
            <b-form-input
              type="text"
              class="form-control"
              id="name-input"
              placeholder="Name"
              v-model="form.name"
              v-model.trim="$v.form.name.$model"
              :class="{ 'form-control is-invalid': $v.form.name.$error }"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.name.required">Name is required</b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters.</b-form-invalid-feedback>
          </b-form-group>


          <b-form-group class="col-md-6" label="Email" label-for="email-input">
            <b-form-input
              type="email"
              class="form-control"
              id="email-input"
              placeholder="Email"
              v-model="form.email"
              v-model.trim="$v.form.email.$model"
              :class="{ 'form-control is-invalid': $v.form.email.$error }"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.required">Email is required </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="!$v.form.email.email">Email is not correct </b-form-invalid-feedback>
          </b-form-group>
        </div>

        <b-form-group label="Message" label-for="message-input">
          <b-form-textarea
            class="textarea"
            id="message-input"
            placeholder="Message"
            rows="3"
            max-rows="6"
            v-model="form.message"
            aria-describedby="input-3-live-feedback"
            v-model.trim="$v.form.message.$model"
            :class="{ 'form-control is-invalid': $v.form.message.$error }"
          ></b-form-textarea>
          <b-form-invalid-feedback v-if="!$v.form.message.required">Message is required </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit" variant="secondary" :disabled="$v.form.$invalid">
          <!-- <font-awesome :icon="['fab', 'telegramplane']"/>Send -->
          Send
        </b-button>
      </b-form>

      <div class="sending">
        <semipolar-spinner
          class="mx-auto"
          v-if="showSpinner"
          :animation-duration="2000"
          :size="70"
          :color="'#ff1d5e'"
        />

        <p class="sent-text" v-if="showSentText">
          Thanks for reaching out! You'll hear from us soon!
        </p>
      </div>
      
    </b-container>
  </Layout>
</template>

<script>
import axios from "axios";
import {SemipolarSpinner} from 'epic-spinners'
import {validationMixin} from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: ""
      },
      url: "https://script.google.com/macros/s/AKfycbzztJguZPJ_okmDFR-i15rgVy71sy9pCktl5zBnguCYhz5kkNs/exec",
      showForm: true,
      showSpinner: false,
      showSentText: false
    };
  },
  components: {
    SemipolarSpinner
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required,
        email
      },
      name: {
        required,
        minLength: minLength(3)
      },
      message: {
        required
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.showForm = false
      this.showSpinner = true
      console.log(JSON.stringify(this.form))
      axios.get(this.url, {
        params: {
          data: JSON.stringify(this.form)
          }
        }
      ) .then(res => {
        console.log(res)
        this.form.email = ""
        this.form.name = ""
        this.form.message = "" 
        this.showForm = false
        this.showSpinner = false
        this.showSentText = true
      })
    },
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
  font-family: Montserrat, "sans-serif";
}

.container .container {
  padding: 10px 30px;
}

.container h2 {
  font-family: Montserrat, "sans-serif";
  font-weight: 500;
}

.textarea {
  overflow-y: hidden !important;
}

form {
  padding: 40px 0;
}

.sending {
  margin: 150px 0;
}

.sent-text {
 margin: 150px 0;
}
</style>
