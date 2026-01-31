export default function BiographyPage() {
  const eras = [
    {
      period: "1987 - საწყისი",
      title: "ოთხი ძმის გაერთიანება",
      content: "Lucchese Crime Family-ს ოჯახს აქვს ისტორია ძალაუფლების, სისხლისა და გავლენის. მისი წარმოშობა იწყება LS-ს ქუჩებში, 1987 წლის ზაფხულზე, როდესაც ოთხი ემიგრანტი ძმა Carmine, Matteo, Bachi და Nick გაერთიანდა პატარა, მაგრამ ამბიციურ ბანდად. თავდაპირველად ოჯახი აკონტროლებდა ნარკოტიკს და მცირე ბიზნესს, თუმცა მალევე ყველაფერი შეიცვალა. ოჯახი წავიდა ფულის, ძალაუფლების და გავლენის მოპოვების გზაზე.",
    },
    {
      period: "1989 - 1993",
      title: "სისხლიანი გამოცდილება",
      content: "ოჯახი გაიზარდა და გაძლიერდა. ამ წლებში გაიარეს პირველი სისხლიანი ბრძოლები, სროლა ქიჩებში, ღალატი და შეტაკებები ისევე, როგორც კრიმინალურ ოჯახებთან და გეტოსთან ასევე ფედერალებთან. ეს გამოცდილება შეიქმნა საფუძვლად ოჯახის წესებისა და ერთობისთვის: მოღალატე ვერ გადარჩება, ერთობა არის კანონი.",
    },
    {
      period: "1994 - 1999",
      title: "ფინანსური გაფართოება",
      content: "Lucchese Crime Family კვლავ გაფართოვდა ფინანსურად და სტრატეგიულად. ოჯახმა დაიწყო ბენზინგასამართი სადგურების, მაღაზიების და ფულის გათეთრების კონტროლი, ხოლო გავლენა გავრცელდა პოლიციაზე, მერიაზე, პრეზიდენტის რეზიდენციაზე, არმიასა და ქალაქის ბიზნეს სტრუქტურებზე. ისინი ქმნიდნენ არაპირდაპირი კონტროლის ქსელს.",
    },
    {
      period: "2000 - დღემდე",
      title: "გლობალური გავლენა",
      content: "ოჯახი უკვე ძალიან გამყარებული გახდა LA, LS, SF-სა და Ghetto-ებში. ყოველ ქალაქსა და გეტოში გავლენას განასახიერებდა ოჯახის ერთიანი ძალა. ბრძოლები, შანტაჟი და გარიგებები ყველა ქმედება იყო გათვლილი გავლენისთვის. Lucchese Crime Family ყოველთვის იყო მძაფრად სტრატეგიული და სასტიკი.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-amber-500 mb-4">Lucchese Crime Family</h1>
          <p className="text-2xl text-amber-400 italic mb-2">ბიოგრაფია</p>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {eras.map((era, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border-l-4 border-l-amber-600 border border-amber-600/20 rounded-lg p-8 hover:border-amber-600/40 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-600/20 border border-amber-600/40">
                    <span className="text-amber-400 font-bold text-sm text-center">{era.period}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-amber-400 mb-3">{era.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{era.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-600/10 to-amber-500/10 border border-amber-600/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-amber-400 mb-6">საბოლოო კოორდინაცია</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">4</div>
              <p className="text-gray-300">ბოსი რომელიც ხელმძღვანელობენ ოჯახს</p>
            </div>
            <div className="text-center border-l border-r border-amber-600/20">
              <div className="text-3xl font-bold text-amber-500 mb-2">მთელი ქვეყნე</div>
              <p className="text-gray-300">კონტროლი და გავლენა</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">∞</div>
              <p className="text-gray-300">ერთობა და ძალა</p>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-8 italic text-lg">
            "ფინანსურად ოჯახი აკონტროლებს ყველა ძირითად ნაკადს: ნარკოტიკები, იარაღი, ფული. დღემდე, 4 ბოსის ხელმძღვანელობით, Lucchese Crime Family წარმოადგენს ძველ, სისხლიანი გამოცდილებით გაძლიერებულ, დაუმარცხებელ ორგანიზმს."
          </p>
        </div>
      </div>
    </div>
  );
}
