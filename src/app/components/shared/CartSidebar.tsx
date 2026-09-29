"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { showCheckoutComingSoonAlert } from "@/lib/alerts";
import { cn } from "@/lib/utils";

export interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DemoCartItem {
  id: string;
  title: string;
  instructor: string;
  price: number;
  image: string;
}

const INITIAL_DEMO_ITEMS: DemoCartItem[] = [
  {
    id: "cart-1",
    title: "Learn Figma From Basic to Advanced",
    instructor: "PurePearl Studio",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "cart-2",
    title: "Build Digital Assets with No-Code Tools",
    instructor: "Marcus Chen",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "cart-3",
    title: "The Power of Big Data & Machine Learning",
    instructor: "Dr. Evelyn Reed",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
  },
];

const emptySubscribe = () => () => { };

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<DemoCartItem[]>(INITIAL_DEMO_ITEMS);
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    showCheckoutComingSoonAlert();
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  if (!isClient) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[100] transition-visibility duration-400",
        isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
      )}
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      <aside
        aria-label="Shopping Cart"
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 z-[101] h-full w-full max-w-[90vw] sm:w-[420px] bg-white shadow-2xl flex flex-col justify-between",
          "will-change-transform transform-gpu",
          "transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-gray-950 tracking-tight">
              Shopping Cart
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#d4fb20] text-black">
              {items.length}
            </span>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Shopping Cart"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer select-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="group relative flex items-center gap-3.5 p-3 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-gray-200 transition-all"
              >

                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Course Details */}
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-950 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 truncate">
                    by {item.instructor}
                  </p>
                  <p className="text-sm font-extrabold text-[#003be2] mt-1.5">
                    ${item.price}
                  </p>
                </div>

                {/* Delete Item */}
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  aria-label={`Remove ${item.title}`}
                  className="text-gray-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer select-none shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-gray-500">
              <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-3" />
              <p className="text-sm font-medium text-gray-800">Your cart is empty</p>
              <p className="text-xs text-gray-400 mt-1">
                Explore our courses and start learning today!
              </p>
            </div>
          )}
        </div>

        {/* Bottom Pinned Footer with Checkout Button */}
        <div className="border-t border-gray-100 p-6 bg-gray-50/70 mt-auto">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-800">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between text-base font-bold text-gray-950 mb-4 pt-2 border-t border-gray-200/60">
            <span>Total</span>
            <span className="text-lg font-black text-[#003be2]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button
            type="button"
            onClick={handleCheckout}
            disabled={items.length === 0}
            className={cn(
              "w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm select-none",
              items.length > 0
                ? "bg-[#d4fb20] text-black hover:bg-[#c9f116] cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            <span>Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-[11px] text-gray-400 mt-3">
            30-day money-back guarantee on all courses
          </p>
        </div>
      </aside>
    </div>,
    document.body
  );
};

export default CartSidebar;
