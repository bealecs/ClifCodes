//formspree 
"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mdoqgbql");
  if (state.succeeded) {
      return <p className='text-center min-h-[20vh] pt-24'>Thanks for your feedback!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center my-4'>
      <textarea
        id="message"
        name="message"
        className='border-[0.12rem] w-[30%] h-40 mx-auto p-1 sm:w-[70%] sm:h-20'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='transition duration-300 ease-in-out border-[0.12rem] my-4 p-2 rounded-lg bg-sky-500 text-white border-black hover:bg-sky-600' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function ContactForm() {
  return (
    <Form />
  );
}
export default ContactForm;