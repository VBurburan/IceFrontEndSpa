import { useEffect } from 'react';

export function InquiryForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260325909366058']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-full bg-white flex flex-col">
      <iframe
        id="JotFormIFrame-260325909366058"
        title="Cryomedicine Client Intake Form"
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/260325909366058"
        frameBorder="0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '100%',
          minHeight: '600px', // Ensure it fills the visual container in Hero
          border: 'none',
        }}
        scrolling="yes" // Changed to yes to ensure accessibility if content overflows
        className="flex-grow"
      />
    </div>
  );
}
