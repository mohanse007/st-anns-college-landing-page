# St. Ann's College landing page styling rules

## Dropdown Style
Whenever adding, updating, or maintaining navigation dropdown menus for the St. Ann's College website:
- Always use the premium glassmorphism/galaxy-blur style:
  - Background: `bg-white/30`
  - Backdrop filter blur: `backdrop-blur-2xl`
  - Rounded corners: `rounded-2xl`
  - Shadows: `shadow-xl shadow-purple-950/5`
  - Borders: `border border-white/40`
  - Layout: `py-2 z-50 overflow-hidden`
  - Position: centered under the parent menu element (`left-1/2 -translate-x-1/2 mt-1.5`)
- Hover sub-links inside the dropdown should use matching transparent backgrounds and bold text:
  - Standard styling: `block px-4 py-2 text-xs text-gray-800 hover:text-purple-700 hover:bg-white/40 font-bold transition-colors whitespace-nowrap text-center`
