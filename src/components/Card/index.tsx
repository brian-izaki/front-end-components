import styles from "./styles.module.css";
import { Code } from "@material-ui/icons";
import { ShowTsxAndCss } from "..";

type CardProps = {
  variant_color_icon:
    | "#4eb7ff"
    | "#fd6494"
    | "#43f390"
    | "#ffb508"
    | "#37ba82"
    | "#cd57ff";
  description: string;
};

export const Card = ({
  variant_color_icon = "#4eb7ff",
  description,
}: CardProps) => {
  return (
    <>
      <div className={styles.serviceBox}>
        <div className={styles.icon} style={{ background: variant_color_icon }}>
          <Code fontSize="large" />
        </div>
        <div className={styles.content}>
          <h2>{description}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </div>

      <ShowTsxAndCss
        tsx={`
import styles from "./styles.module.css";
import { Code } from "@material-ui/icons";

type CardProps = {
  variant_color_icon:
    | "#4eb7ff"
    | "#fd6494"
    | "#43f390"
    | "#ffb508"
    | "#37ba82"
    | "#cd57ff";
  description: string;
};

export const Card = ({
  variant_color_icon = "#4eb7ff",
  description,
}: CardProps) => {
  return (
    <>
      <div className={styles.serviceBox}>
        <div className={styles.icon} style={{ background: variant_color_icon }}>
          <Code fontSize="large" />
        </div>
        <div className={styles.content}>
          <h2>{description}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
      </div>
  );
};
      `}
        css={`
          .serviceBox {
            position: relative;
            width: 350px;
            height: 280px;
            background-color: #51446e;
            border-radius: 20px;
            overflow: hidden;
          }

          .serviceBox .icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: 0.5s;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 2;
            transition-delay: 0.25s;
          }

          .serviceBox:hover .icon {
            top: 30px;
            left: calc(50% - 50px);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition-delay: 0s;
          }

          .serviceBox .icon svg {
            font-size: 5em;
            transition: 0.5s;
            transition-delay: 0s;
          }
          .serviceBox:hover .icon svg {
            font-size: 1.5em;
            transition-delay: 0.25s;
          }

          .serviceBox .icon span {
            font-size: 2em;
            text-transform: uppercase;
            transition: 0.5s;
            transition-delay: 0s;
          }
          .serviceBox:hover .icon span {
            font-size: 1em;
            transition-delay: 0.25s;
          }

          .serviceBox .content {
            position: relative;
            padding: 20px;
            color: #fff;
            text-align: center;
            margin-top: 120px;
            z-index: 1;
            transform: scale(0);
            transition: 0.5s;
            transition-delay: 0s;
          }

          .serviceBox:hover .content {
            transform: scale(1);
            transition-delay: 0.25s;
          }

          .serviceBox .content h2 {
            margin: 10px 0;
          }

          .serviceBox .content button {
            border: 0px;
            background-color: transparent;
            font-size: 1.3rem;
            cursor: pointer;
            color: #fff;
            opacity: 0.3;
            transition: 0.2s;
          }

          .serviceBox .content button:hover {
            opacity: 0.6;
          }
        `}
      />
    </>
  );
};
