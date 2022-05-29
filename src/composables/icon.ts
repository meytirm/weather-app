import { useQuasar } from 'quasar'

import {
  matDone,
  matFontDownload,
  matMenu,
} from '@quasar/extras/material-icons'

interface Icon {
  [key: string]: string
}

const icons: Icon = {
  done: matDone,
  font_download: matFontDownload,
  menu: matMenu,
}

export function useIcon() {
  const $q = useQuasar()
  $q.iconMapFn = (iconName: string) => {
    const icon = icons[iconName]
    if (icon) {
      return {
        icon,
      }
    }
  }
}
