import { divs } from '$lib/divs.svelte'

export let navbar_collapsed = true

export default function toggleNavbar() {
   if (navbar_collapsed)
      openNavbar()

   else closeNavbar()
}

export function openNavbar() {
   divs.sidebar.style.left = "0px"
   navbar_collapsed = false
}

export function closeNavbar() {
   hideNavbar()
   navbar_collapsed = true
}

export function hideNavbar() {
   divs.sidebar.style.left = "-100%"
}
