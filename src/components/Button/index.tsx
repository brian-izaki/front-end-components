import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { ShowTsxAndCss } from "..";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "button-primary" | "button-secondary" | "button-dark";
  title: string;
};

export const Button = ({ variant, title, ...rest }: ButtonProps) => {
  return (
    <>
      <button {...rest} className={`${styles.button}  ${styles[variant]}`}>
        <span>{title}</span>
      </button>

      <ShowTsxAndCss
        tsx={`
        import { ButtonHTMLAttributes } from "react";
        import styles from "./styles.module.css";
        import { ShowTsxAndCss } from "..";
        
        type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
          variant: "button-primary" | "button-secondary" | "button-dark";
          title: string;
        };
        
        export const Button = ({ variant, title, ...rest }: ButtonProps) => {
          return (
            <>
              <button {...rest} 
                className={'${"${styles.button}"}   ${"${styles[variant]}"}'}>
                <span>{title}</span>
              </button>
            </>
        )
        }`}
        css={`
          .button {
            position: relative;
            padding: 1rem 2rem;
            border: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            transition: 1s;
            overflow: hidden;
            text-decoration: none;
            cursor: pointer;
          }

          .button-primary:hover {
            background-color: #ff22bb;
          }

          .button-primary::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 400%;
            background-color: #ff22bb;
            transition: 1s;
            animation: animate 2s linear infinite;
            animation-delay: calc(0.2 * 1);
          }

          .button-secondary:hover {
            background-color: var(#00ccff);
          }

          .button-secondary::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 400%;
            background-color: #00ccff;
            transition: 1s;
            animation: animate 2s linear infinite;
          }

          .button-dark:hover {
            background-color: #22e622;
          }

          .button-dark::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 400%;
            background-color: #22e622;
            transition: 1s;
            animation: animate 2s linear infinite;
            animation-delay: calc(0.2 * 3);
          }

          .button:hover::before {
            width: 120%;
          }

          @keyframes animate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .button::after {
            content: "";
            position: absolute;
            background-color: #0e1538;
            inset: 4px;
            transition: 0.5s;
          }

          .button:hover::after {
            background-color: #ff22bb;
          }

          .button-secondary:hover::after {
            background-color: #00ccff;
          }

          .button-dark:hover::after {
            background-color: #22e622;
          }

          .button span {
            position: relative;
            z-index: 10;
            font-size: 16px;
            color: #fff;
            opacity: 0.5;
            text-transform: uppercase;
            letter-spacing: 4px;
            transition: 0.5s;
          }

          .button:hover span {
            opacity: 1;
          }
        `}
      />
    </>
  );
};
