import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter, faInstagram, faLinkedin)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}