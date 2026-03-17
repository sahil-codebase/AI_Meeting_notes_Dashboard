import { useAppSelector } from '../redux/hooks'

const Settings = () => {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold font-serif mb-6 text-left ml-9">
          Settings:
        </h1>

        <div className="bg-white p-10 ml-9 rounded shadow-lg max-w-md">
          <h2 className="text-lg font-semibold mb-4">Account Info</h2>

          <p className="mb-2">
            <strong> Email:</strong>
            {user}
          </p>

          <p className="text-sm text-gray-500">
            This is a demo SaaS application. Settings can be extended.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Settings
