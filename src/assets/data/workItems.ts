import type { WorkItem } from '../types/work'
import { v4 as uuid } from 'uuid'

export const workItems: WorkItem[] = [
  {
    id: uuid(),
    title: 'Ebook Factory',
    description:
      'A web application that allows you to create, edit, and export Ebooks, as well as upload and edit EPUB metadata.',
    inProcess: true,
    techStacks: ['React (Next.JS)'],
    link: '',
    thumbnailPath: '',
    year: '2026',
  },
  {
    id: uuid(),
    title: 'DSJIN Blog ( Personal Blog )',
    description:
      'A personal web blog for lifestyle, coding (Migrated to Astro). Use TinaCMS for editor.',
    inProcess: false,
    techStacks: ['Astro', 'Vue.js', 'TinaCMS'],
    link: 'https://blog.dsjin.co',
    thumbnailPath: '',
    year: '2025',
  },
  {
    id: uuid(),
    title: 'Simple Chatroom',
    description:
      'A web application that allows you to send / receive a message inside the chat room channel. All messages are transmited using WebSocket (Supabase)',
    inProcess: false,
    techStacks: ['React', 'Supabase'],
    link: 'https://chatroom.dsjin.co',
    thumbnailPath: '',
    year: '2025',
  },
  {
    id: uuid(),
    title: 'Todo List',
    description:
      'A web application that allow syou to manage a group of tasks, manage a task. All informtion is stored in the cloud ( Supabase server )',
    inProcess: false,
    techStacks: ['Vue.JS', 'Supabase'],
    link: 'https://todo.dsjin.co',
    thumbnailPath: '',
    year: '2024',
  },
  {
    id: uuid(),
    title: 'Web QRCode Scanner',
    description:
      "A web application that scans qrcode with your device's cameras. It will save the scan result in IndexedDB for history. It is also able to generate QRcode and save it to your device.",
    inProcess: false,
    techStacks: ['Vue.JS', 'IndexedDB', 'Media Source Web API'],
    link: 'https://qrcode.dsjin.co',
    thumbnailPath: '',
    year: '2023',
  },
]

export default {
  workItems,
}
