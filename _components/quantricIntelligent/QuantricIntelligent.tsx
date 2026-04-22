import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./QuantricIntelligent.module.scss";
import Button from "../common/button/Button";

const features = [
  {
    title: "Highly Responsive",
    description: "Instantly adapts to changes with real-time insights.",
  },
  {
    title: "Automation of Decisions",
    description: "Reduces human intervention for increased efficiency.",
  },
  {
    title: "Predictive Operations",
    description: "Keeps execution proactive with signal-aware orchestration.",
  },
  {
    title: "Real-Time Connectivity",
    description: "Unifies data across systems for seamless operations.",
  },
];

function TickIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
    >
      <path
        d="M5.5 12.5 10 17l8.5-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_3015_4879)">
        <path
          d="M13.4384 35.8379H1.49315C1.09714 35.8379 0.717355 35.6806 0.437335 35.4006C0.157314 35.1205 0 34.7407 0 34.3447C0 33.9487 0.157314 33.5689 0.437335 33.2889C0.717355 33.0089 1.09714 32.8516 1.49315 32.8516H13.4384C13.8344 32.8516 14.2142 33.0089 14.4942 33.2889C14.7742 33.5689 14.9315 33.9487 14.9315 34.3447C14.9315 34.7407 14.7742 35.1205 14.4942 35.4006C14.2142 35.6806 13.8344 35.8379 13.4384 35.8379ZM10.4521 29.8653H1.49315C1.09714 29.8653 0.717355 29.708 0.437335 29.4279C0.157314 29.1479 0 28.7681 0 28.3721C0 27.9761 0.157314 27.5963 0.437335 27.3163C0.717355 27.0363 1.09714 26.879 1.49315 26.879H10.4521C10.8481 26.879 11.2279 27.0363 11.5079 27.3163C11.7879 27.5963 11.9452 27.9761 11.9452 28.3721C11.9452 28.7681 11.7879 29.1479 11.5079 29.4279C11.2279 29.708 10.8481 29.8653 10.4521 29.8653ZM7.46577 23.8927H1.49315C1.09714 23.8927 0.717355 23.7353 0.437335 23.4553C0.157314 23.1753 0 22.7955 0 22.3995C0 22.0035 0.157314 21.6237 0.437335 21.3437C0.717355 21.0637 1.09714 20.9064 1.49315 20.9064H7.46577C7.86178 20.9064 8.24157 21.0637 8.52159 21.3437C8.80161 21.6237 8.95892 22.0035 8.95892 22.3995C8.95892 22.7955 8.80161 23.1753 8.52159 23.4553C8.24157 23.7353 7.86178 23.8927 7.46577 23.8927ZM19.411 35.7707C19.015 35.7883 18.6282 35.6479 18.3357 35.3803C18.0432 35.1128 17.869 34.74 17.8514 34.344C17.8338 33.948 17.9742 33.5612 18.2418 33.2687C18.5093 32.9762 18.8821 32.802 19.2781 32.7844C22.1038 32.5258 24.7974 31.4675 27.0433 29.7333C29.2892 27.999 30.9945 25.6608 31.9594 22.9923C32.9242 20.3239 33.1088 17.4357 32.4914 14.6662C31.874 11.8966 30.4802 9.36032 28.4733 7.35434C26.4664 5.34837 23.9295 3.95577 21.1597 3.33965C18.3898 2.72354 15.5018 2.90942 12.8338 3.87553C10.1658 4.84164 7.82828 6.54797 6.09509 8.79468C4.36191 11.0414 3.30478 13.7354 3.04753 16.5613C3.02988 16.7566 2.97394 16.9465 2.8829 17.1202C2.79185 17.2938 2.66749 17.4479 2.51692 17.5735C2.36634 17.6991 2.1925 17.7939 2.00531 17.8523C1.81812 17.9107 1.62126 17.9317 1.42596 17.9141C1.23066 17.8964 1.04075 17.8405 0.867072 17.7494C0.693392 17.6584 0.539345 17.534 0.413726 17.3835C0.288107 17.2329 0.193377 17.059 0.134943 16.8719C0.0765094 16.6847 0.055517 16.4878 0.0731645 16.2925C0.489589 11.6985 2.6617 7.44214 6.13735 4.40934C9.61301 1.37655 14.1244 -0.19898 18.7324 0.0107303C23.3405 0.22044 27.6901 2.19923 30.8759 5.53518C34.0617 8.87114 35.8383 13.3072 35.8357 17.92C35.8586 22.397 34.1954 26.7186 31.1769 30.0251C28.1584 33.3315 24.0059 35.3806 19.5454 35.7647C19.5006 35.7692 19.4543 35.7707 19.411 35.7707ZM17.9178 8.96112C17.5218 8.96112 17.142 9.11843 16.862 9.39846C16.582 9.67848 16.4247 10.0583 16.4247 10.4543V17.92C16.4248 18.316 16.5821 18.6957 16.8622 18.9757L21.3417 23.4552C21.6233 23.7272 22.0004 23.8777 22.3919 23.8743C22.7834 23.8709 23.1579 23.7138 23.4348 23.437C23.7116 23.1601 23.8687 22.7856 23.8721 22.3941C23.8755 22.0026 23.725 21.6255 23.453 21.3438L19.411 17.3019V10.4543C19.411 10.0583 19.2537 9.67848 18.9737 9.39846C18.6936 9.11843 18.3139 8.96112 17.9178 8.96112Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3015_4879">
          <rect width="35.8357" height="35.8357" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const QuantricIntelligent = () => {
  return (
    <section className={cn(styles.section, "bg-black text-white")}>
      <div className={cn(global.custom_container, styles.inner)}>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:gap-12">
          <div className={cn(styles.diagramPanel, 'gap-x-[40px] gap-y-6')}>
            <div
              className={cn(
                "flex font-medium border-2 flex-col gap-5 p-6",
                global.details_big,styles.large, styles.diagram
              )}
            >
              <span className="inline-flex shrink-0">
                <LoopIcon />
              </span>
              <p>Planning Time Horizon</p>
            </div>
            <div
              className={cn(
                "flex  font-medium border-2 flex-col gap-5 p-6 !bg-white !border-redText text-black",
                global.details_big, styles.middle, styles.diagram
              )}
            >
              
              <p>Intelligent MOM</p>
            </div>
            <div
              className={cn(
                "flex  font-medium border-2 flex-col gap-5 p-6",
                global.details_big,styles.medium, styles.diagram
              )}
            >
              <span className="inline-flex shrink-0">
                <LoopIcon />
              </span>
              <p>Operational Time Horizon</p>
            </div>
            <div
              className={cn(
                "flex  font-medium border-2 flex-col gap-5 p-6",
                global.details_big,styles.small, styles.diagram
              )}
            >
              <span className="inline-flex shrink-0">
                <LoopIcon />
              </span>
              <p>Machine Time Horizon</p>
            </div>
          </div>
          
          <div className={styles.contentPanel}>
            <div className={cn(styles.eyebrow, global.caption1)}>Why Mom</div>

            <div className="space-y-5">
              <h2 className={cn(global.head1, styles.heading)}>
                Quartic Intelligent MOM
              </h2>

              <ul className="space-y-6">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-4 text-white"
                  >
                    <span className={styles.tickWrap}>
                      <TickIcon />
                    </span>

                    <div className="space-y-1">
                      <h3 className={cn(global.head6, "font-semibold")}>
                        {feature.title}
                      </h3>
                      <p className={cn(global.body1, styles.featureText)}>
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button link="/" text="Explore Quartic Architecture" />

              <p className={cn(global.body2, styles.footerNote)}>
                Connected, Intelligent, and Responsive MOM Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantricIntelligent;
