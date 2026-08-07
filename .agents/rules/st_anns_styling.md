# St. Ann's College landing page styling rules

## Dropdown Style
Whenever adding, updating, or maintaining navigation dropdown menus for the St. Ann's College website:
- Always use the premium glassmorphism/galaxy-blur style:
  - Background: `bg-gradient-to-b from-white/20 to-white/5`
  - Backdrop filter blur: `backdrop-blur-3xl`
  - Rounded corners: `rounded-2xl`
  - Shadows: `shadow-[0_20px_50px_rgba(120,119,198,0.25),inset_0_1px_2px_rgba(255,255,255,0.55)]`
  - Borders: `border border-white/25`
  - Layout: `py-2 z-50 overflow-hidden`
  - Position: centered under the parent menu element (`left-1/2 -translate-x-1/2 mt-2`)
- Hover sub-links inside the dropdown should use matching transparent backgrounds and bold text:
  - Standard styling: `block px-4 py-2 text-xs text-gray-800 hover:text-purple-700 hover:bg-white/25 font-bold transition-colors whitespace-nowrap text-center`
