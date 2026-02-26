"use client"

import Script from "next/script"

export default function ClientxForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://link.clientx.ai/widget/form/tVfCgQDu6qIEw7nOxOqC"
        className="w-full h-full border-0 rounded-[3px]"
        id="inline-tVfCgQDu6qIEw7nOxOqC"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Form 0"
        data-height="604"
        data-layout-iframe-id="inline-tVfCgQDu6qIEw7nOxOqC"
        data-form-id="tVfCgQDu6qIEw7nOxOqC"
        title="Form 0"
      />

      {/* Load external script safely */}
      <Script
        src="https://link.clientx.ai/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}