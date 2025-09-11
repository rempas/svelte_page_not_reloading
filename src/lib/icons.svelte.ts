import { home_icon } from '$icons/home'
import { hamburger_icon } from '$icons/hamburger'
import { close_icon } from '$icons/close'
import { underline_icon } from '$icons/underline'
import { send_arrow_icon } from '$icons/send_arrow'
import { contact_icon } from '$icons/contact'
import { projects_icon } from '$icons/projects'

const icon_size = 2

export const icons: Hash<string> = $state({
   flag: "",
   theme: "",
   home: home_icon(icon_size - 0.3),
   hamburger: hamburger_icon(icon_size - 0.2),
   close: close_icon(icon_size - 0.3),
   underline: underline_icon(icon_size + 6),
   send_arrow: send_arrow_icon(icon_size),
   contact: contact_icon(icon_size),
   projects: projects_icon(icon_size),
})
