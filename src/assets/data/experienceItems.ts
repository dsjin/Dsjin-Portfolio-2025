import type { Experience } from '../types/experiences'
import { v4 as uuid } from 'uuid'

export const experiences: Experience[] = [
  {
    id: uuid(),
    title: 'Human Resocia - Full Stack Developer',
    year: '2019 - present',
    template: `
      <p>
        Working as a dispatch full stack developer. Assigned in multiple client projects
        <ul class="list-disc list-inside pl-6">
          <li class="mt-2 mb-2">
            Shimizu Construction - Full Stack Developer | Nov 2025 - present
          </li>
          <li class="mt-2 mb-2">
            Honda Research Institute Japan - Full Stack Developer / Cloud Engineer | Aug 2022 - Jun 2025
          </li>
          <li class="mt-2 mb-2">
            Chara Web - Full Stack Developer | April 2020 - Jul 2022
          </li>
          <li class="mt-2 mb-2">
            Hivelocity - Low Coding Developer (Oracle APEX) | April 2020 - Jul 2022
          </li>
        </ul>
      </p>
    `
  },
  {
    id: uuid(),
    title: 'Faculty of Infomation Technology, KMITL - B.Sc Information Technology',
    year: '2014 - 2018',
    template: `
      <p>
        Major: Software Engineering
      </p>
      <p>
        GPA: 3.51
      </p>
    `
  }
]
