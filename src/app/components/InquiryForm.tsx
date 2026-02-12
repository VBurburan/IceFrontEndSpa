import { useEffect } from 'react';

export function InquiryForm({ onLoad }: { onLoad?: () => void }) {
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
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/260325909366058"
        onLoad={onLoad}
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '100%',
          minHeight: '600px',
          border: 'none',
        }}
        className="flex-grow"
      />
    </div>
  );
}
