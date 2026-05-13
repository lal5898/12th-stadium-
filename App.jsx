import { useState } from 'react';

export default function TwelfthStadiumApp() {
  const [selectedTeam, setSelectedTeam] = useState('CSK');

  const teams = [
    { name: 'CSK', color: 'bg-yellow-400' },
    { name: 'MI', color: 'bg-blue-500' },
    { name: 'RCB', color: 'bg-red-600' },
    { name: 'KKR', color: 'bg-purple-600' },
    { name: 'SRH', color: 'bg-orange-500' },
    { name: 'RR', color: 'bg-pink-500' },
    { name: 'DC', color: 'bg-sky-500' },
    { name: 'PBKS', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-white font-sans">
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">12th Stadium</h1>
          <p className="text-sm text-gray-400">Where Fans Become the 12th Player</p>
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-2 rounded-xl font-semibold text-black">
          Join Now
        </button>
      </header>

      <section className="px-8 py-16 text-center">
        <h2 className="text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          India’s Ultimate IPL Fan Community
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Support your favorite IPL team, join fan wars, share emotions, and become part of the loudest cricket community online.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-2xl shadow-lg transition">
            Enter Stadium
          </button>

          <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-2xl transition">
            Explore Teams
          </button>
        </div>
      </section>

      <section className="px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Choose Your Army</h3>
          <p className="text-gray-400">Join your fanbase</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teams.map((team) => (
            <div
              key={team.name}
              onClick={() => setSelectedTeam(team.name)}
              className={`bg-[#111c2d] border ${selectedTeam === team.name ? 'border-cyan-400' : 'border-white/10'} rounded-3xl p-6 hover:scale-105 transition duration-300 cursor-pointer shadow-xl`}
            >
              <div className={`w-16 h-16 rounded-full ${team.color} mx-auto`} />
              <h4 className="text-center text-xl font-bold mt-5">{team.name}</h4>
              <p className="text-center text-sm text-gray-400 mt-2">Join the fan army</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-8">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 rounded-3xl p-8 shadow-2xl text-center">
          <h3 className="text-3xl font-bold">{selectedTeam} Army Joined</h3>
          <p className="text-gray-300 mt-2">
            Welcome to the loudest fanbase inside 12th Stadium.
          </p>
        </div>
      </section>
    </div>
  );
}
