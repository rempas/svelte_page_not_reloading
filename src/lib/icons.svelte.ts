import { home_icon } from '$icons/home'
import { hamburger_icon } from '$icons/hamburger'
import { close_icon } from '$icons/close'
import { underline_icon } from '$icons/underline'
import { send_arrow_icon } from '$icons/send_arrow'

export const icons: Hash<string> = $state({
   flag: "/icons/gr_flag.svg",
   theme: "/icons/moon.svg",
   home: home_icon(1.55),
   hamburger: hamburger_icon(1.55),
   close: close_icon(1.55),
   underline: underline_icon(1.55),
   send_arrow: send_arrow_icon(1.55)
})
