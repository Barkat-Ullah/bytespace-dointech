import Swal from "sweetalert2";

const commonCustomClass = {
  popup:
    "rounded-3xl p-6 sm:p-8 font-sans shadow-2xl border border-gray-100 max-w-[90vw] sm:max-w-md w-full",
  title: "text-xl sm:text-2xl font-bold text-gray-950 tracking-tight",
  htmlContainer: "text-sm sm:text-base text-gray-600 mt-2",
  confirmButton:
    "px-8 py-2.5 rounded-full font-bold text-sm bg-secondary text-white hover:bg-secondary/90 shadow-md transition-all cursor-pointer",
};

/**
 * Triggers a responsive SweetAlert modal informing the user that
 * creator registration is coming soon.
 */
export const showCreatorComingSoonAlert = () => {
  Swal.fire({
    title: "Coming Soon!",
    text: "Creator registration will be available soon.",
    icon: "info",
    iconColor: "#003be2",
    confirmButtonText: "OK",
    background: "#ffffff",
    customClass: commonCustomClass,
    buttonsStyling: false,
  });
};

/**
 * Triggers a responsive SweetAlert modal informing the user that
 * course enrollment is coming soon.
 */
export const showEnrollComingSoonAlert = (courseTitle?: string) => {
  Swal.fire({
    title: "Enrollment Coming Soon!",
    text: courseTitle
      ? `Enrollment for "${courseTitle}" will be available soon.`
      : "Course enrollment will be available soon.",
    icon: "info",
    iconColor: "#003be2",
    confirmButtonText: "OK",
    background: "#ffffff",
    customClass: commonCustomClass,
    buttonsStyling: false,
  });
};

/**
 * Triggers a responsive SweetAlert modal for successful sign-in
 * and calls onComplete (typically redirecting to home).
 */
export const showSignInSuccessAlert = (onComplete?: () => void) => {
  Swal.fire({
    title: "Signed In Successfully!",
    text: "Welcome back to ByteSpace! Redirecting to home...",
    icon: "success",
    iconColor: "#003be2",
    confirmButtonText: "Continue",
    background: "#ffffff",
    timer: 2000,
    timerProgressBar: true,
    customClass: commonCustomClass,
    buttonsStyling: false,
  }).then(() => {
    if (onComplete) {
      onComplete();
    }
  });
};

/**
 * Triggers a responsive SweetAlert modal for successful account creation
 * and calls onComplete (typically redirecting to home).
 */
export const showSignUpSuccessAlert = (onComplete?: () => void) => {
  Swal.fire({
    title: "Account Created!",
    text: "Welcome to ByteSpace! Redirecting to home...",
    icon: "success",
    iconColor: "#003be2",
    confirmButtonText: "Get Started",
    background: "#ffffff",
    timer: 2000,
    timerProgressBar: true,
    customClass: commonCustomClass,
    buttonsStyling: false,
  }).then(() => {
    if (onComplete) {
      onComplete();
    }
  });
};
