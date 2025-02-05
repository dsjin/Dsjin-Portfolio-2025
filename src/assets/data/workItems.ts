import type { WorkItem } from '../types/work'
import { v4 as uuid } from 'uuid'

export const workItems: WorkItem[] = [
  {
    id: uuid(),
    title: 'Todo List',
    description:
      "A web application that allow you to manage a group of tasks, manage a task. All informtion is stored in the cloud ( Supabase server )",
    inProcess: true,
    techStacks: [
      'Vue.JS',
      'Supabase',
    ],
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
    techStacks: [
      'Vue.JS',
      'IndexedDB',
      'Media Source Web API',
    ],
    link: 'https://qrcode.dsjin.co',
    thumbnailPath: '',
    year: '2023',
  },
]

export default {
  workItems,
}
