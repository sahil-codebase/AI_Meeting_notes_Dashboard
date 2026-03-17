import { useState } from 'react'

import { useAppDispatch } from '../redux/hooks'

import { addNote } from '../redux/slices/meetingSlice'

import { processTranscript } from '../services/meetingApi'

import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

const UploadTranscript = () => {
  const [text, setText] = useState('')

  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!text.trim()) return

    setLoading(true)

    const result = await processTranscript(text)

    dispatch(addNote(result))

    navigate('/history')

    setLoading(false)

    setText('')
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold font-serif mb-6 text-center">
          Upload Transcript
        </h1>

        <textarea
          className=" w-full border p-3"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded"
        >
          {loading ? 'Processing...' : 'Generate Notes'}
        </Button>
      </div>
    </div>
  )
}

export default UploadTranscript
