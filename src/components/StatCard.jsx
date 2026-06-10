const StatCard = ({ label, value, darkMode }) => {
  return (
    <div className={`border rounded-xl p-4 ${
      darkMode ? 'bg-[#13101f] border-[#2a2440]' : 'bg-white border-gray-200'
    }`}>
      <p className={`text-xs mb-2 ${darkMode ? 'text-[#6b6485]' : 'text-gray-400'}`}>{label}</p>
      <p className="text-2xl font-medium text-purple-400">{value}</p>
    </div>
  )
}

export default StatCard