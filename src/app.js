import '@css/index.css'

import { 
  header, 
  text, 
  image, 
  link, 
  container
} from '@components'

import nodejsLogo from '@img/nodejs.png'

const el = container.create(document.body)

header.create(el, 'Setting up webpack 4')
text.create(el, 'This is the demo app for the webpack 4 tutorial.')
link.create(el, 'Read more at Auralinna.blog', 'https://auralinna.blog/post/2018/setting-up-webpack-4-for-a-project?utm_source=demo-app')
image.create(el, nodejsLogo, 'https://nodejs.org/en/')
