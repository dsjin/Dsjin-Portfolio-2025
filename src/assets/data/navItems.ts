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
  {
    label: 'Work',
    route: '/work',
    icon: 'pi pi-briefcase',
  },
  {
    label: 'Blog',
    url: 'https://blog.dsjin.co',
    icon: 'pi pi-book'
  }
]

export default {
  navItems,
}
