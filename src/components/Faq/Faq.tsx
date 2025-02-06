'use client'
import React, { useState } from 'react';

export default function Faq() {
  const faqs = [
    { question: 'What is Pettify?', answer: 'Pettify is an online marketplace for pet lovers, trusted breeders, pet vendors, and veterinarians. You can buy & sell pets, pet accessories, book vet appointments and many more..' },
    { question: 'How does Pettify ensure trust and safety?', answer: 'We verify breeders and provide user reviews to ensure a safe and reliable pet adoption process.' },
    { question: 'Can I adopt a pet online?', answer: 'Yes, you can browse available pets and connect with trusted breeders to adopt the perfect pet for your home.' },
    {question: 'How do I sign up for Pettify?', answer: 'Buyers - Download the Pettify app from Google Play & App Store. Breeders & Vets - Sign up on www.pettify.co to create an account. Simply provide your email or Google sign in to get started.'},
    {question: 'How do I buy a pet on Pettify?', answer: 'Download the Pettify mobile app from Google Play or Apple store. Browse the available pets listed by trusted breeders and sellers on the mobile app. Once you find the right companion, you can make the purchase and enter your delivery address for your pet to be delivered..'},
    {question: 'How do I list a pet for sale?', answer: 'If you’re a breeder or vendor, you can sign up on the Pettify web app at www.pettify.co and start listing pets for sale. Provide detailed descriptions such as category, breed, description, age and vaccination details and clear beautiful pet photos to attract eager buyers.'},
    {question: 'Is it safe to buy pets through Pettify?', answer: 'Pettify vets sellers and provides a safe platform to connect with breeders, but we recommend always verifying the seller and ensuring the pet’s health records before making any purchase.'},
    {question: 'What payment methods are accepted?', answer: 'Pettify supports various payment methods such as direct transfers or payments via debit/credit cards through Paystack.'},
    {question: 'Can I get a refund for my purchase?', answer: 'Refund policies are determined by Pettify only if the received Pet was in bad condition or false pet delivery. We can also refund canceled Vet appointments. Please contact Pettify through email hello@pettify.co directly for any refund requests or help.'},
    {question: 'How do I contact customer support?', answer: 'If you have any questions or issues, you can contact Pettify support via email at hello@pettify.co or through the app’s support section and social media channels.'}
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className='max-w-3xl mx-auto p-6'>
      <h2 className='text-2xl font-bold text-orange-500 text-center mb-6'>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-4 border-b border-gray-300 pb-2 hover:scale-95'>
          <button
            onClick={() => toggleFAQ(index)}
            className='w-full text-left text-lg font-semibold text-gray-800 flex justify-between items-center p-3 bg-white rounded-lg shadow-md'
          >
            {faq.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className='mt-2 p-3 text-white bg-orange-500 rounded-md'>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
