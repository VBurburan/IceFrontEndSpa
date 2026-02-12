import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

const legalContent: Record<string, { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when submitting an inquiry through our website or contacting us directly. We do not collect medical records or health information through this website.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use the information we collect to respond to your inquiries, provide our services, communicate with you about your case, and improve our website and services. We will never sell your personal information to third parties.',
      },
      {
        heading: 'Information Sharing',
        body: 'We may share your information with partner cryopreservation organizations (such as Alcor Life Extension Foundation or Cryonics Institute) only as necessary to coordinate services you have requested. We may also share information when required by law or to protect our rights.',
      },
      {
        heading: 'Data Security',
        body: 'We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        heading: 'Contact Us',
        body: 'If you have any questions about this Privacy Policy, please contact us at info@cryomedics.org or call 844-INTL-CRYO.',
      },
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing and using the International Cryomedicine Experts (ICE) website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.',
      },
      {
        heading: 'Services Description',
        body: 'ICE provides standby, stabilization, and transport (SST) services for human cryopreservation. All services are performed in accordance with applicable laws and regulations. Service details, pricing, and availability are subject to change without notice.',
      },
      {
        heading: 'Service Agreements',
        body: 'The information on this website is for general informational purposes only. Formal service agreements are executed separately and are subject to their own terms and conditions. Website content does not constitute a binding contract.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'ICE provides services on a best-effort basis. The nature of cryopreservation services involves inherent uncertainties. ICE shall not be liable for outcomes beyond its reasonable control, including but not limited to delays caused by third parties, regulatory agencies, or force majeure events.',
      },
      {
        heading: 'Governing Law',
        body: 'These terms shall be governed by and construed in accordance with the laws of the State of Arizona, United States, without regard to its conflict of law provisions.',
      },
    ],
  },
  'medical-disclaimer': {
    title: 'Medical Disclaimer',
    lastUpdated: 'January 2026',
    sections: [
      {
        heading: 'Not Medical Advice',
        body: 'The information provided on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
      },
      {
        heading: 'Nature of Cryopreservation',
        body: 'Cryopreservation is an experimental procedure. There is currently no known method to reverse the cryopreservation process. ICE makes no claims or guarantees regarding the future viability of cryopreserved patients. Our services focus on maximizing preservation quality using current best practices.',
      },
      {
        heading: 'Professional Standards',
        body: 'ICE personnel follow established clinical protocols for post-mortem stabilization and cooling. Our procedures begin only after legal death has been pronounced by a licensed physician. ICE does not perform euthanasia, assisted suicide, or any procedure on living patients.',
      },
      {
        heading: 'Emergency Services',
        body: 'If you or someone you know is experiencing a medical emergency, call 911 or your local emergency services immediately. ICE is not an emergency medical service provider and should not be contacted in lieu of emergency medical care.',
      },
    ],
  },
};

export function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? legalContent[slug] : null;

  useDocumentMeta({
    title: content ? `${content.title} | ICE` : 'Page Not Found | ICE',
    description: content ? `${content.title} for International Cryomedicine Experts (ICE). Last updated ${content.lastUpdated}.` : 'Page not found.',
  });

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-ice-warm-white">
        <p className="text-ice-text-tertiary">Page not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-ice-warm-white min-h-screen">
      <section className="bg-ice-warm-gray py-16 border-b border-ice-border-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-extralight text-ice-text-primary mb-3 tracking-tight">
              {content.title}
            </h1>
            <p className="text-sm text-ice-text-tertiary">
              Last updated: {content.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {content.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <h2 className="text-lg font-semibold text-ice-text-primary mb-3">{section.heading}</h2>
                <p className="text-ice-text-secondary font-light leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LegalPage;
