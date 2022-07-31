import { useQuasar } from 'quasar'

import {
  matArrowDropDown,
  matCancel,
  matDone,
  matError,
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
  error: matError,
  arrow_drop_down: matArrowDropDown,
  cancel: matCancel,
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
