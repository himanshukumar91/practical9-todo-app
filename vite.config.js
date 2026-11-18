import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/practical9-todo-app/',
    plugins: [react()],
})