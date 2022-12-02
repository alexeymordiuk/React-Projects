import React from "react";
import { useState } from "react";
import styles from "../../scss/Form.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import { useTheme } from "../../hooks/useTheme";
import { useForm } from "react-hook-form";

type formProps = {
  title: string;
  handleClick: (email: string, pass: string) => void;
};

type Inputs = {
  example: string;
  exampleRequired: string;
  firstName: string;
  lastName: string;
};

const Form: React.FC<formProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { theme, setTheme } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    reset();
  };

  return (
    <form className={styles.formes} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__inner}>
        <AiOutlineUser className={styles.form__icon} />
        <input className={styles.inputs} type="user" placeholder="Name" />
      </div>
      <div className={styles.form__inner}>
        <MdOutlineMailOutline className={styles.form__icon} />
        <input
          className={styles.inputs}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className={styles.form__inner}>
        <CgLock className={styles.form__icon} />
        <input
          className={styles.inputs}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button
        onClick={() => handleClick(email, pass)}
        className={styles.btn__form}
      >
        {title}
      </button>
    </form>
  );
};
export default Form;
