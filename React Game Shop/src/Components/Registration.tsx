import React from "react";
import styles from "../scss/Registration.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  firstName: string;
  lastName: string;
};

type PaginationRegist = {
  regist: boolean;
  setRegist: (active: boolean) => void;
};

const Registration: React.FC<PaginationRegist> = ({ regist, setRegist }) => {
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
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div
      className={`${styles.regist} ${
        regist ? styles.regist : styles.active__regist
      }`}
    >
      <button onClick={() => setRegist(!regist)} className={styles.close}>
        <AiOutlineClose />
      </button>
      <h3>Registration</h3>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.registration}>
            <label>
              First Name
              <input
                {...register("firstName", {
                  required: "The field is required",
                  minLength: {
                    value: 4,
                    message: "Minimum 4 letters",
                  },
                })}
              />
              <div className={styles.error}>
                {errors?.firstName && (
                  <p>{errors?.firstName.message || "Error"}</p>
                )}
              </div>
            </label>

            <label>
              Last name
              <input
                {...register("lastName", {
                  required: "The field is required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 letters",
                  },
                })}
              />
              <div className={styles.error}>
                {errors?.firstName && (
                  <p>{errors?.firstName.message || "Error"}</p>
                )}
              </div>
            </label>
          </div>
          <input type="submit" disabled={!isValid} className={styles.send}/>
        </form>
      </div>
    </div>
  );
};

export default Registration;
