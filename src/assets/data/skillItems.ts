import type { Skill } from '../types/skills'
import { v4 as uuid } from 'uuid'

export const skills: Skill[] = [
    {
        id: uuid(),
        name: 'Vue.js'
    },
    {
        id: uuid(),
        name: 'React.js'
    },
    {
        id: uuid(),
        name: 'TypeScript'
    },
    {
        id: uuid(),
        name: 'Python'
    },
    {
        id: uuid(),
        name: 'AWS'
    },
    {
        id: uuid(),
        name: 'Supabase'
    },
    {
        id: uuid(),
        name: 'Terraform'
    }
]
