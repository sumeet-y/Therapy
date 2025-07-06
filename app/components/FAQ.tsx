import React from 'react';
import FaqBox from './FaqBox';

const FAQ = () => {
  return (
    <div className=" flex flex-col py-14 pt-20">
      <h2 className="text-center text-4xl">Frequently Asked Questions</h2>
      <div className="max-w-5xl mx-auto my-10 p-5">
        <h2 className="text-2xl">Therapy</h2>
        <div className="mt-5 flex flex-col gap-4">
          {/* <FaqBox
            question="What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?"
            answer="CBT-I typically includes a structured series of sessions that address the thoughts and behaviors contributing to sleep difficulties. Treatment focuses on sleep education, stimulus control, sleep restriction, cognitive restructuring, and relaxation techniques. Together, we’ll track your sleep patterns and gradually implement changes to improve both quality and duration of rest. CBT-I is widely recognized as a first-line treatment for chronic insomnia."
          />

          <FaqBox
            question="Do you treat children or adolescents?"
            answer="At this time, my practice is focused on working with adults (18+). I specialize in issues such as anxiety, trauma, and relationship challenges in young adults, professionals, and older individuals. If you’re seeking therapy for a child or teen, I’m happy to refer you to a trusted colleague who works with younger populations."
          />

          <FaqBox
            question="Which geographic regions do you serve?"
            answer="For virtual sessions, I currently serve clients located anywhere within the state of California. In-person sessions are offered at my private office in Los Angeles. Due to licensing regulations, I am only able to provide therapy to individuals who reside in California."
          />

          <FaqBox
            question="Do you offer in-person sessions?"
            answer="Yes, I offer in-person sessions on Tuesdays and Thursdays, between 10 AM and 6 PM, at my office located at 1287 Maplewood Drive, Los Angeles, CA. These sessions are available by appointment only and follow current health and safety guidelines."
          />

          <FaqBox
            question="What technology do we use for virtual sessions?"
            answer="Virtual sessions are held via Zoom, a secure and HIPAA-compliant video platform. Before your session, you'll receive a private Zoom link via email. I recommend using headphones and a quiet, private space for the best experience."
          /> */}

          <FaqBox
            question="What are your hours?"
            answer="In-person sessions: Tuesdays & Thursdays, 10:00 AM – 6:00 PM. Virtual sessions (Zoom): Mondays, Wednesdays & Fridays, 1:00 PM – 5:00 PM. All sessions are by appointment only."
          />

          <FaqBox
            question="Do you take insurance?"
            answer="I am not in-network with any insurance providers. However, I can provide a superbill after each session, which you may submit to your insurance company for potential out-of-network reimbursement. Please check with your provider to understand your benefits."
          />

          <FaqBox
            question="What is the cost of therapy?"
            answer="Individual therapy session: $200 per 50-minute session. Couples therapy session: $240 per 50-minute session. Payment is due at the time of each session. I accept most major credit cards and HSA/FSA accounts."
          />

          <FaqBox
            question="What are the benefits of private pay therapy?"
            answer="Private pay allows for greater privacy, flexibility, and autonomy in your care. Without the constraints of insurance, we can collaboratively determine the length, frequency, and focus of your therapy—tailored specifically to your needs. Private pay also means no mental health diagnosis is required to begin therapy, preserving your confidentiality and long-term medical record."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
