import type { MeetingNote } from '../types/meeting'
// import api from './axios'

export const processTranscript = async (
  transcript: string
): Promise<MeetingNote> => {
  // try {
  //   // 🔥 Call your app endpoint
  //   await api.post('/api/process-transcript', {
  //     transcript
  //   })

  //   console.log('API HIT: /api/process-transcript')
  // } catch (error) {
  //   console.log(' No backend yet, but API simulated', error)
  // }

  return new Promise((resolve) => {
    setTimeout(() => {
      const sentenses = transcript.split('.')
      const summary =
        sentenses.slice(0, 2).join('.') || 'Meeting discussion summary.'
      const decisions = ['key topic discussed in the meeting']
      const actionItems = [
        'Follow up on meeting discussion',
        'prepare next step based on transcript'
      ]

      resolve({
        id: Date.now().toString(),
        transcript,
        summary,
        decisions,
        actionItems,
        createdAt: new Date().toISOString()
      })
    }, 1500)
  })
}
