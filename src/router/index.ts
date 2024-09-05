import { createRouter, createWebHistory } from 'vue-router'
import TasksLayout from '@/module/task/layout/TasksLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksLayout,
      children: [
        {
          path: '/',
          name: 'tasks',
          component: () => import('@/module/task/view/PendingTasksView.vue')
        },
        {
          path: '/history',
          name: 'completed-tasks',
          component: () => import('@/module/task/view/CompletedTasksView.vue')
        }
      ]
    }
  ]
})

export default router
