import type { SVGProps } from 'react';

export default function AutoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Auto Rickshaw Body */}
      <path d="M2 15h14l4-6v11h-4v-3H4v3H2z" />
      {/* Roof */}
      <path d="M6 9h10l2-3H4z" />
      {/* Front Wheel */}
      <circle cx="5" cy="19" r="2" />
      {/* Back Wheel */}
      <circle cx="17" cy="19" r="2" />
       {/* Handlebar area */}
      <path d="M4 9v-2h2" />
    </svg>
  );
}