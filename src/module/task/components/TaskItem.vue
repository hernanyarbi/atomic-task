<template>
  <div class="flex items-center gap-2 w-full">
    <input
      id="link-checkbox"
      type="checkbox"
      :checked="!!task.completedAt"
      @change="taskStore.completeTask(task.id)"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
    />

    <p v-if="!editMode" class="p-1">{{ task.description }}</p>
    <input
      v-else
      @keyup.enter="updateChanges"
      type="text"
      name="task"
      id="task"
      class="border p-1 border-red-500 rounded-lg w-full max-w-sm"
      v-model="description"
    />
  </div>
  <div class="flex justify-end items-center">
    <div class="flex space-x-2" v-if="!task.completedAt">
      <ToolTip
        text="Puedes considerar dividir esta tarea."
        position="bottom"
        v-if="task.isComplex && !task.subTask?.length && !editMode"
      >
        <div class="cursor-pointer" @click="enableEditMode"><CutIcon /></div>
      </ToolTip>
      <ToolTip
        text="Puedes considerar dividir esta tarea."
        position="bottom"
        v-if="!task.isComplex && !editMode"
      >
        <div class="cursor-pointer" @click="enableEditMode"><EditIcon /></div>
      </ToolTip>
      <ToolTip text="Guardar Cambios" position="bottom" v-if="editMode">
        <div class="cursor-pointer" @click="updateChanges"><TickSquareIcon /></div>
      </ToolTip>
      <ToolTip text="Eliminar Tarea" position="bottom">
        <div class="cursor-pointer" @click="taskStore.deleteTask(task.id)">
          <TrashIcon />
        </div>
      </ToolTip>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolTip from '@/module/common/components/ToolTip.vue'
import type { Task } from '../interfaces/task.interface'
import { useTaskStore } from '../store/useTaskStore'
import CutIcon from '@/module/common/icons/CutIcon.vue'
import { ref } from 'vue'
import TickSquareIcon from '@/module/common/icons/TickSquareIcon.vue'
import EditIcon from '@/module/common/icons/EditIcon.vue'
import TrashIcon from '@/module/common/icons/TrashIcon.vue'
interface Props {
  task: Task
}
const props = defineProps<Props>()

const taskStore = useTaskStore()
const editMode = ref(false)
const description = ref(props.task.description)

const enableEditMode = () => {
  editMode.value = !editMode.value
}

const updateChanges = () => {
  const updateTask = {
    ...props.task,
    description: description.value
  }
  taskStore.updateTask(updateTask)
  editMode.value = false
}
</script>
