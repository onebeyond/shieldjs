---
to: src/components<%= path %>/<%= h.changeCase.pascal(name) %>/index.tsx
---

export * from './<%= h.changeCase.pascal(name) %>';
