import { Heart, Handshake, TrendingUp } from 'lucide-react';

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-500 mb-4 text-center">The Family</h1>
        <p className="text-gray-400 text-center mb-12 italic">United in Purpose, Bound by Honor</p>

        <div className="space-y-6">
          <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-amber-400 mb-3">La Famiglia</h2>
                <p className="text-gray-300 leading-relaxed">
                  In the Lucchese Crime Family, we are more than just associates in business - we are
                  brothers and sisters bound by loyalty, respect, and tradition. Every member is valued,
                  protected, and expected to uphold the honor of our name.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <Handshake className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-amber-400 mb-3">Our Operations</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Lucchese Family maintains diverse business interests across San Andreas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Legitimate business fronts and enterprises</li>
                  <li>Protection and security services</li>
                  <li>Territory management and expansion</li>
                  <li>Strategic partnerships with other organizations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <TrendingUp className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-amber-400 mb-3">Growth & Prosperity</h2>
                <p className="text-gray-300 leading-relaxed">
                  We believe in the growth and development of every family member. Those who prove their
                  loyalty and capability are rewarded with increased responsibility, respect, and prosperity.
                  The success of the family is built on the success of its members.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-600/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4 text-center">Join Our Family</h2>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              If you believe you have what it takes to be part of something greater, to uphold our
              traditions and contribute to our legacy, we invite you to submit your application through
              the CV section.
            </p>
            <p className="text-amber-400 text-center font-semibold">
              Remember: Loyalty is not just expected - it is everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
