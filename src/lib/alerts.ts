import Swal from "sweetalert2";

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
    customClass: {
      popup: "rounded-3xl p-6 sm:p-8 font-sans shadow-2xl border border-gray-100 max-w-[90vw] sm:max-w-md",
      title: "text-xl sm:text-2xl font-bold text-gray-950 tracking-tight",
      htmlContainer: "text-sm sm:text-base text-gray-600 mt-2",
      confirmButton: "px-8 py-2.5 rounded-full font-bold text-sm bg-secondary text-white hover:bg-secondary/90 shadow-md transition-all cursor-pointer",
    },
    buttonsStyling: false,
  });
};
