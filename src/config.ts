import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Jiwoo纪事簿',
  subtitle: '以蛙跃古池的刹那声响，凝固永恒寂寥',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // 在这里设置你的主题色，Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // 选择是否固定主题色，默认false
  },
  banner: {
    enable: true,
    src: 'https://img.050413.xyz/file/1743259986965_wallhaven-l3x1ky_2560x1600.png',   // 在这里设置你的首页横幅图片 Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // 在这里设置你的横幅图片位置 Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // 这里可以设置你的横幅图片的作者信息 Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // 设置是否显示文章目录 Display the table of contents on the right side of the post
    depth: 2                // 文章目录默认显示到2级 Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: '进来看看嘛',
      url: 'https://todo.050413.xyz',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
    {
      name: '别看别看',
      url: 'https://img.050413.xyz',
      external: true,
    },

  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Jiwoo',
  bio: '以蛙跃古池的刹那声响，凝固永恒寂寥',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
