import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CVData } from '../types';

interface CVFormProps {
  onComplete: (data: CVData) => void;
}

export default function CVForm({ onComplete }: CVFormProps) {
  const [formData, setFormData] = useState<CVData>({
    serverName: '',
    discordName: '',
    age: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-500 mb-4 text-center">სივი</h1>
        <p className="text-gray-400 text-center mb-12 italic">
          წარადგინეთ თქვენი ინფორმაცია
        </p>

        <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="serverName" className="block text-amber-400 font-medium mb-2">
              სახელი სერვერზე *
            </label>
            <input
              type="text"
              id="serverName"
              value={formData.serverName}
              onChange={(e) => setFormData({ ...formData, serverName: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="თქვენი სახელი ED-RP ზე"
              required
            />
          </div>

          <div>
            <label htmlFor="discordName" className="block text-amber-400 font-medium mb-2">
              სახელი დისქორდზე *
            </label>
            <input
              type="text"
              id="discordName"
              value={formData.discordName}
              onChange={(e) => setFormData({ ...formData, discordName: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="username"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-amber-400 font-medium mb-2">
              წლოვანება *
            </label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="თქვენი წლოვანება"
              min="1"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-amber-400 font-medium mb-2">
              Role Play გამოცდილება *
            </label>
            <textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors resize-none"
              placeholder="მოგვიყევით თქვენ გამოცდილებაზე სერვერზე SAMP/ED-RP"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid()}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            შემდეგი
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
