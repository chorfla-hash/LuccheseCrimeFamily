import { Crown, Shield, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTkxLDM2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Crown className="w-24 h-24 text-amber-500" strokeWidth={1.5} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mb-6 tracking-tight">
            Lucchese Crime Family
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light italic">
            La Famiglia è Tutto
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            ერთ-ერთი "ხუთი ოჯახი", რომელიც დომინირებდა ორგანიზებულ დანაშაულებრივ საქმიანობაში ნიუ-იორკში. ტრადიცია, ერთგულება და პატივი უპირველეს ყოვლისა.
          </p>

          <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8 hover:border-amber-600/40 transition-all">
              <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-500 mb-3">პატივი</h3>
              <p className="text-gray-400 leading-relaxed">
                ჩვენ ვიცავთ უძველეს ტრადიციებსა და კოდებს, რომლებიც ჩვენს ოჯახს თაობების განმავლობაში ხელმძღვანელობდა.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8 hover:border-amber-600/40 transition-all">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-500 mb-3">ერთგულება</h3>
              <p className="text-gray-400 leading-relaxed">
                ოჯახის წევრებს შორის კავშირი წმინდა და ურღვევია. ჩვენ ერთად ვდგავართ.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8 hover:border-amber-600/40 transition-all">
              <Crown className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-500 mb-3">პატივისცემა</h3>
              <p className="text-gray-400 leading-relaxed">
                პატივისცემა მიიღება ქმედებებით და შენარჩუნებულია მთლიანობის გზით.
              </p>
            </div>
          </div>

          <div className="mt-20 text-gray-500 text-sm">
            <p>ED-RP Server • San Andreas Multiplayer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
