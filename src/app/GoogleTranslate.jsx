import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        zIndex: 1000,
        position: "absolute",
        top: 0,
        right: 0,
      }}
    ></div>
  );
};

export default GoogleTranslate;
// import React, { useEffect } from "react";

// const GoogleTranslate = () => {
//   useEffect(() => {
//     // Check if the Google Translate script is already added
//     const existingScript = document.querySelector(
//       'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
//     );

//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);

//       // Define the initialization function once the script is loaded
//       script.onload = () => {
//         window.googleTranslateElementInit = () => {
//           if (!window.googleTranslateInitialized) {
//             new window.google.translate.TranslateElement(
//               { pageLanguage: "en" },
//               "google_translate_element"
//             );
//             window.googleTranslateInitialized = true;
//           }
//         };
//       };
//     } else {
//       // If the script already exists, just call the initialization function
//       window.googleTranslateElementInit && window.googleTranslateElementInit();
//     }
//   }, []);

//   return (
//     <div
//       id="google_translate_element"
//       style={{
//         zIndex: 1000,
//         position: "absolute",
//         top: 0,
//         right: 0,
//       }}
//     ></div>
//   );
// };

// export default GoogleTranslate;
