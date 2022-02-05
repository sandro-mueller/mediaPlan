/**
 * Critical CSS
 */
export const SuspenseLoader = (): JSX.Element => {
  const language = window.localStorage.getItem('lang');
  return (
    <div style={{ fontFamily: 'Arial', padding: 8 }}>
      {language === 'en' ? 'Please wait...' : 'Bitte warten...'}
    </div>
  );
};
