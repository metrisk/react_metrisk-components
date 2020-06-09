import * as React from 'react'
import { Suspense } from 'react'

import { canUseDOM } from '../../lib/canUseDOM'

const SsrCompatibleSuspense = ({ children, fallback }: any) => {
  if (canUseDOM) {
    return <Suspense fallback={fallback}>{children}</Suspense>
  }

  return <div>{children}</div>
}

export default SsrCompatibleSuspense
