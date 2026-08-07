# St. Ann's College landing page styling rules

## Dropdown Style
Whenever adding, updating, or maintaining navigation dropdown menus for the St. Ann's College website:
- Always use the premium glassmorphism/galaxy-blur style:
  - Background: `bg-gradient-to-b from-pink-100/25 via-pink-50/15 to-white/5`
  - Backdrop filter blur: `backdrop-blur-3xl`
  - Rounded corners: `rounded-2xl`
  - Shadows: `shadow-[0_20px_50px_rgba(244,63,94,0.15),inset_0_1px_2px_rgba(255,255,255,0.6)]`
  - Borders: `border border-pink-200/30`
  - Layout: `py-2 z-50 overflow-hidden`
  - Position: centered under the parent menu element (`left-1/2 -translate-x-1/2 mt-2`)
- Hover sub-links inside the dropdown should use matching transparent backgrounds and bold text:
  - Standard styling: `block px-4 py-2 text-xs text-gray-800 hover:text-pink-600 hover:bg-pink-50/40 font-bold transition-colors whitespace-nowrap text-center`
