import { flag_icon } from '$icons/'

export const icons: Hash<string> = $state({
   flag: "/icons/gr_flag.svg",
   theme: "/icons/moon.svg",
   home: "/icons/home_light.svg",
   hamburger: hamburger_icon(1.55),
   close: close_icon(1.55),
   underline: underline_icon(10),
   send_arrow: send_arrow_icon(10)
})
