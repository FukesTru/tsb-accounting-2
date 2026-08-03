import Script from "next/script";

/**
 * LeadConnector (GoHighLevel) form embed — "Website Form (TSB Acounting
 * Solutions, LLC)". Submissions are handled by the client's LeadConnector
 * account (where SMS/text notifications to Victoria's phone are configured).
 *
 * The wrapper div gives the iframe its initial height (542px per the embed's
 * data-height); form_embed.js then keeps it sized to the form content.
 */
export default function ContactForm() {
  return (
    <>
      <div className="h-[542px] w-full">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/Hkp1qNjcnBasg0990Le0"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
          id="inline-Hkp1qNjcnBasg0990Le0"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Website Form (TSB Acounting Solutions, LLC)"
          data-height="542"
          data-layout-iframe-id="inline-Hkp1qNjcnBasg0990Le0"
          data-form-id="Hkp1qNjcnBasg0990Le0"
          title="Website Form (TSB Acounting Solutions, LLC)"
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
