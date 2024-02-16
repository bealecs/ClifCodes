import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-6">
          These Terms of Service {("'Terms'")} govern the use of the web development
          services provided by Clif Codes, LLC (referred to as {"'we'"}, {"'us'"}, or
          {"'our'"}).
        </p>
        <p className="mb-6">
          By accessing or using our web development services, you agree to be
          bound by these Terms. If you disagree with any part of these Terms,
          you may not use our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">Scope of Services</h2>
        <p className="mb-6">
          We offer web development services, including but not limited to
          website design, development, and maintenance. The scope of services
          provided will be as agreed upon in writing between Clif Codes, LLC and
          the client.
        </p>
        <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
        <p className="mb-6">
          Payment for our services is due as outlined in our invoice. We reserve
          the right to suspend or terminate services if payment is not received
          within the specified timeframe.
        </p>
        <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
        <p className="mb-6">
          We will make reasonable efforts to complete the project within the
          agreed-upon timeline. However, unforeseen circumstances may arise that
          could cause delays. In such cases, we will communicate any changes to
          the project timeline promptly.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Intellectual Property Rights
        </h2>
        <p className="mb-6">
          Upon full payment, all rights to the completed website, including
          design, code, and content, will transfer to the client. We retain the
          right to showcase the project in our portfolio unless otherwise agreed
          upon in writing.
        </p>
        <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
        <p className="mb-6">
          The client is responsible for providing clear and timely feedback, as
          well as any necessary assets (such as logos, images, and text)
          required for the project. Delays caused by the client may result in
          changes to the project timeline.
        </p>
        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Clif Codes, LLC be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-6">
          <li>The use or inability to use our services.</li>
          <li>The cost of procurement of substitute services.</li>
          <li>
            Any unauthorized access to, use of, or alteration of your
            transmissions or content.
          </li>
          <li>Any errors or omissions in our services.</li>
          <li>Any other matter relating to our services.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed by and construed in accordance with the
          laws of the United States of America, without regard to its conflict
          of law provisions.
        </p>
        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on our website. Your
          continued use of our services after the posting of any changes
          constitutes acceptance of those changes.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="list-disc pl-6">
          <li>By email: ClifCodes@gmail.com</li>
          <li>
            By visiting this page on our website:{" "}
            <a href="[Your website contact page URL]" className="text-blue-500">
              https://clif.codes
            </a>
          </li>
        </ul>
      </div>
      <a href="/" className="bg-sky-400 p-3 rounded-lg text-white block w-fit mx-auto mt-[2rem] hover:bg-sky-600">Back to home</a>
    </div>
  );
};

export default TermsOfService;
