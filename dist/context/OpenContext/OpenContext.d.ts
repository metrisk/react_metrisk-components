/// <reference types="react" />
/**
 * Context for displaying something that opens
 */
declare const OpenContext: import('react').Context<{
  open: boolean
  setOpen: (open: boolean) => void
}>
export default OpenContext
