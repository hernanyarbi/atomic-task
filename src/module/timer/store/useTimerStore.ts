import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTimerStore = defineStore('timer', () => {
  // Estado del temporizador
  const time = ref(1) // 1500 25 minutos en segundos
  const isRunning = ref(false)
  const isRest = ref(false)
  const cycle = ref(1) // Número de ciclos completados
  let intervalId: number | null = null

  // Cargar el sonido de alarma
  const alarmSound = new Audio('/src/assets/sounds/alarm.mp3')

  // Computed properties para minutos y segundos
  const minutes = computed(() => String(Math.floor(time.value / 60)).padStart(2, '0'))
  const seconds = computed(() => String(time.value % 60).padStart(2, '0'))

  // Función para iniciar el temporizador
  const startTimer = () => {
    if (intervalId !== null) {
      // Si ya hay un intervalo en marcha, no hacemos nada
      return
    }

    isRunning.value = true
    intervalId = window.setInterval(() => {
      console.log(time.value)

      if (time.value > 0) {
        tick()
      } else {
        playAlarm()
        stopTimer() // Detener el temporizador después de que suene la alarma

        // Aumentar el ciclo y determinar el siguiente tiempo
        if (isRest.value) {
          cycle.value++
        }
        isRest.value = !isRest.value
        if (cycle.value % 4 === 0) {
          // Después de cada 4 ciclos, establecer un descanso largo
          time.value = 900 // 15 minutos de descanso largo
        } else {
          // De lo contrario, establecer un descanso corto
          time.value = 300 // 5 minutos de descanso corto
        }
      }
    }, 1000)
  }

  // Función para detener el temporizador
  const stopTimer = () => {
    isRunning.value = false
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  // Función para restablecer el temporizador
  const resetTimer = () => {
    time.value = 1500 // Restablecer a 25 minutos
    isRunning.value = false
    cycle.value = 0 // Restablecer ciclos
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  // Función para decrementar el tiempo
  const tick = () => {
    if (time.value > 0) {
      time.value--
    }
  }

  // Función para reproducir el sonido de alarma
  const playAlarm = () => {
    alarmSound.play()
  }

  return {
    time,
    isRunning: computed(() => isRunning.value),
    isRest: computed(() => isRest.value),
    cycle,
    minutes,
    seconds,
    startTimer,
    stopTimer,
    resetTimer
  }
})
