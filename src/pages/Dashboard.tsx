import { useAppSelector } from '../redux/hooks'

const Dashboard = () => {
  const notes = useAppSelector((state) => state.meetings.notes)

  const totalMeetings = notes.length

  const totalActions = notes.reduce(
    (total, note) => total + (note.actionItems?.length || 0),
    0
  )

  const latestSummary =
    notes.length > 0 ? notes[notes.length - 1].summary : 'No meetings yet'

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-inter font-bold mb-9">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Total Meetings */}
        <div className="bg-white shadow-lg rounded-lg  p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <h2 className="text-gray-500">Total Meetings</h2>
          <p className="text-3xl font-bold">{totalMeetings}</p>
        </div>

        {/* Total Action Items */}
        <div className="bg-white shadow-lg rounded-lg  p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <h2 className="text-gray-500">Action Items</h2>
          <p className="text-3xl font-bold">{totalActions}</p>
        </div>

        {/* Latest Meeting */}
        <div className="bg-white shadow-lg rounded-lg  p-6 transition duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <h2 className="text-gray-500">Latest Summary</h2>
          <p className="text-sm mt-2">{latestSummary}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
