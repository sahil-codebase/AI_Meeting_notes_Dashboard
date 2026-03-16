import { useState } from 'react'

import { useAppDispatch } from '../redux/hooks'

import { addNote } from '../redux/slices/meetingSlice'

import { processTranscript } from '../services/meetingApi'

const UploadTranscript = () => {
  const [text, setText] = useState('')

  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const handleSubmit = async () => {
    if (!text.trim()) return

    setLoading(true)

    const result = await processTranscript(text)

    dispatch(addNote(result))

    setLoading(false)

    setText('')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Transcript</h1>

      <textarea
        className="w-full border p-3"
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        {loading ? 'Processing...' : 'Generate Notes'}
      </button>
    </div>
  )
}

export default UploadTranscript
