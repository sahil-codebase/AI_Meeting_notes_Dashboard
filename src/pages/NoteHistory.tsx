import { useAppSelector } from '../redux/hooks'

import Card from '../components/Card'

const NotesHistory = () => {
  const notes = useAppSelector((state) => state.meetings.notes)

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Notes History</h1>

      <div className="grid grid-cols-5 gap-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <p className="font-semibold">Summary</p>

            <p>{note.summary}</p>

            <p className="mt-3 font-semibold">Action Items</p>

            <ul className="list-disc ml-5">
              {note.actionItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default NotesHistory
