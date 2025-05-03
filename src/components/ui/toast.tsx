import * as React from "react";
import { DialogContent } from "./dialog";

export type Theme = "destructive" | "default" | "success" | "warning";

export type ToastActionElement = React.ReactElement;

export interface ToastProps {
  id: string;
  title?: string;
  description?: React.ReactNode;
  action?: ToastActionElement;
  theme?: Theme;
  className?: string;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export const Toast = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  ToastProps & React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ className, children, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex w-full max-w-md flex-col rounded-md border p-4 shadow-lg pointer-events-auto ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Toast.displayName = "Toast";

export const ToastTitle = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => {

  <p
    ref={ref}
    className={`mb-1 font-bold text-slate-900 dark:text-slate-50 ${className}`}
    {...props}
  />

});
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => {
  <p
    ref={ref}
    className={`text-sm leading-tight text-slate-700 dark:text-slate-300 ${className}`}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

export const ToastClose = React.forwardRef<React.ElementRef<"button">,
React.ComponentPropsWithoutRef<"button">>


(({ className, ...props }, ref) => {
  <button
    ref={ref}
    className={`ml-auto -mx-1 -my-1 rounded-sm p-1 text-slate-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 focus:ring-offset-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:focus:ring-slate-300 ${className}`}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
));

ToastClose.displayName = "ToastClose";

export const ToastAction = React.forwardRef<React.ElementRef<"button">,
React.ComponentPropsWithoutRef<"button">>
(({ className, ...props }, ref) => {
  <button
    ref={ref}
    className={`mt-2 inline-flex h-8 items-center justify-center rounded-md border border-transparent bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 focus:ring-offset-slate-50 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 dark:focus:ring-slate-300 ${className}`}
    {...props}
  />
));
ToastAction.displayName = "ToastAction";
