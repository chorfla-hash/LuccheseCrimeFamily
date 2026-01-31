import { Crown, Shield, Sword, Briefcase, Users, User } from 'lucide-react';

export default function HierarchyPage() {
  const ranks = [
    {
      icon: Crown,
      level: 5,
      title: 'ბოსები',
      georgianTitle: 'Boss',
      sphere: 'საბოლოო გადაწყვეტილებები, სტრატეგია, კონტროლი ყველა სფეროში',
      control: 'თითო ქალაქი (LS, LA, SF) + Ghetto მთლიანად',
      special: 'ხელმძღვანელობს ყველა კაპოს, აკონტროლებს ოჯახური ერთობას',
    },
    {
      icon: Shield,
      level: 4,
      title: 'კაპოები',
      georgianTitle: 'Capo',
      sphere: 'ნარკოტიკი, იარაղი, სამხედრო ოპერაციები, ფინანსები, გავლენა',
      control: 'კონკრეტული სფეროები და ტერიტორიები',
      special: 'იღებენ გადაწყვეტილებებს სფეროში, კოორდინირებენ სოლდატებს, მოლაპარაკებები',
    },
    {
      icon: Sword,
      level: 3,
      title: 'სოლდატები',
      georgianTitle: 'Soldier',
      sphere: 'ქუჩის ოპერაციები, გეტო კონტროლი, შეტაკებები, ბაზის დაცვა',
      control: 'ეფექტიურ ოპერაციული დავალებები',
      special: 'ემორჩილება კაპოს, აქტიური ყოველდღიური დავალებები',
    },
    {
      icon: Briefcase,
      level: 2,
      title: 'სპეციალისტები',
      georgianTitle: 'Specialist',
      sphere: 'ფულის გათეთრება, სტრატეგიული ოპერაციები, რთული ამოცანები',
      control: 'მოკლევადიანი კონტროლი გეტოებში',
      special: 'სპეციალიზირებული უნარები, კრიტიკული ოპერაციები',
    },
    {
      icon: Users,
      level: 1,
      title: 'რეკრუტები / შემსრულებლები',
      georgianTitle: 'Recruit',
      sphere: 'გატანილი დავალებების შესრულება, ადგილობრივი კონტროლი, მეთვალყურეობა',
      control: 'კონკრეტული დავალებები',
      special: 'ჭკვიანი თვალყურისდევნება, მყარი ერთობის შენარჩუნება',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-amber-500 mb-4">იერარქია</h1>
          <p className="text-2xl text-amber-400 italic mb-2">La Struttura della Famiglia</p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className={`bg-black/40 backdrop-blur-sm border-l-4 border border-amber-600/20 rounded-lg overflow-hidden hover:border-amber-600/40 transition-all ${
                index === 0 ? 'border-l-amber-600 shadow-lg shadow-amber-600/20' : 'border-l-amber-500'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 p-4 rounded-lg ${
                    index === 0 ? 'bg-amber-600/30' : 'bg-amber-500/20'
                  }`}>
                    <rank.icon className={`w-8 h-8 ${index === 0 ? 'text-amber-600' : 'text-amber-500'}`} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-3xl font-bold text-amber-400">{rank.title}</h3>
                      <span className={`text-sm px-3 py-1 rounded ${
                        index === 0 ? 'bg-amber-600/40 text-amber-300' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        Level {rank.level}
                      </span>
                    </div>
                    <p className="text-amber-300 italic mt-1">{rank.georgianTitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-lg p-4 border border-amber-600/10">
                    <p className="text-xs text-amber-300/70 uppercase tracking-wide mb-2 font-semibold">სფეროები</p>
                    <p className="text-gray-300">{rank.sphere}</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-amber-600/10">
                    <p className="text-xs text-amber-300/70 uppercase tracking-wide mb-2 font-semibold">კონტროლი</p>
                    <p className="text-gray-300">{rank.control}</p>
                  </div>
                </div>

                <div className="mt-6 bg-amber-600/5 rounded-lg p-4 border border-amber-600/10">
                  <p className="text-xs text-amber-300/70 uppercase tracking-wide mb-2 font-semibold">სპეციფიკა</p>
                  <p className="text-gray-300">{rank.special}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600/10 to-amber-500/10 border border-amber-600/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-amber-400 mb-6">ბრძანების ჯაჭვი</h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              იერარქია წმინდა და უნდა გავითან ყოველთვის პატივით. ბრძანებები მიდიან ზემოდან ქვემოთ, და პატივი მიდის ქვემოდან ზემოთ. თითოეული წევრი იცის თავის ადგილი და პასუხისმგებლობა ორგანიზაციაში.
            </p>
            <p className="leading-relaxed">
              ეს სტრუქტურა უზრუნველყო ოჯახის გარჩევა და დამდიდრება ათეულების განმავლობაში. ხელმძღვანელობა და ერთობა არის საფუძველი, რომელზედაც აგებულია Lucchese Crime Family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
