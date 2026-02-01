import { useState } from 'react';
import { ArrowRight, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { CVData, QuestionAnswers } from '../types';

interface QuestionFormProps {
  cvData: CVData & { cvFile?: File }; // Ensure cvFile is part of the data
  onBack: () => void;
}

const questions = [
  {
    id: 'question1',
    question: 'წაიკითხეთ თუ არა ბიოგრაფიის განყოფილება და გაიგეთ ლუჩეს კრიმინალური ოჯახის ღირებულებები?',
  },
  {
    id: 'question2',
    question: 'რატომ გსურთ შეუერთდეთ Lucchese Crime Family-ს?',
  },
  {
    id: 'question3',
    question: 'რა შეგიძლიათ წვლილი შეიტანოთ ოჯახში და როგორ აპირებთ თქვენი ერთგულების დამტკიცებას?',
  },
];

export default function QuestionForm({ cvData, onBack }: QuestionFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuestionAnswers>({
    question1: '',
    question2: '',
    question3: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id as keyof QuestionAnswers];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // 1. Create FormData to handle both File and Embed
    const formData = new FormData();

    // 2. Attach the CV File if it exists
    if (cvData.cvFile) {
      formData.append('file', cvData.cvFile);
    }

    // 3. Create the Embed Payload
    const payload = {
      username: "Lucchese Application Bot",
      embeds: [
        {
          title: '📋 ახალი სივი - Lucchese Crime Family',
          color: 0xF59E0B, // Amber/Gold color
          fields: [
            {
              name: '👤 სერვერზე სახელი',
              value: cvData.serverName || 'N/A',
              inline: true,
            },
            {
              name: '💬 დისქორდის სახელი',
              value: cvData.discordName || 'N/A',
              inline: true,
            },
            {
              name: '🎂 წლოვანება',
              value: cvData.age || 'N/A',
              inline: true,
            },
            {
              name: '📝 Roleplay გამოცდილება',
              value: cvData.experience || 'N/A',
              inline: false,
            },
            {
              name: '❓ კითხვა პირველი: წაიკითხეთ თუ არა ბიოგრაფიის განყოფილება და გაიგეთ ლუჩეს კრიმინალური ოჯახის ღირებულებები?',
              value: answers.question1 || 'No Answer',
              inline: false,
            },
            {
              name: '❓ კითხვა მეორე: რატომ გსურთ შეუერთდეთ Lucchese Crime Family-ს?',
              value: answers.question2 || 'No Answer',
              inline: false,
            },
            {
              name: '❓ კითხვა მესამე: რა შეგიძლიათ წვლილი შეიტანოთ ოჯახში და როგორ აპირებთ თქვენი ერთგულების დამტკიცებას?',
              value: answers.question3 || 'No Answer',
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'Lucchese Crime Family - ED-RP',
          },
        },
      ],
    };

    // 4. Append the payload as a JSON string named "payload_json"
    // This is the specific way Discord Webhooks handle Files + Embeds together
    formData.append('payload_json', JSON.stringify(payload));

    try {
      const response = await fetch('https://discord.com/api/webhooks/1467260904902103273/4jYICDgF_cYy6ZXmp3g-yKV1wBlgAc64ELaOgEA6xmYEC0qf2qB_QTbhjOpFf7gutMBO', {
        method: 'POST',
        // IMPORTANT: Do NOT set 'Content-Type': 'application/json' here.
        // The browser sets the correct Multipart header automatically for FormData.
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Discord Error: ${response.statusText}`);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-amber-500 mb-4">სივი გაგზავნილია!</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Your application has been successfully submitted to the Lucchese Crime Family leadership.
            We will review your application and contact you through Discord.
          </p>
          <p className="text-amber-400 italic">
            La Famiglia აფასებს თქვენ ინტერესებს.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-500 mb-4 text-center">სივის კითხვები</h1>
        <p className="text-gray-400 text-center mb-8 italic">
          კითხვა {currentStep + 1} of {questions.length}
        </p>

        <div className="mb-8">
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  index <= currentStep ? 'bg-amber-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm border border-amber-600/20 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-amber-400 mb-6">
            {currentQuestion.question}
          </h2>

          <textarea
            value={currentAnswer}
            onChange={(e) =>
              setAnswers({
                ...answers,
                [currentQuestion.id]: e.target.value,
              })
            }
            className="w-full px-4 py-3 bg-black/50 border border-amber-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="დაწერეთ თქვენი პასუხი აქ..."
            rows={6}
            required
          />

          <div className="flex gap-4 mt-6">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                დაბრუნება
              </button>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!currentAnswer.trim()}
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                შემდეგი
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!currentAnswer.trim() || isSubmitting}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-500 hover:to-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <Send size={20} />
              </button>
            )}
          </div>

          <button
            onClick={onBack}
            className="w-full mt-4 text-gray-400 hover:text-amber-400 transition-colors text-sm"
          >
            სივიზე დაბრუნება
          </button>
        </div>
      </div>
    </div>
  );
}
