// utils/recaptcha.js

interface RecaptchaExecuteOptions {
  action: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: RecaptchaExecuteOptions) => Promise<string>;
    };
  }
}

export const getRecaptchaToken = async (action: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log('generating captcha');
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, { action })
          .then((token: string) => {
            resolve(token);
          })
          .catch((error: Error) => {
            console.error('Error getting reCAPTCHA token:', error);
            reject(error);
          });
      });
    } else {
      reject(new Error('reCAPTCHA is not loaded.'));
    }
  });
};
  