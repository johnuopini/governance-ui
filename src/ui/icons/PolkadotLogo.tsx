interface PolkadotLogoProps {
  width?: number;
}

export default function PolkadotLogo({ width }: PolkadotLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || `100`}
      fill="none"
      viewBox="0 0 100 32"
    >
      <path
        fill="var(--colors-fill-primary)"
        d="M11.06 26.472c2.105 0 3.811-.993 3.811-2.219s-1.706-2.22-3.811-2.22-3.812.994-3.812 2.22c0 1.226 1.707 2.22 3.812 2.22zM20.214 21.184c1.053-1.824 1.046-3.8-.015-4.413-1.06-.613-2.774.37-3.826 2.194-1.053 1.824-1.046 3.8.014 4.412 1.061.613 2.775-.369 3.827-2.193z"
      ></path>
      <path
        fill="var(--colors-foreground-contrast)"
        d="M99.12 19.594c-.35 0-.578.207-1.012.682-.764.786-1.24 1.22-1.838 1.22-.537 0-.827-.434-.827-1.137 0-.393.083-.868.186-1.385l.765-3.597h2.293c.724 0 1.157-.413 1.157-1.157 0-.414-.268-.724-.888-.724h-2.15l.373-1.674c.04-.248.082-.475.082-.682 0-.579-.392-.992-1.033-.992-.681 0-.991.455-1.136 1.157l-.475 2.191h-.97c-.744 0-1.178.414-1.178 1.158 0 .413.289.723.909.723h.847l-.765 3.555a8.608 8.608 0 00-.186 1.695c0 1.675.868 2.894 2.727 2.894 1.074 0 2.024-.537 2.748-1.178.702-.62 1.218-1.385 1.218-1.881a.855.855 0 00-.846-.868zM51.608 9.693c0-.6-.413-.992-1.053-.992-.682 0-.992.455-1.136 1.158l-2.582 12.009a2.72 2.72 0 00-.104.662c0 .6.414.992 1.033.992.703 0 1.012-.455 1.157-1.158l2.583-12.01c.04-.247.102-.454.102-.66zM88.481 13.29c-3.305 0-5.557 3.286-5.557 6.408l.003.174c-.518.787-1.18 1.603-1.635 1.603-.33 0-.454-.31-.454-.785 0-.579.165-1.55.351-2.398l1.715-7.937c.04-.248.082-.455.082-.662 0-.6-.392-.992-1.033-.992-.702 0-.991.455-1.136 1.158l-.93 4.299c-.495-.517-1.219-.868-2.313-.868-2.195 0-4.403 1.69-5.263 4.284-.948 2.451-1.795 3.901-2.463 3.901-.248 0-.392-.206-.392-.558 0-1.033.578-3.555.826-4.775.083-.454.124-.64.124-.91 0-.909-1.508-1.984-3.47-1.984-2.27 0-4.325 1.438-5.356 3.576-1.53 2.706-2.935 4.652-3.63 4.652-.31 0-.414-.393-.496-.765l-.517-2.853 3.161-2.584c.29-.248.661-.6.661-1.054 0-.558-.372-.93-.93-.93-.413 0-.764.248-1.115.538l-4.75 3.927 1.59-7.4c.041-.248.103-.455.103-.662 0-.6-.413-.992-1.053-.992-.682 0-.992.455-1.136 1.158l-2.583 12.009a2.73 2.73 0 00-.103.662c0 .6.413.992 1.033.992.702 0 1.012-.455 1.157-1.158l.33-1.55 1.942-1.571.475 2.398c.186.95.682 1.88 1.963 1.88 1.274 0 2.276-1.164 3.28-2.737.305 1.648 1.477 2.738 3.103 2.738 1.632 0 2.747-.972 3.47-2.274v.041c0 1.344.682 2.233 1.88 2.233 1.083 0 1.983-.654 2.787-2.044.456 1.211 1.475 2.044 2.893 2.044 1.674 0 2.872-1.013 3.636-2.419v.124c0 1.488.744 2.295 1.962 2.295 1.076 0 1.992-.625 2.772-1.643.593 1.017 1.657 1.643 3.095 1.643 3.305 0 5.557-3.286 5.557-6.428 0-2.213-1.343-3.804-3.636-3.804zm-20.595 4.196c-.6 2.584-1.88 4.051-3.326 4.051-.971 0-1.508-.744-1.508-1.86 0-2.191 1.59-4.547 3.718-4.547.64 0 1.136.186 1.57.454l-.454 1.902zm11.506-1.095c-.661 3.038-2.17 5.147-3.822 5.147-.909 0-1.446-.703-1.446-1.86 0-2.212 1.53-4.507 3.574-4.507.785 0 1.384.27 1.818.62l-.124.6zm7.416 5.146c-1.198 0-1.694-.868-1.694-1.963 0-2.006 1.384-4.3 3.12-4.3 1.198 0 1.693.868 1.693 1.964 0 2.026-1.384 4.3-3.119 4.3zM31.819 8.474c-1.157 0-2.272.144-2.727.268-.661.186-.826.476-.95 1.075L25.518 21.93c-.041.248-.082.455-.082.661 0 .6.392.992 1.032.992.703 0 .992-.454 1.137-1.157l.743-3.452c.517.062 1.199.124 2.17.124 4.276 0 6.94-2.315 6.94-5.808 0-3.06-2.127-4.816-5.64-4.816zm-1.405 8.64c-.66 0-1.177-.021-1.653-.083l1.384-6.428a12.418 12.418 0 011.736-.145c2.272 0 3.43 1.075 3.43 2.852 0 2.274-1.654 3.804-4.897 3.804zM42.602 13.29c-3.305 0-5.557 3.286-5.557 6.408 0 2.232 1.343 3.824 3.636 3.824 3.305 0 5.557-3.287 5.557-6.429 0-2.212-1.343-3.803-3.636-3.803zm-1.673 8.247c-1.199 0-1.694-.868-1.694-1.963 0-2.006 1.384-4.3 3.119-4.3 1.198 0 1.694.868 1.694 1.964 0 2.026-1.384 4.3-3.12 4.3z"
      ></path>
      <path
        fill="var(--colors-fill-primary)"
        d="M11.06 9.757c2.105 0 3.811-.994 3.811-2.22 0-1.225-1.706-2.219-3.811-2.219s-3.812.994-3.812 2.22c0 1.225 1.707 2.219 3.812 2.219zM5.747 12.826c1.053-1.824 1.046-3.8-.015-4.413-1.06-.613-2.774.37-3.826 2.194-1.053 1.824-1.046 3.8.015 4.412 1.06.613 2.774-.369 3.826-2.193zM5.732 23.377c1.061-.613 1.068-2.588.015-4.412-1.052-1.825-2.765-2.807-3.826-2.194s-1.068 2.588-.015 4.413c1.052 1.824 2.766 2.806 3.826 2.193zM20.2 15.02c1.06-.614 1.067-2.59.014-4.413-1.052-1.825-2.766-2.807-3.826-2.194-1.061.613-1.068 2.589-.015 4.413 1.052 1.824 2.765 2.806 3.826 2.193z"
      ></path>
    </svg>
  );
}
