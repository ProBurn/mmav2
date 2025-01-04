"use client"
import { SetStateAction, useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const faqs = [
  {
    "question": "What types of dogs do you groom?",
    "answer": "I groom all breeds and sizes of dogs, from tiny puppies to larger breeds. Whether it’s a simple trim or a full grooming session, I make sure to tailor each service to your dog’s needs."
  },
  {
    "question": "How often should I get my dog groomed?",
    "answer": "It really depends on your dog’s breed, coat type, and lifestyle. For dogs with longer coats, I recommend grooming every 6-8 weeks, while shorter-haired dogs can go a bit longer. I’d be happy to help you figure out the best grooming schedule for your pet."
  },
  {
    "question": "Do you offer mobile grooming services?",
    "answer": "Currently, I don’t offer mobile grooming services. But I do everything I can to make my grooming space comfortable and stress-free for your dog."
  },
  {
    "question": "Can I stay with my dog during grooming?",
    "answer": "I completely understand if you want to stay with your dog, but for their comfort, I usually recommend letting them relax with me while you take a break. If your dog tends to get anxious, just let me know, and I’ll make sure to do everything I can to keep them calm."
  },
  {
    "question": "What should I bring to the grooming session?",
    "answer": "All you need to bring is your dog on a leash and collar. If you have any grooming products that your dog prefers, feel free to bring them along. I provide everything else, from shampoos to grooming tools."
  },
  {
    "question": "What happens if my dog gets anxious during grooming?",
    "answer": "I have experience working with nervous dogs, so I always take things slow and use gentle techniques to help them stay calm. If your dog is particularly anxious, just let me know, and I’ll do my best to make them feel at ease."
  },
  {
    "question": "What is included in your grooming packages?",
    "answer": "My grooming packages include a bath, nail trim, ear cleaning, and a haircut or trim. If you’d like additional services like teeth brushing or de-shedding treatments, I’m happy to add those on for a small extra charge."
  },
  {
    "question": "Do you offer any discounts or loyalty programs?",
    "answer": "Yes! I offer discounts for regular customers, and I also have a loyalty program to help you save on grooming services over time. Just ask me about it when you book your appointment!"
  },
  {
    "question": "How do I make a booking?",
    "answer": "Booking is easy! You can either book directly through my website or give me a call to arrange a time for your dog’s grooming session."
  },
  {
    "question": "What should I do if I need to cancel or reschedule my appointment?",
    "answer": "If you need to cancel or reschedule, just let me know at least 24 hours in advance. That way, I can open up the slot for another dog. If it's last minute, there may be a small cancellation fee."
  }
]


interface Faq {
  question: string;
  answer: string;
}



interface FaqProps {
  faqs: Faq[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={`faq${index}`} className="pt-6">
                <dt>
                  <button
                    className="group flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <motion.span className="ml-6 flex h-7 items-center"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: openIndex === index ? 0 : -90 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <PlusSmallIcon
                      aria-hidden="true"
                      className={`size-6 ${openIndex !== index ? '' : 'hidden'}`}
                      />
                      <MinusSmallIcon
                      aria-hidden="true"
                      className={`size-6 ${openIndex === index ? '' : 'hidden'}`}
                      />
                    </motion.span>
                  </button>
                </dt>
                <motion.dd
                  className="mt-2 pr-12"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </motion.dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
