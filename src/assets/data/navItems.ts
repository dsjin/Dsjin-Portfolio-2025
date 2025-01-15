import type { MenuItem } from 'primevue/menuitem'

export const navItems: MenuItem[] = [
  {
    label: 'Home',
    route: '/',
    icon: 'pi pi-home',
  },
  {
    label: 'About Me',
    route: '/aboutme',
    icon: 'pi pi-user',
  },
]

export default navItems
