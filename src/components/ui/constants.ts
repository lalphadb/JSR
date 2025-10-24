// Badge variants
export const BADGE_VARIANTS = {
  default: "inline-flex items-center rounded-full border border-input bg-background px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-xs"
}

// Button variants
export const BUTTON_SIZE_VARIANTS = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 text-xs",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10"
}

// Navigation menu
export const NAV_TRIGGER_STYLE = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"

// Sidebar
export const SIDEBAR_ITEM_STYLES = {
  base: "px-2 py-1.5 text-sm rounded-md transition-colors",
  hover: "hover:bg-accent hover:text-accent-foreground",
  active: "bg-accent text-accent-foreground"
}

// Toggle variants
export const TOGGLE_SIZE_VARIANTS = {
  default: "h-10 w-10",
  sm: "h-9 w-9",
  lg: "h-11 w-11"
}

// Sonner toast
export const TOAST_DEFAULT_CONFIG = {
  duration: 4000,
  classNameToast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg"
}

// Form field
export const FORM_MESSAGE_STYLE = "text-sm font-medium text-destructive"
